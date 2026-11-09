"""Servidor estático de prueba para el CV.

Sirve la carpeta del sitio (la del .exe, o su carpeta padre si ahí está index.html),
la expone en la red local para probarla desde el celular y abre el navegador.
Uso: servidor.exe [--puerto 8000] [--carpeta RUTA] [--sin-navegador] [--solo-local]
"""

import argparse
import errno
import functools
import http.server
import socket
import sys
import webbrowser
from pathlib import Path

HOST_RED = "0.0.0.0"
HOST_LOCAL = "127.0.0.1"
PUERTO_POR_DEFECTO = 8000
INTENTOS_DE_PUERTO = 20
PUERTO_EN_USO = (errno.EADDRINUSE, getattr(errno, "WSAEADDRINUSE", -1), 10013)


def carpeta_base() -> Path:
    if getattr(sys, "frozen", False):
        return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent


def detectar_sitio(base: Path) -> Path:
    for candidata in (base, base.parent):
        if (candidata / "index.html").is_file():
            return candidata
    return base


def ips_de_red() -> list[str]:
    """IPv4 de esta PC en la red local; la primera es la de la ruta principal (wifi/ethernet)."""
    ips: list[str] = []
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sonda:
            sonda.connect(("10.255.255.255", 1))
            ips.append(sonda.getsockname()[0])
    except OSError:
        pass
    try:
        ips += socket.gethostbyname_ex(socket.gethostname())[2]
    except OSError:
        pass
    validas = [ip for ip in ips if not ip.startswith(("127.", "169.254.", "0."))]
    return list(dict.fromkeys(validas))


class Manejador(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".svg": "image/svg+xml",
        ".webmanifest": "application/manifest+json",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, formato, *args):
        sys.stdout.write(f"[{self.log_date_time_string()}] {self.client_address[0]} {formato % args}\n")


def crear_servidor(carpeta: Path, host: str, puerto: int) -> http.server.ThreadingHTTPServer:
    manejador = functools.partial(Manejador, directory=str(carpeta))
    for candidato in range(puerto, puerto + INTENTOS_DE_PUERTO):
        try:
            return http.server.ThreadingHTTPServer((host, candidato), manejador)
        except OSError as error:
            if error.errno not in PUERTO_EN_USO:
                raise
    raise OSError(f"No hay puertos libres entre {puerto} y {puerto + INTENTOS_DE_PUERTO - 1}.")


def imprimir_qr(texto: str) -> None:
    try:
        import qrcode
    except ImportError:
        return
    qr = qrcode.QRCode(border=1)
    qr.add_data(texto)
    qr.make(fit=True)
    qr.print_ascii(invert=True)


def leer_argumentos() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Servidor estático de prueba.")
    parser.add_argument("--puerto", type=int, default=PUERTO_POR_DEFECTO)
    parser.add_argument("--carpeta", type=Path, default=None)
    parser.add_argument("--sin-navegador", action="store_true")
    parser.add_argument("--solo-local", action="store_true", help="No exponer el sitio en la red local.")
    return parser.parse_args()


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    args = leer_argumentos()
    carpeta = (args.carpeta or detectar_sitio(carpeta_base())).resolve()
    if not carpeta.is_dir():
        print(f"La carpeta no existe: {carpeta}")
        return 1

    host = HOST_LOCAL if args.solo_local else HOST_RED
    try:
        servidor = crear_servidor(carpeta, host, args.puerto)
    except OSError as error:
        print(f"No se pudo iniciar el servidor: {error}")
        return 1

    puerto = servidor.server_address[1]
    url_local = f"http://{HOST_LOCAL}:{puerto}/"
    print(f"Sirviendo: {carpeta}")
    print(f"En esta PC:  {url_local}")

    if not args.solo_local:
        ips = ips_de_red()
        if ips:
            url_red = f"http://{ips[0]}:{puerto}/"
            print(f"En el celular (misma red wifi):  {url_red}")
            for ip in ips[1:]:
                print(f"   otras interfaces:  http://{ip}:{puerto}/")
            print("\nEscanea este código con la cámara del celular:")
            imprimir_qr(url_red)
            print("Si el celular no conecta, permite servidor.exe en el Firewall de Windows (redes privadas).")
        else:
            print("No se detectó una red local; solo disponible en esta PC.")

    print("\nPresiona Ctrl+C para detener.\n")

    if not args.sin_navegador:
        webbrowser.open(url_local)

    with servidor:
        try:
            servidor.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
