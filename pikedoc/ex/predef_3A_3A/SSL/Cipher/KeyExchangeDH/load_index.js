// Indirect loader of the symbol index for SSL.Cipher.KeyExchangeDH.

// Inherit SSL.Cipher.KeyExchangeDHE.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeDHE/load_index.js", "SSL.Cipher.KeyExchangeDHE");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeDH/index.js", false, ["SSL.Cipher.KeyExchangeDHE"]);
