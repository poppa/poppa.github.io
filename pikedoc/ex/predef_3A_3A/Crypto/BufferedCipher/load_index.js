// Indirect loader of the symbol index for Crypto.BufferedCipher.

// Inherit Nettle.BufferedCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/load_index.js", "Nettle.BufferedCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/BufferedCipher/index.js", false, ["Nettle.BufferedCipher"]);
