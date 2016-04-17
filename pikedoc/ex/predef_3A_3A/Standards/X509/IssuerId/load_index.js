// Indirect loader of the symbol index for Standards.X509.IssuerId.

// Inherit Standards.ASN1.Types.BitString.
PikeDoc.loadScript("ex/predef_3A_3A/Standards/ASN1/Types/BitString/load_index.js", "Standards.ASN1.Types.BitString");

PikeDoc.loadScript("ex/predef_3A_3A/Standards/X509/IssuerId/index.js", false, ["Standards.ASN1.Types.BitString"]);
