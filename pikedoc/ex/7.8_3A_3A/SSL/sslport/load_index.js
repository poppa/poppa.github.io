// Indirect loader of the symbol index for SSL.sslport.

// Inherit ADT.Queue.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Queue/load_index.js", "ADT.Queue");

// Inherit SSL.context.
PikeDoc.loadScript("ex/7.8_3A_3A/SSL/context/load_index.js", "SSL.context");

// Inherit Stdio.Port.
PikeDoc.loadScript("ex/7.8_3A_3A/Stdio/Port/load_index.js", "Stdio.Port");

PikeDoc.loadScript("ex/7.8_3A_3A/SSL/sslport/index.js", false, ["ADT.Queue","SSL.context","Stdio.Port"]);
