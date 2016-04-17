// Indirect loader of the symbol index for SSL.Cipher.MAChmac_md5.

// Inherit SSL.Cipher.MAChmac_sha.
PikeDoc.loadScript("ex/7.8_3A_3A/SSL/Cipher/MAChmac_sha/load_index.js", "SSL.Cipher.MAChmac_sha");

PikeDoc.loadScript("ex/7.8_3A_3A/SSL/Cipher/MAChmac_md5/index.js", false, ["SSL.Cipher.MAChmac_sha"]);
