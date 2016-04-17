// Indirect loader of the symbol index for Nettle.ARCFOUR.

// Inherit Nettle.Cipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Cipher/load_index.js", "Nettle.Cipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ARCFOUR/index.js", false, ["Nettle.Cipher"]);
