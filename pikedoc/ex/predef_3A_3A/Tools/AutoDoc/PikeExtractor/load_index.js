// Indirect loader of the symbol index for Tools.AutoDoc.PikeExtractor.

// Inherit Tools.AutoDoc.DocParser.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/DocParser/load_index.js", "Tools.AutoDoc.DocParser");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/PikeExtractor/index.js", false, ["Tools.AutoDoc.DocParser"]);
