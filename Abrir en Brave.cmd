@echo off
title Deutsch Trainer
cd /d "%~dp0"

if not exist "node_modules" (
  echo Instalando dependencias por primera vez...
  call npm install
)

echo.
echo Arrancando el servidor de Deutsch Trainer...
start "Deutsch Trainer - servidor (no cierres esta ventana)" cmd /k npm run dev

echo Esperando a que el servidor este listo...
timeout /t 5 /nobreak >nul

set "BRAVE="
if exist "%ProgramFiles%\BraveSoftware\Brave-Browser\Application\brave.exe" set "BRAVE=%ProgramFiles%\BraveSoftware\Brave-Browser\Application\brave.exe"
if exist "%LOCALAPPDATA%\BraveSoftware\Brave-Browser\Application\brave.exe" set "BRAVE=%LOCALAPPDATA%\BraveSoftware\Brave-Browser\Application\brave.exe"

if defined BRAVE (
  "%BRAVE%" http://localhost:5180
) else (
  echo No se encontro Brave en las rutas habituales; abriendo con el navegador por defecto.
  start "" http://localhost:5180
)

exit
