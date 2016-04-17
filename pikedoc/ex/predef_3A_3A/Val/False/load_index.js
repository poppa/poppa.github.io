// Indirect loader of the symbol index for Val.False.

// Inherit Val.Boolean.
PikeDoc.loadScript("ex/predef_3A_3A/Val/Boolean/load_index.js", "Val.Boolean");

PikeDoc.loadScript("ex/predef_3A_3A/Val/False/index.js", false, ["Val.Boolean"]);
