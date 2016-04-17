// Indirect loader of the symbol index for GTK2.SourceMark.

// Inherit GTK2.TextMark.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TextMark/load_index.js", "GTK2.TextMark");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/SourceMark/index.js", false, ["GTK2.TextMark"]);
