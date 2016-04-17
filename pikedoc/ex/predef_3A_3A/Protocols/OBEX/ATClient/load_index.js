// Indirect loader of the symbol index for Protocols.OBEX.ATClient.

// Inherit Protocols.OBEX.Client.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/OBEX/Client/load_index.js", "Protocols.OBEX.Client");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/OBEX/ATClient/index.js", false, ["Protocols.OBEX.Client"]);
