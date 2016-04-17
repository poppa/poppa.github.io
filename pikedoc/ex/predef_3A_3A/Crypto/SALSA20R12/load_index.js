// Indirect loader of the symbol index for Crypto.SALSA20R12.

// Inherit Nettle.SALSA20R12.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SALSA20R12/load_index.js", "Nettle.SALSA20R12");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SALSA20R12/index.js", false, ["Nettle.SALSA20R12"]);
