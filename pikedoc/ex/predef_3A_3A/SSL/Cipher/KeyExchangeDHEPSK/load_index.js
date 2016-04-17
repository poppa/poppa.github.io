// Indirect loader of the symbol index for SSL.Cipher.KeyExchangeDHEPSK.

// Inherit SSL.Cipher.KeyExchangeDHE.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeDHE/load_index.js", "SSL.Cipher.KeyExchangeDHE");

// Inherit SSL.Cipher.KeyExchangePSK.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangePSK/load_index.js", "SSL.Cipher.KeyExchangePSK");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeDHEPSK/index.js", false, ["SSL.Cipher.KeyExchangeDHE","SSL.Cipher.KeyExchangePSK"]);
