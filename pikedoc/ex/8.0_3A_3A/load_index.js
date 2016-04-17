// Indirect loader of the symbol index for 8.0::.

// Inherit predef::.
PikeDoc.loadScript("ex/predef_3A_3A/load_index.js", "predef::");

PikeDoc.loadScript("ex/8.0_3A_3A/index.js", false, ["predef::"]);
