// Indirect loader of the symbol index for Web.Auth.OAuth2.Client.

// Inherit Web.Auth.OAuth2.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth2/Base/load_index.js", "Web.Auth.OAuth2.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth2/Client/index.js", false, ["Web.Auth.OAuth2.Base"]);
