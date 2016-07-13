var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.

// Create a button
var button = require("sdk/ui/button/action").ActionButton({
  id: "OC-Bookmarks",
  label: "OC Bookmarks",
  icon: {
    "16": "./img/icon_16.png",
    "32": "./img/icon_32.png",
    "64": "./img/icon_64.png"
  },
  onClick: handleClick
});
var text_entry = require("sdk/panel").Panel({
  width: 600,
  height: 400,
  position: button,
  contentURL: data.url("popup.html")
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  text_entry.show();
}

// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
text_entry.on("show", function() {
  text_entry.port.emit("show");
});