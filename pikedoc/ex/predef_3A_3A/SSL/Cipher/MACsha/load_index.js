// Indirect loader of the symbol index for SSL.Cipher.MACsha.

// Inherit SSL.Cipher.MACAlgorithm.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MACAlgorithm/load_index.js", "SSL.Cipher.MACAlgorithm");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MACsha/index.js", false, ["SSL.Cipher.MACAlgorithm"]);
