// Indirect loader of the symbol index for Crypto.RSA.PKCS1_5State.

// Inherit Crypto.RSA.PSSState.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/PSSState/load_index.js", "Crypto.RSA.PSSState");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/PKCS1_5State/index.js", false, ["Crypto.RSA.PSSState"]);
