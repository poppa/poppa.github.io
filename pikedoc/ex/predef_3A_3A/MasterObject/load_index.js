// Indirect loader of the symbol index for MasterObject.

// Inherit MasterObject()->Codec.
PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Codec/load_index.js", "MasterObject()->Codec");

// Inherit MasterObject()->CompatResolver.
PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/CompatResolver/load_index.js", "MasterObject()->CompatResolver");

// Inherit CompilationHandler.
PikeDoc.loadScript("ex/predef_3A_3A/CompilationHandler/load_index.js", "CompilationHandler");

// Inherit MasterObject()->Pike_8_0_master.
PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Pike_8_0_master/load_index.js", "MasterObject()->Pike_8_0_master");

PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/index.js", false, ["MasterObject()->Codec","MasterObject()->CompatResolver","CompilationHandler","MasterObject()->Pike_8_0_master"]);
