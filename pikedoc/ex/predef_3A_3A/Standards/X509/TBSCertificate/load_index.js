// Indirect loader of the symbol index for Standards.X509.TBSCertificate.

// Inherit Standards.ASN1.Types.Sequence.
PikeDoc.loadScript("ex/predef_3A_3A/Standards/ASN1/Types/Sequence/load_index.js", "Standards.ASN1.Types.Sequence");

PikeDoc.loadScript("ex/predef_3A_3A/Standards/X509/TBSCertificate/index.js", false, ["Standards.ASN1.Types.Sequence"]);
