@echo off
rem Arranca Deutsch Trainer y abre el navegador.
rem Doble clic aqui despues de reiniciar el ordenador: no hace falta nadie mas.
rem Deja esta ventana negra abierta; si la cierras, se para la app.

cd /d "%~dp0"

echo.
echo   Deutsch Trainer
echo   ---------------
echo   Arrancando... el navegador se abre solo en unos segundos.
echo   Para parar la app: cierra esta ventana o pulsa Ctrl+C.
echo.

rem Se espera un poco antes de abrir el navegador, para que el servidor este listo.
start "" /b cmd /c "timeout /t 4 /nobreak >nul & start http://localhost:5180"

npm run dev

rem Si npm falla, la ventana se queda abierta para poder leer el error.
echo.
echo   La app se ha parado. Lee el mensaje de arriba si ha sido por un error.
pause
