// Indirect loader of the symbol index for Arg.OptLibrary()->NoOpt.

// Inherit Arg.OptLibrary()->Opt.
PikeDoc.loadScript("ex/predef_3A_3A/Arg/OptLibrary/Opt/load_index.js", "Arg.OptLibrary()->Opt");

PikeDoc.loadScript("ex/predef_3A_3A/Arg/OptLibrary/NoOpt/index.js", false, ["Arg.OptLibrary()->Opt"]);
