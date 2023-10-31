import { Plugin } from "obsidian";
import * as chrono from "chrono-node";

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: "default",
};

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings = DEFAULT_SETTINGS;

	async onload() {}

	onunload() {}

	async loadSettings() {}

	async saveSettings() {}

	parseDate(dateString: string) {
		return chrono.parseDate(dateString, new Date(), { forwardDate: true });
	}
}
