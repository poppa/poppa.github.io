// Indirect loader of the symbol index for Crypto.RSA.State.

// Inherit Crypto.RSA.PKCS1_5State.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/PKCS1_5State/load_index.js", "Crypto.RSA.PKCS1_5State");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/RSA/State/index.js", false, ["Crypto.RSA.PKCS1_5State"]);
