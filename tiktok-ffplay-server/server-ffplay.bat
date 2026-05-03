@echo off
title TikTok FFplay Server
cd /d "%~dp0"

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
)

echo Starting Server...
node server.js
pause