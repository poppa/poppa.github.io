// Indirect loader of the symbol index for Protocols.DNS.client.

// Inherit Protocols.DNS.protocol.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/protocol/load_index.js", "Protocols.DNS.protocol");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/client/index.js", false, ["Protocols.DNS.protocol"]);
