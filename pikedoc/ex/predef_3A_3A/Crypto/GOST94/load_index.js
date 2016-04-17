// Indirect loader of the symbol index for Crypto.GOST94.

// Inherit Nettle.GOST94.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/GOST94/load_index.js", "Nettle.GOST94");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/GOST94/index.js", false, ["Nettle.GOST94"]);
