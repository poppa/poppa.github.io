// Indirect loader of the symbol index for Protocols.LDAP.client.

// Inherit Protocols.LDAP.protocol.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/LDAP/protocol/load_index.js", "Protocols.LDAP.protocol");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/LDAP/client/index.js", false, ["Protocols.LDAP.protocol"]);
