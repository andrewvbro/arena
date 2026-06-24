# ARENA — Multiplayer Shooter

A single-file browser FPS built with Three.js + WebRTC. Play in your browser, install it as an app, or download the desktop build.

## ▶ Play now (browser)

**https://andrewvbro.github.io/arena/**

Works on any modern browser — no install needed.

## ⬇ Download (Windows desktop)

Grab the latest portable build from **[Releases](https://github.com/andrewvbro/arena/releases/latest)** — a single `.exe`, no installation, just run it.

You can also **install it as an app** from the browser: open the play link and use your browser's "Install" option (address-bar icon).

## 👥 Play with friends

1. Click **Host PvP** (or **Zombie Survival**). You get a 4-character room code + **Copy invite link**.
2. Send the link to a friend.
3. They open it and click **Join friend** — connection is peer-to-peer (WebRTC), so it works across the internet.

No friends around? Set **Bots** to 1+ and fight the AI.

## Features

- **63 weapons** — 34 primaries, 24 secondaries, 5 melee, each with a distinct model
- **50 attachments + 8 perks** that change how guns and you play
- **8 maps** including a huge city
- **Movement** — slide, crouch, prone, wall-running, peek, jump on objects, ADS with working scopes
- **Modes** — PvP, co-op Zombie Survival, AI bots
- **Procedural audio** and first-person + full-body player models

## Controls

`WASD` move · `Mouse` look · `L-Click` fire · `R-Click` aim · `R` reload · `1/2/3` weapons
`Space` jump (run into a wall mid-air to wall-run) · `Shift` sprint · `Ctrl` crouch/slide · `Z` prone · `Q`/`E` peek · `F` inspect · `Tab` scores

## Build it yourself

```bash
npm install
npm start        # run the Electron app locally
npm run dist     # build the Windows portable .exe into dist/
```

## License

MIT
