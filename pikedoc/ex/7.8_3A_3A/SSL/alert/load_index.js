// Indirect loader of the symbol index for SSL.alert.

// Inherit SSL.packet.
PikeDoc.loadScript("ex/7.8_3A_3A/SSL/packet/load_index.js", "SSL.packet");

PikeDoc.loadScript("ex/7.8_3A_3A/SSL/alert/index.js", false, ["SSL.packet"]);
