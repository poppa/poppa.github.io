// Indirect loader of the symbol index for SSL.Alert.

// Inherit SSL.Packet.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Packet/load_index.js", "SSL.Packet");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Alert/index.js", false, ["SSL.Packet"]);
