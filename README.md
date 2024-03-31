# Obsidian openLinkText Mobile Bug

This repo aims to reproduce an issue with the `app.workspace.openLinkText` function on Obsidian Mobile.

Steps:

1. Open a new vault
2. Install this plugin (probably via BRAT)
4. Run the "Open Example View" command
5. Click the links in the view
    - "anchor without clickHandler" doesn't work, but this is kind of expected.
    - "anchor with clickHandler"
      - On Desktop, the note will open
      - On Mobile, Obsidian crashes
    - "div with clickHandler"
      - Works on Desktop
      - Crashes on Mobile