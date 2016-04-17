// Indirect loader of the symbol index for Crypto.DES.

// Inherit Nettle.DES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/DES/load_index.js", "Nettle.DES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/DES/index.js", false, ["Nettle.DES"]);
