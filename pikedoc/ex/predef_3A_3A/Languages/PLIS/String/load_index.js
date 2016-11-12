// Indirect loader of the symbol index for Languages.PLIS.String.

// Inherit Languages.PLIS.SelfEvaluating.
PikeDoc.loadScript("ex/predef_3A_3A/Languages/PLIS/SelfEvaluating/load_index.js", "Languages.PLIS.SelfEvaluating");

PikeDoc.loadScript("ex/predef_3A_3A/Languages/PLIS/String/index.js", false, ["Languages.PLIS.SelfEvaluating"]);
