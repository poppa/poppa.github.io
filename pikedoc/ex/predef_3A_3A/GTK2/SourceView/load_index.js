// Indirect loader of the symbol index for GTK2.SourceView.

// Inherit GTK2.TextView.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TextView/load_index.js", "GTK2.TextView");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/SourceView/index.js", false, ["GTK2.TextView"]);
