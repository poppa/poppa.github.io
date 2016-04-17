// Indirect loader of the symbol index for Crypto.DSA.

// Inherit Crypto.Sign.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Sign/load_index.js", "Crypto.Sign");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/DSA/index.js", false, ["Crypto.Sign"]);
