// Indirect loader of the symbol index for Tools.AutoDoc.DocParser.Parse.

// Inherit Tools.AutoDoc.DocParser.DocParserClass.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/DocParser/DocParserClass/load_index.js", "Tools.AutoDoc.DocParser.DocParserClass");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/AutoDoc/DocParser/Parse/index.js", false, ["Tools.AutoDoc.DocParser.DocParserClass"]);
