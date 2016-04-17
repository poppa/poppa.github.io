// Indirect loader of the symbol index for SSL.connection.

// Inherit ADT.Queue.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Queue/load_index.js", "ADT.Queue");

// Inherit ADT.Queue.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Queue/load_index.js", "ADT.Queue");

// Inherit SSL.handshake.
PikeDoc.loadScript("ex/7.8_3A_3A/SSL/handshake/load_index.js", "SSL.handshake");

// Inherit ADT.Queue.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Queue/load_index.js", "ADT.Queue");

PikeDoc.loadScript("ex/7.8_3A_3A/SSL/connection/index.js", false, ["ADT.Queue","ADT.Queue","SSL.handshake","ADT.Queue"]);
