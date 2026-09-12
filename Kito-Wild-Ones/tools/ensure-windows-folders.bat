@ECHO OFF
REM ============================================================
REM Kito & the Wild Ones — SAFE folder ensurer (Windows)
REM ============================================================
REM WHAT THIS DOES:
REM   Creates missing directories only (mkdir).
REM WHAT THIS DOES NOT DO:
REM   - Does not delete anything
REM   - Does not overwrite files
REM   - Does not copy docs/assets from Cloud/GitHub
REM   - Does not install software
REM NOTE:
REM   This is NOT a full sync. Prefer Git clone/pull of Kito-Wild-Ones
REM   into C:\Users\HP\AnimationStudio\Kito-Wild-Ones
REM   See docs\WINDOWS-SYNC.md
REM ============================================================
SETROOT=C:\Users\HP\AnimationStudio\Kito-Wild-Ones
mkdir "%SETROOT%" 2>nul
mkdir "%SETROOT%\.cursor\rules" 2>nul
mkdir "%SETROOT%\assets" 2>nul
mkdir "%SETROOT%\characters\kito" 2>nul
mkdir "%SETROOT%\characters\zuri" 2>nul
mkdir "%SETROOT%\characters\bobo" 2>nul
mkdir "%SETROOT%\characters\jabari" 2>nul
mkdir "%SETROOT%\characters\mama-tembo" 2>nul
mkdir "%SETROOT%\backgrounds" 2>nul
mkdir "%SETROOT%\props" 2>nul
mkdir "%SETROOT%\episodes" 2>nul
mkdir "%SETROOT%\voices" 2>nul
mkdir "%SETROOT%\music" 2>nul
mkdir "%SETROOT%\sound-effects" 2>nul
mkdir "%SETROOT%\scripts" 2>nul
mkdir "%SETROOT%\storyboards" 2>nul
mkdir "%SETROOT%\thumbnails" 2>nul
mkdir "%SETROOT%\shorts" 2>nul
mkdir "%SETROOT%\renders" 2>nul
mkdir "%SETROOT%\exports" 2>nul
mkdir "%SETROOT%\docs" 2>nul
mkdir "%SETROOT%\tools" 2>nul
ECHO Folder structure ready at %SETROOT%
ECHO Reminder: this script only creates empty folders. Use Git sync for files.
