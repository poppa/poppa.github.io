// Indirect loader of the symbol index for Tools.AutoDoc.PikeParser.

// Inherit Tools.AutoDoc.PikeObjects.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/PikeObjects/load_index.js", "Tools.AutoDoc.PikeObjects");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/PikeParser/index.js", false, ["Tools.AutoDoc.PikeObjects"]);
