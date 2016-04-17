// Indirect loader of the symbol index for Crypto.RSA.PSSState.

// Inherit Crypto.RSA.OAEPState.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/OAEPState/load_index.js", "Crypto.RSA.OAEPState");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/PSSState/index.js", false, ["Crypto.RSA.OAEPState"]);
