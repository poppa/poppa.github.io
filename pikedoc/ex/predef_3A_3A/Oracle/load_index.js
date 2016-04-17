// Indirect loader of the symbol index for Oracle.

// Inherit Val.Null.
PikeDoc.loadScript("ex/predef_3A_3A/Val/Null/load_index.js", "Val.Null");

PikeDoc.loadScript("ex/predef_3A_3A/Oracle/index.js", false, ["Val.Null"]);
