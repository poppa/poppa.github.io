// Indirect loader of the symbol index for Protocols.DNS.server_base.

// Inherit Protocols.DNS.protocol.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/protocol/load_index.js", "Protocols.DNS.protocol");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/server_base/index.js", false, ["Protocols.DNS.protocol"]);
