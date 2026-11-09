# Compila tools/servidor.py a servidor.exe en la raíz del proyecto.
# Uso: powershell -ExecutionPolicy Bypass -File tools\build-servidor.ps1
$ErrorActionPreference = 'Stop'

$tools = $PSScriptRoot
$root  = Split-Path $tools -Parent
$venv  = Join-Path $env:TEMP 'ale-cv-build-venv'
$work  = Join-Path $env:TEMP 'ale-cv-build'
$py    = Join-Path $venv 'Scripts\python.exe'

if (-not (Test-Path $py)) { py -3 -m venv $venv }
& $py -m pip install --quiet --disable-pip-version-check --upgrade pyinstaller qrcode

& $py -m PyInstaller --onefile --console --clean --noconfirm `
  --name servidor `
  --distpath $root `
  --workpath $work `
  --specpath $work `
  (Join-Path $tools 'servidor.py')
if ($LASTEXITCODE -ne 0) { throw "PyInstaller no pudo compilar; cierra cualquier servidor.exe abierto." }

Write-Host "Listo: $(Join-Path $root 'servidor.exe')"
