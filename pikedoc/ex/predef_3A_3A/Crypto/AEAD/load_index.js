// Indirect loader of the symbol index for Crypto.AEAD.

// Inherit Nettle.AEAD.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/AEAD/load_index.js", "Nettle.AEAD");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AEAD/index.js", false, ["Nettle.AEAD"]);
