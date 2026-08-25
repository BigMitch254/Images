# Images

## Cursor Cloud specific instructions

This repository is a static image asset store, not a runnable software project. It
contains only:

- `README.md` — one-line description ("saved images").
- `src/*.jpg` — image files uploaded by an external app (commit messages read
  "Upload via StunerWear"). New images are added here as commits.

There is intentionally no application code, no dependency manifest, no test suite,
no linter, and no build system. As a result:

- There is nothing to install; the update script is a no-op.
- There are no lint / test / build commands to run.

### Previewing images (the "run" workflow)

To view the stored images in development, serve the `src/` folder over a static
HTTP server (Python 3 is preinstalled, no dependencies required) and open it in a
browser:

```bash
python3 -m http.server 8000 --directory src
# then browse http://localhost:8000/  and click any .jpg
```

Images are stored as real JPEG files (not Git LFS pointers), so they can be opened
directly from disk or served as-is.
