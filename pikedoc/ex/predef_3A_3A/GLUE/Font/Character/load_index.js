// Indirect loader of the symbol index for GLUE.Font()->Character.

// Inherit GLUE.Region.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/Region/load_index.js", "GLUE.Region");

PikeDoc.loadScript("ex/predef_3A_3A/GLUE/Font/Character/index.js", false, ["GLUE.Region"]);
