// Indirect loader of the symbol index for Tools.AutoDoc.PikeObjects.

// Inherit Tools.AutoDoc.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/load_index.js", "Tools.AutoDoc");

// Inherit Parser.XML.Tree.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/load_index.js", "Parser.XML.Tree");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/PikeObjects/index.js", false, ["Tools.AutoDoc","Parser.XML.Tree"]);
