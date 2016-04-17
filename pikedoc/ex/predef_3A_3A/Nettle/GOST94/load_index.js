// Indirect loader of the symbol index for Nettle.GOST94.

// Inherit Nettle.Hash.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Hash/load_index.js", "Nettle.Hash");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/GOST94/index.js", false, ["Nettle.Hash"]);
