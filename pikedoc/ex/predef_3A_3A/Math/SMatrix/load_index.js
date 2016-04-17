// Indirect loader of the symbol index for Math.SMatrix.

// Inherit Math.Matrix.
PikeDoc.loadScript("ex/predef_3A_3A/Math/Matrix/load_index.js", "Math.Matrix");

PikeDoc.loadScript("ex/predef_3A_3A/Math/SMatrix/index.js", false, ["Math.Matrix"]);
