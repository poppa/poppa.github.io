// Indirect loader of the symbol index for 7.8::.

// Inherit 8.0::.
PikeDoc.loadScript("ex/8.0_3A_3A/load_index.js", "8.0::");

PikeDoc.loadScript("ex/7.8_3A_3A/index.js", false, ["8.0::"]);
