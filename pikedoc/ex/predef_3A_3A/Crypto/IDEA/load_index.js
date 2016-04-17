// Indirect loader of the symbol index for Crypto.IDEA.

// Inherit Nettle.IDEA.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/IDEA/load_index.js", "Nettle.IDEA");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/IDEA/index.js", false, ["Nettle.IDEA"]);
