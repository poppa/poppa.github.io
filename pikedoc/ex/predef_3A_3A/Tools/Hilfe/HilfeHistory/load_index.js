// Indirect loader of the symbol index for Tools.Hilfe.HilfeHistory.

// Inherit ADT.History.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/History/load_index.js", "ADT.History");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Hilfe/HilfeHistory/index.js", false, ["ADT.History"]);
