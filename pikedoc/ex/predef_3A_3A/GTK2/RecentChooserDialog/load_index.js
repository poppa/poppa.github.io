// Indirect loader of the symbol index for GTK2.RecentChooserDialog.

// Inherit GTK2.Dialog.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Dialog/load_index.js", "GTK2.Dialog");

// Inherit GTK2.RecentChooser.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/RecentChooser/load_index.js", "GTK2.RecentChooser");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/RecentChooserDialog/index.js", false, ["GTK2.Dialog","GTK2.RecentChooser"]);
