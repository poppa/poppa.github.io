// Indirect loader of the symbol index for Crypto.Arcfour.

// Inherit Nettle.ARCFOUR.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ARCFOUR/load_index.js", "Nettle.ARCFOUR");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Arcfour/index.js", false, ["Nettle.ARCFOUR"]);
