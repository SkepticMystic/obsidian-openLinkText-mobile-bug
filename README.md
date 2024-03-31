# Obsidian openLinkText Mobile Bug

This repo aims to reproduce an issue with the `app.workspace.openLinkText` function on Obsidian Mobile.

Steps:

1. Open a new vault
2. Install this plugin (probably via BRAT)
3. Create a new note named `example.md` (in the root of the vault)
4. Run the "Open Example View" command
5. Click the link in the view
    - On Desktop, the note will open
    - On Mobile, Obsidian crashes
