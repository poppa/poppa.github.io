// Indirect loader of the symbol index for GLUE.DynList.

// Inherit GLUE.List.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/List/load_index.js", "GLUE.List");

PikeDoc.loadScript("ex/predef_3A_3A/GLUE/DynList/index.js", false, ["GLUE.List"]);
