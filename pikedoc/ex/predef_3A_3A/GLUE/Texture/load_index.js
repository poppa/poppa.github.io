// Indirect loader of the symbol index for GLUE.Texture.

// Inherit GLUE.BaseDWIM.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/BaseDWIM/load_index.js", "GLUE.BaseDWIM");

// Inherit GLUE.BaseTexture.
PikeDoc.loadScript("ex/predef_3A_3A/GLUE/BaseTexture/load_index.js", "GLUE.BaseTexture");

PikeDoc.loadScript("ex/predef_3A_3A/GLUE/Texture/index.js", false, ["GLUE.BaseDWIM","GLUE.BaseTexture"]);
