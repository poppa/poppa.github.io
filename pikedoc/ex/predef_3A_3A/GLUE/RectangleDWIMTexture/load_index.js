// Indirect loader of the symbol index for GLUE.RectangleDWIMTexture.

// Inherit GLUE.BaseDWIM.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/BaseDWIM/load_index.js", "GLUE.BaseDWIM");

// Inherit GLUE.RectangleTexture.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/RectangleTexture/load_index.js", "GLUE.RectangleTexture");

PikeDoc.loadScript("ex/predef_3A_3A/GLUE/RectangleDWIMTexture/index.js", false, ["GLUE.BaseDWIM","GLUE.RectangleTexture"]);
