import Popup from "@ui5/webcomponents/dist/Popup.js";

// Styles
import CustomPopupCss from "./generated/themes/CustomPopup.css.js";


const metadata = {
	tag: "ui5-custom-popup",
	properties: {
		modal: {
			type: Boolean,
		}
	},
};

class CustomPopup extends Popup {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return CustomPopupCss;
	}

	get isModal() {
		return this.modal;
	}

}

CustomPopup.define();

export default CustomPopup;
