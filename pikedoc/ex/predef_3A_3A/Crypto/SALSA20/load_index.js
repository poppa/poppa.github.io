// Indirect loader of the symbol index for Crypto.SALSA20.

// Inherit Nettle.SALSA20.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SALSA20/load_index.js", "Nettle.SALSA20");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SALSA20/index.js", false, ["Nettle.SALSA20"]);
