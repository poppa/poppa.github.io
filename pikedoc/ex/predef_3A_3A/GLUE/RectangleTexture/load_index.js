// Indirect loader of the symbol index for GLUE.RectangleTexture.

// Inherit GLUE.BaseTexture.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/BaseTexture/load_index.js", "GLUE.BaseTexture");

PikeDoc.loadScript("ex/predef_3A_3A/GLUE/RectangleTexture/index.js", false, ["GLUE.BaseTexture"]);
