// Indirect loader of the symbol index for Standards.ASN1.Types.UniversalString.

// Inherit Standards.ASN1.Types.OctetString.
PikeDoc.loadScript("ex/7.8_3A_3A/Standards/ASN1/Types/OctetString/load_index.js", "Standards.ASN1.Types.OctetString");

PikeDoc.loadScript("ex/7.8_3A_3A/Standards/ASN1/Types/UniversalString/index.js", false, ["Standards.ASN1.Types.OctetString"]);
