# Windows Sync Guide — Cloud Agent → HP PC

## Reality check

The Cloud Agent **cannot** write directly to:

`C:\Users\HP\AnimationStudio\Kito-Wild-Ones`

It runs on a remote Linux environment. Files live here as:

`/workspace/Kito-Wild-Ones`

(and are also committed on the GitHub branch/PR for this work).

---

## What `tools/ensure-windows-folders.bat` does

The script only runs **mkdir** commands for the studio folder tree under:

`C:\Users\HP\AnimationStudio\Kito-Wild-Ones`

### Safety assessment: **SAFE**

| Behavior | Risk |
|----------|------|
| Creates missing folders | Low — non-destructive |
| Uses `mkdir ... 2>nul` | Low — ignores “already exists” errors |
| Deletes files? | **No** |
| Overwrites files? | **No** |
| Downloads or installs software? | **No** |
| Touches existing docs/assets? | **No** |

**Limitation:** It creates **empty folders only**. It does **not** copy project docs, rules, or git history to your PC. Alone, it is incomplete as a sync method.

---

## Recommended sync method (safest + complete)

### Option A — GitHub PR / clone (recommended)

1. On the HP PC, install Git if needed (do not have the agent auto-install remotely).
2. Create parent folder: `C:\Users\HP\AnimationStudio`
3. Clone or pull the branch that contains `Kito-Wild-Ones/`  
   - Repo currently hosting the work: `BigMitch254/Images`  
   - Branch example: `cursor/kito-phase-2-bibles-edbb` (or merged `main` once approved)
4. Either:
   - Keep using the repo and work inside `...\Images\Kito-Wild-Ones`, then junction/copy to the desired path, **or**
   - Copy the `Kito-Wild-Ones` folder to `C:\Users\HP\AnimationStudio\Kito-Wild-Ones`
5. Optional: run `ensure-windows-folders.bat` only if any empty dirs are missing.
6. Open that folder in Cursor on the PC.

**Why best:** Preserves history, avoids partial copies, no destructive overwrite of unrelated PC files.

### Option B — Download ZIP from GitHub

1. Download the branch ZIP from GitHub in a browser on the phone/PC.
2. Extract `Kito-Wild-Ones` to `C:\Users\HP\AnimationStudio\Kito-Wild-Ones`.
3. If a folder already exists with work, **merge carefully** — do not blanked-overwrite docs you edited locally.

**Why good:** Simple from a phone. **Why weaker:** No easy incremental updates vs Git pull.

### Option C — Cursor Cloud → local (if/when you open the same repo locally)

Open the GitHub repo in Cursor Desktop on the HP PC and pull the branch. Then copy `Kito-Wild-Ones` to the AnimationStudio path if you want that exact location.

---

## What not to do

- Do not assume the Cloud Agent can see `C:\`
- Do not run unknown “sync” tools that wipe directories
- Do not let a blank folder script replace a folder that already contains work
- Do not push production media to public remotes unless you explicitly want that

---

## Suggested PC end state

```
C:\Users\HP\AnimationStudio\
└── Kito-Wild-Ones\          ← full project (docs, .cursor rules, folders, .git optional)
    ├── docs\
    ├── characters\
    ├── ...
    └── tools\ensure-windows-folders.bat
```

If `Kito-Wild-Ones` already exists on the PC with useful files, inspect and merge — never delete first.
