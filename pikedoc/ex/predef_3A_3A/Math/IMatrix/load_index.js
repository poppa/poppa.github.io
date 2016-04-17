// Indirect loader of the symbol index for Math.IMatrix.

// Inherit Math.Matrix.
PikeDoc.loadScript("ex/predef_3A_3A/Math/Matrix/load_index.js", "Math.Matrix");

PikeDoc.loadScript("ex/predef_3A_3A/Math/IMatrix/index.js", false, ["Math.Matrix"]);
