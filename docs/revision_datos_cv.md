Etapas:
1.1 El sistema era usado por mas de 20 sucursales. Eran 3 o 4 por turno en dos turnos
1.2 El sistema se encargaba de getiona y venta de medicacion disponible en cada sucursal y en conbinacion con la central
1.3 Cada sucursal vende entre 300-500 transacciones y cada transaccion puede incluir mas de 1 medicamento, cosmeticos, art. de limpieza, art orpedico. 
1.4 Habia un sistema Desktop en cada sucursal hecho en VB6 y con sistemas legacy y librerias que ya no hay soporte. El sistema se conectaba a una BD local que se sincronizaba con la central.  
El sistema nuevo se diseño como un sistema backend/frontend

1.5 El sistema nuevo se diseño como un sistema backend/frontend, que permitia la intereccion con la BD existente, y manteniendo la logica en codigo migrado a .net 4.7.2 (por compatibilidad mas aceptada por las dll utilizadas) c# en el backend. El frontend se comunicaba con un API REST que hacia de proxy con el backend (logica)
1.6 Si se perdia conexion la transaccion se mantenia local hasta que volviera y se sincronizaba con el servidor, ya existia una sincronizacion nocturna para actualiza los stock en central
1.6 En frontend era en Django/python debido a su flexibidad con UI por medio de templates y su utilizaron "Metro UI" para que se vea igual que las ventanas de Windows. 
1.7 En cada sucursar corria un SO Linux en cada termina se conectaba con un navegador al frontend. Se eligio Linux debia reduccion de costos de licencias de Microsoft (MS) cantidad de teminales x cantidad de sucursales
1.8 La version de era .net 4.7.2 (por compatibilidad mas aceptada por las dll utilizadas) c# en el backend
1.9 Propuse la conversion a frontend/Backend manteniendo la logica en la version 4.7.2 de .net. Probe las versiones posteriores de .net pero  fueron incompatible con las dll (de terceros) ya utilizas por el sistema, pero no actualizadas por sus creadores. Tube que crea un sistema local centralizado de dll (a modo de gestor de paquetes local) debido a que MS usa un enfoque "usar lo mas reciente de las dll" lo cual rompia las depencias con las antiguas por incompatiblidad.
1.10 El sistema es un sistema contenedores era muy basico y lo corriamos en forma local, es decir que se hosteaba en el servidor de la empresa
1.11 Yo hacia los manifiesto, despiegles, monitoreo e incidente
1.12 yo cree un sistema dashboard que brindaba la informacion de sisponibilidad de los servicio, como si era visible la DB, lo endpoints
1.13 yo me encarga CI/CD y lo hacia en forma manual. Yo habia los build y los deploy de los contenedores

1.14 Con la IA (Cursor Editor IA) verificaba que el codigo migrado generalmente era con Visual Studio Comunity mantuviera el funcionamientos. Muchas veces se refactorizo/optimizo muchos metodos (pensados en VB6) para que sean mas eficaces en ejecucion y se simplifico mucho codigo duplicado.
1.15 Generamente usa Claude IA (modelos Sonnet, Opus) por medio Cursor Editor IA, y otros modelos, como Grok, Composer (propio de Cursor), otras veces Qwen.ai, Gemini, ChatGPT
1.16 Yo lo usaba en desarrollo incluso para identificar y corregir errores
1.17 El resultado fue: codigo optmizado, estandrizado, se emplearon patrones y mejores practicas, se pude hacer test unitarios. Se mejor el tiempo de ejecucion, y se crearon plantillas para utilizar como reglas de desarrollo en Cursor Editor para mantener un desarrollo mas homogeneo
1.18 Yo solo intengraba el equipo de desarrollo
1.19 Tenia reuniones de revision para mostrar avances, enfoques, estrategias y bloqueos
1.20 Estuve en contacto directo con negocio y tambien con las operaciones de farmacia dado que estaba todo integrado. Mi encargado de desarrollo (quien desarrollo el sistema en VB6 a lo largo de 15 años, y la empresa se fue ampliando) el conocia la logica del negocio, las reglas, la comunicacion con la DB y todo los actores del sistema
1.21 El sistema pudo ser usada por las sucursales con muy bajo resistencia debido a que la UI era igual a su predecesor, el sistema tenia un mecanismo de reporte de incidentes que permitia rapidamente detectar y correguir errores. Los tiempos de carga se redujeron, los sistemas podieron poner a punto mas rapido y en forma remota y automatizada.
1.22 El logro mas evidente fue mi uso de linux sobre windows y usaba una gestion de archivos con varios niveles de seguridad. Yo tenia practicamente una copia del repositorio con todo el codigo del sistema bajado en mi maquina. La empresa sufrio un ataque por Ramsomeware y todas la maquinas perdieron documentacion y codigo porque fue encriptado y se pedia rescate. Mi maquina fue la unica que no fue afectada debido a los niveles de seguiridad que tenia. Se pudo obtener el acceso al codigo desde mi maquina tanto local como remoto.
Al hablar con otras secciones pude ver sus procupaciones y le facilite el acceso a algunos datos, ellos usan el mismo sistema que sucursal y me orientaron para hacer algunas mejoras.
1.23 Debido al creciento que estaban teniendo con mas sucusales, la direccion opto por un cambio de enfoque de recursos destinado a desarrollo y paso a no ser prioritario y tener enfoque otras areas. 

