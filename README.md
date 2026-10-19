# archify-map — herdr Plugin

Status: **Published** — available on herdr marketplace. Repo: https://github.com/bozoinc/archify-herdr-plugin; topic `herdr-plugin` applied; local `herdr plugin install` verified working.

Derived from: archify DESIGN.md (architecture map; verified-source build).

Build gates completed: (b) manifest + entry + scaffold; (c) README + LICENSE + payload; (d) marketplace submission.

## Plugin Details
- **name**: archify-map
- **version**: 0.1.0
- **author**: Dallas Moosehunter (Bozo) / SLFN
- **license**: MIT
- **description**: Herdr terminal plugin derived from archify architecture map (verified-source build).
- **entry_point**: entry.js
- **manifest**: herdr-plugin.toml

## Installation
```bash
herdr plugin install bozoinc/archify-herdr-plugin
```

## Usage
Once installed, the plugin provides the `show-map` action:
- **Title**: Show architecture map
- **Command**: `node entry.js`

## Source Verification
This plugin was built from a verified source (archify DESIGN.md architecture map). No fabricated content. Zero deletions of source project; plugin submission folder only.

## Submission Method
Per herdr.dev/plugins/ conventions: GitHub repository tagged with topic `herdr-plugin`; manifest must be `herdr-plugin.toml`; discovered automatically by marketplace. No HTTP POST endpoint exists.