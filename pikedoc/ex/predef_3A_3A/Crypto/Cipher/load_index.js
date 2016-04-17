// Indirect loader of the symbol index for Crypto.Cipher.

// Inherit Nettle.Cipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Cipher/load_index.js", "Nettle.Cipher");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Cipher/index.js", false, ["Nettle.Cipher"]);
