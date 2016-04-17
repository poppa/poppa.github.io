// Indirect loader of the symbol index for CompilerEnvironment.

// Inherit Reporter.
PikeDoc.loadScript("ex/predef_3A_3A/Reporter/load_index.js", "Reporter");

PikeDoc.loadScript("ex/predef_3A_3A/CompilerEnvironment/index.js", false, ["Reporter"]);
