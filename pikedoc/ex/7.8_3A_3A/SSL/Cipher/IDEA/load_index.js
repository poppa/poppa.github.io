// Indirect loader of the symbol index for SSL.Cipher.IDEA.

// Inherit Crypto.CBC.
PikeDoc.loadScript("ex/8.0_3A_3A/Crypto/CBC/load_index.js", "Crypto.CBC");

PikeDoc.loadScript("ex/7.8_3A_3A/SSL/Cipher/IDEA/index.js", false, ["Crypto.CBC"]);
