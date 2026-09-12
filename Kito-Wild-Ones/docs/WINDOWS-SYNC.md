# Windows Sync — Cloud Agent → HP PC

## Reality check

This Cloud Agent **cannot** write to:

`C:\Users\HP\AnimationStudio\Kito-Wild-Ones`

Files live in the GitHub repo under `Kito-Wild-Ones/`.

---

## Completed work is on this branch

**Repository:** `https://github.com/BigMitch254/Images`  
**Branch with foundation + Phase 2 + Phase 3 (Remotion + Pip test):**  
`cursor/kito-phase-3-remotion-pip-edbb`

(Phase 2-only branch was `cursor/kito-phase-2-bibles-edbb`. Prefer the Phase 3 branch above for the full studio.)

---

## One-time action on your Windows PC (recommended)

Open **PowerShell** or **Command Prompt** on the HP PC and run:

```bat
mkdir C:\Users\HP\AnimationStudio 2>nul
cd C:\Users\HP\AnimationStudio
git clone -b cursor/kito-phase-3-remotion-pip-edbb --single-branch https://github.com/BigMitch254/Images.git Kito-Wild-Ones-repo
xcopy /E /I /Y Kito-Wild-Ones-repo\Kito-Wild-Ones Kito-Wild-Ones
```

Then open:

`C:\Users\HP\AnimationStudio\Kito-Wild-Ones`

in Cursor.

### Install Remotion deps on Windows (after clone)

```bat
cd C:\Users\HP\AnimationStudio\Kito-Wild-Ones\tools\animation
npm install
npm run start
```

To re-render Pip test:

```bat
npm run render:pip-test
```

---

## What `tools/ensure-windows-folders.bat` does

Creates **missing folders only** (`mkdir`).  
It does **not** delete, overwrite, download, or install anything.  
It is **safe** but **incomplete** as a sync method (empty folders only).

See also: use Git clone/pull for real file sync.

---

## If `Kito-Wild-Ones` already exists on the PC

Do **not** wipe it. Inspect first, then merge/copy new files carefully, or pull the branch into a side folder and compare.
