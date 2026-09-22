# Chiebuka Onyejesi

Personal portfolio site — a single-page React app with sections for experience, education, projects, skills, and contact.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

The project lives in `~/dev/my-website` (see the iCloud note at the bottom). Open a terminal and run:

```sh
cd ~/dev/my-website
npm install          # first time only, or after pulling new dependencies
npm run dev
```

Then open **http://localhost:8080/**.

Leave that terminal running — it's the dev server, and it rebuilds on every save. Press `Ctrl+C` in it to stop.

### Day to day

Once dependencies are installed, starting up is just:

```sh
cd ~/dev/my-website && npm run dev
```

### If port 8080 is already in use

The dev server is pinned to 8080 and will refuse to start rather than silently move to another port. Find and stop whatever is holding it:

```sh
lsof -ti tcp:8080          # prints the process ID, if any
kill $(lsof -ti tcp:8080)  # stop it
```

### Before you deploy

Check that the production build compiles and the types are valid:

```sh
npm run build    # writes dist/
npm run preview  # serve dist/ to confirm it works
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 8080 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit -p tsconfig.app.json` | Type-check without emitting files |

## Adding images

Files in `public/` are served as-is, so photos need to be web-sized before being referenced. Straight-off-the-camera files are far too large — `concepta.png` was 19MB on its own. The site references optimised copies (`buckeye.jpg`, `deere.jpg`, `parker.jpg`, `honeywell.jpg`) capped at 1600px on the long edge at JPEG quality 80.

To add a new photo, resize it on the way in:

```sh
cd ~/dev/my-website
sips -Z 1600 -s format jpeg -s formatOptions 80 \
  ~/Desktop/new-photo.jpeg --out public/new-photo.jpg
```

Then reference it as `/new-photo.jpg` (no `/public` prefix — that path 404s in a production build).

## Requirements

Node 18 or newer, and on Apple Silicon it must be a **native arm64** build. Check with:

```sh
node -p "process.version + ' ' + process.arch"
```

This should print `arm64`. The default Node is already set to `v20.19.4`, which is the only arm64 build installed here — `v20.15.1`, `v22.5.1`, `v22.12.0`, and `v16.20.2` are all x64, so avoid switching to them for this project.

If it reports `x64`, Node is running under Rosetta. Vite's native dependencies (Rollup, esbuild, SWC) are installed per-architecture, so a mismatch fails with errors like `Cannot find module @rollup/rollup-darwin-arm64` or `Host version "0.21.5" does not match binary version "0.28.2"`. Switch back and reinstall:

```sh
nvm use v20.19.4
rm -rf node_modules
npm install
```

## If the dev server starts but the page never loads

Check free disk space first — this was the actual cause of a long hang on this machine:

```sh
df -h /System/Volumes/Data
```

A full disk makes Vite stall while writing its dependency cache. Free some space, then clear the cache and restart:

```sh
rm -rf node_modules/.vite
npm run dev
```

## Keep this project out of iCloud-synced folders

Do not keep the repo in `~/Desktop` or `~/Documents` while iCloud's "Desktop & Documents Folders" sync is on. When iCloud evicts file contents, reads block until the file is downloaded again, and a wedged sync daemon makes those reads hang indefinitely. The symptom is a dev server that prints `ready` and holds the port open but never returns a page, plus `npm install` that stalls for minutes. This project lives in `~/dev/my-website` for that reason.
