// Indirect loader of the symbol index for Nettle.ECC_Curve()->ECDSA.

// Inherit Nettle.ECC_Curve()->Point.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ECC_Curve/Point/load_index.js", "Nettle.ECC_Curve()->Point");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ECC_Curve/ECDSA/index.js", false, ["Nettle.ECC_Curve()->Point"]);
