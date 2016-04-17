// Indirect loader of the symbol index for Web.Auth.OAuth.Signature.HmacSha1.

// Inherit Web.Auth.OAuth.Signature.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Signature/Base/load_index.js", "Web.Auth.OAuth.Signature.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Signature/HmacSha1/index.js", false, ["Web.Auth.OAuth.Signature.Base"]);
