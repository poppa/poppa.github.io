// Indirect loader of the symbol index for Tools.Hilfe.GenericHilfe.

// Inherit Tools.Hilfe.Evaluator.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/Hilfe/Evaluator/load_index.js", "Tools.Hilfe.Evaluator");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Hilfe/GenericHilfe/index.js", false, ["Tools.Hilfe.Evaluator"]);
