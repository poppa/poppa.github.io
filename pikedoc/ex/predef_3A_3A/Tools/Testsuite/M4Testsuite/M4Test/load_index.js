// Indirect loader of the symbol index for Tools.Testsuite.M4Testsuite()->M4Test.

// Inherit Tools.Testsuite.Test.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/Testsuite/Test/load_index.js", "Tools.Testsuite.Test");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Testsuite/M4Testsuite/M4Test/index.js", false, ["Tools.Testsuite.Test"]);
