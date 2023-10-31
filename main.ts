import { Plugin, moment } from "obsidian";
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
		const date = chrono.parseDate(dateString, new Date(), { forwardDate: true });
		return {
			date: date,
			formatted: moment(date).format("YYYY-MM-DD"),
		}
	}
}
