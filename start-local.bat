@echo off
setlocal
cd /d "%~dp0"

set PORT=5173
set URL=http://127.0.0.1:%PORT%/index.html

echo Starting TMPS Private High School local website...
echo.
echo Local URL:
echo %URL%
echo.
echo Keep this window open while previewing the site.
echo Press Ctrl+C to stop the local server.
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command "$client = $null; try { $client = New-Object Net.Sockets.TcpClient('127.0.0.1', %PORT%); exit 10 } catch { exit 0 } finally { if ($client) { $client.Close() } }" >nul 2>nul
if %errorlevel%==10 (
  echo A local server is already running on port %PORT%.
  echo Opening the existing preview...
  start "" "%URL%"
  echo.
  pause
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "" "%URL%"
  python -m http.server %PORT% --bind 127.0.0.1
  goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
  start "" "%URL%"
  py -3 -m http.server %PORT% --bind 127.0.0.1
  goto :eof
)

echo Python was not found. Install Python or open index.html directly in your browser.
pause
