// Indirect loader of the symbol index for Standards.PKCS.CSR.CRI.

// Inherit Standards.ASN1.Types.Sequence.
PikeDoc.loadScript("ex/predef_3A_3A/Standards/ASN1/Types/Sequence/load_index.js", "Standards.ASN1.Types.Sequence");

PikeDoc.loadScript("ex/predef_3A_3A/Standards/PKCS/CSR/CRI/index.js", false, ["Standards.ASN1.Types.Sequence"]);
