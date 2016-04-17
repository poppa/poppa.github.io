// Indirect loader of the symbol index for SSL.Cipher.MAChmac_sha512.

// Inherit SSL.Cipher.MAChmac_sha.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MAChmac_sha/load_index.js", "SSL.Cipher.MAChmac_sha");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MAChmac_sha512/index.js", false, ["SSL.Cipher.MAChmac_sha"]);
