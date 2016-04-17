// Indirect loader of the symbol index for Arg.OptLibrary()->MaybeOpt.

// Inherit Arg.OptLibrary()->NoOpt.
PikeDoc.loadScript("ex/predef_3A_3A/Arg/OptLibrary/NoOpt/load_index.js", "Arg.OptLibrary()->NoOpt");

PikeDoc.loadScript("ex/predef_3A_3A/Arg/OptLibrary/MaybeOpt/index.js", false, ["Arg.OptLibrary()->NoOpt"]);
