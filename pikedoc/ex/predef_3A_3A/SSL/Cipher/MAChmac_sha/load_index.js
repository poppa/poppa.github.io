// Indirect loader of the symbol index for SSL.Cipher.MAChmac_sha.

// Inherit SSL.Cipher.MACAlgorithm.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MACAlgorithm/load_index.js", "SSL.Cipher.MACAlgorithm");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MAChmac_sha/index.js", false, ["SSL.Cipher.MACAlgorithm"]);
