import { ItemView, Keymap, Plugin, WorkspaceLeaf } from "obsidian";

const VIEW_ID = "example-view";

export default class ExamplePlugin extends Plugin {
	async onload() {
		console.log("loading openLinkText-mobile-bug plugin");

		this.registerView(VIEW_ID, (leaf) => new ExampleView(leaf, this));

		this.addCommand({
			id: "open-example-view",
			name: "Open Example View",
			callback: () => this.activateView(VIEW_ID),
		});
	}

	onunload() {}

	async activateView(view_id: string, options?: { side?: "left" | "right" }) {
		const { workspace } = this.app;

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(view_id);

		if (leaves.length > 0) {
			// A leaf with our view already exists, use that
			leaf = leaves[0];
		} else {
			// Our view could not be found in the workspace, create a new leaf in the right sidebar for it.
			// Default is to open on the right
			leaf =
				options?.side === "left"
					? workspace.getLeftLeaf(false)
					: workspace.getRightLeaf(false);

			if (!leaf) {
				return;
			}

			await leaf.setViewState({ type: view_id, active: true });
		}

		// "Reveal" the leaf in case it is in a collapsed sidebar
		workspace.revealLeaf(leaf);
	}
}

export class ExampleView extends ItemView {
	plugin: ExamplePlugin;

	constructor(leaf: WorkspaceLeaf, plugin: ExamplePlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType() {
		return VIEW_ID;
	}

	getDisplayText() {
		return "Example View";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();

		const path = "example.md";

		container
			.createEl("a", {
				href: path,
				text: "example",
				cls: "internal-link",
				attr: { "data-href": path },
			})
			.onClickEvent((e) => {
				console.log("click");

				this.app.workspace.openLinkText(
					path,
					this.app.workspace.getActiveFile()?.path ?? "",
					Keymap.isModEvent(e)
				);
			});
	}

	async onClose() {}
}
