// Indirect loader of the symbol index for Arg.LowOptions.

// Inherit Arg.OptLibrary.
PikeDoc.loadScript("ex/predef_3A_3A/Arg/OptLibrary/load_index.js", "Arg.OptLibrary");

PikeDoc.loadScript("ex/predef_3A_3A/Arg/LowOptions/index.js", false, ["Arg.OptLibrary"]);
