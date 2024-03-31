# Obsidian openLinkText Mobile Bug

This repo aims to reproduce an issue with the `app.workspace.openLinkText` function on Obsidian Mobile. Specifically, it seems that the function crashes the app when called from a click handler on an anchor/div element.

Environment:

-   In general, the function works _sometimes_. So the specific user environment may affect the outcome.
-   The function works on Desktop
-   The function appears to work on iOS, but crashes on Android

Steps:

1. Open a new vault
2. Install this plugin (probably via BRAT)
3. Run the "Open Example View" command
4. Click the links in the view
    - "anchor without clickHandler"
        - Doesn't do anything, but this is kind of expected
        - Would be nice if we could use regular anchors though
    - "anchor with clickHandler"
        - On Desktop, the note will open
        - On Mobile, Obsidian crashes
    - "div with clickHandler"
        - Works on Desktop
        - Crashes on Mobile
