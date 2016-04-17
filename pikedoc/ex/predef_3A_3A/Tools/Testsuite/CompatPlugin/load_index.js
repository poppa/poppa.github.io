// Indirect loader of the symbol index for Tools.Testsuite.CompatPlugin.

// Inherit Tools.Testsuite.Plugin.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/Testsuite/Plugin/load_index.js", "Tools.Testsuite.Plugin");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Testsuite/CompatPlugin/index.js", false, ["Tools.Testsuite.Plugin"]);
