// Indirect loader of the symbol index for Protocols.SMTP.AsyncClient.

// Inherit Protocols.SMTP.ClientHelper.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/SMTP/ClientHelper/load_index.js", "Protocols.SMTP.ClientHelper");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/SMTP/AsyncClient/index.js", false, ["Protocols.SMTP.ClientHelper"]);
