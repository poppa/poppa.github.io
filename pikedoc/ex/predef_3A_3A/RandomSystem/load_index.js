// Indirect loader of the symbol index for RandomSystem.

// Inherit RandomInterface.
PikeDoc.loadScript("ex/predef_3A_3A/RandomInterface/load_index.js", "RandomInterface");

PikeDoc.loadScript("ex/predef_3A_3A/RandomSystem/index.js", false, ["RandomInterface"]);
