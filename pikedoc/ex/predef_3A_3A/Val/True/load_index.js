// Indirect loader of the symbol index for Val.True.

// Inherit Val.Boolean.
PikeDoc.loadScript("ex/predef_3A_3A/Val/Boolean/load_index.js", "Val.Boolean");

PikeDoc.loadScript("ex/predef_3A_3A/Val/True/index.js", false, ["Val.Boolean"]);
