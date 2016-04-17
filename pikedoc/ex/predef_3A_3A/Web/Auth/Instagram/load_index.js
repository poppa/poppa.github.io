// Indirect loader of the symbol index for Web.Auth.Instagram.

// Inherit Web.Auth.OAuth2.Client.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth2/Client/load_index.js", "Web.Auth.OAuth2.Client");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/Instagram/index.js", false, ["Web.Auth.OAuth2.Client"]);
