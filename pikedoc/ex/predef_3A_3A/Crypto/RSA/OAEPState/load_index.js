// Indirect loader of the symbol index for Crypto.RSA.OAEPState.

// Inherit Crypto.RSA.LowState.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/LowState/load_index.js", "Crypto.RSA.LowState");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/OAEPState/index.js", false, ["Crypto.RSA.LowState"]);
