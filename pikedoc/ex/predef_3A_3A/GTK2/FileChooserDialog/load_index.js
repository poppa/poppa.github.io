// Indirect loader of the symbol index for GTK2.FileChooserDialog.

// Inherit GTK2.Dialog.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Dialog/load_index.js", "GTK2.Dialog");

// Inherit GTK2.FileChooser.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/FileChooser/load_index.js", "GTK2.FileChooser");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/FileChooserDialog/index.js", false, ["GTK2.Dialog","GTK2.FileChooser"]);
