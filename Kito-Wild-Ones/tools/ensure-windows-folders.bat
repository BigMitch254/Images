@ECHO OFF
REM Recreate Kito-Wild-Ones folders on the Windows PC if needed.
REM Run from: C:\Users\HP\AnimationStudio
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
