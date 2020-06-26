import Popup from "@ui5/webcomponents/dist/Popup.js";

// Template
import AnotherCustomPopupTemplate from "./generated/templates/AnotherCustomPopupTemplate.lit.js";

// Styles
import AnotherCustomPopupCss from "./generated/themes/AnotherCustomPopup.css.js";


const metadata = {
	tag: "ui5-another-custom-popup",
	properties: {
		modal: {
			type: Boolean,
		}
	},
};

class AnotherCustomPopup extends Popup {
	static get metadata() {
		return metadata;
	}

	static get template() {
		return AnotherCustomPopupTemplate;
	}

	static get styles() {
		return AnotherCustomPopupCss;
	}

	// Implement the 3 abstract methods from Popup.js
	get isModal() {
		return true;
	}

	get _ariaLabelledBy() {
		return "hdr";
	}

	get _ariaModal() {
		return "true";
	}

	// Set the custom classes to the root and content parts of Popup.js
	get classes() {
		return {
			root: {
				"root": true,
			},
			content: {
				"container": true,
			}
		}
	}
}

AnotherCustomPopup.define();

export default AnotherCustomPopup;
