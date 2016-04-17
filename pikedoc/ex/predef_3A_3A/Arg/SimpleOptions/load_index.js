// Indirect loader of the symbol index for Arg.SimpleOptions.

// Inherit Arg.LowOptions.
PikeDoc.loadScript("ex/predef_3A_3A/Arg/LowOptions/load_index.js", "Arg.LowOptions");

PikeDoc.loadScript("ex/predef_3A_3A/Arg/SimpleOptions/index.js", false, ["Arg.LowOptions"]);
