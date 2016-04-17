// Indirect loader of the symbol index for Crypto.RIPEMD160.

// Inherit Nettle.RIPEMD160.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/RIPEMD160/load_index.js", "Nettle.RIPEMD160");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RIPEMD160/index.js", false, ["Nettle.RIPEMD160"]);
