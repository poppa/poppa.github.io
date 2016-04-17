// Indirect loader of the symbol index for Math.FMatrix.

// Inherit Math.Matrix.
PikeDoc.loadScript("ex/predef_3A_3A/Math/Matrix/load_index.js", "Math.Matrix");

PikeDoc.loadScript("ex/predef_3A_3A/Math/FMatrix/index.js", false, ["Math.Matrix"]);
