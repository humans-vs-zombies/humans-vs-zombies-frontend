import Keycloak from "keycloak-js";

const _kc = new Keycloak({
    url: "https://humans-vs-zombies-keycloak.herokuapp.com/auth",
    realm: "humans-vs-zombies",
    clientId: "humans-vs-zombies-frontend"
});

// Fields in _kc.tokenParsed  {exp, iat, auth_time, jti, iss, aud, sub, typ, azp, nonce, session_state, acr, allowed-origins, realm_access, resource_access, scope, sid, email_verified, name, preferred_username, given_name, family_name, email})

const login = _kc.login;
const logout = _kc.logout;
const getLoggedIn = () => !!_kc.token;
const getPreferredUsername = () => _kc.tokenParsed?.preferred_username;
const getEmail = () => _kc.tokenParsed?.email;
const getEmailVerified = () => _kc.tokenParsed?.email_verified;
const getName = () => _kc.tokenParsed?.name;
const getGivenName = () => _kc.tokenParsed?.given_name;
const getFamilyName = () => _kc.tokenParsed?.family_name;

const hasRole = (roles) => roles.some((role) => _kc.hasResourceRole(role));
//const getToken = () => _kc.token;
const UserService = {
    _kc,
    login,
    logout,
    getLoggedIn,
    getPreferredUsername,
    getEmail,
    getEmailVerified,
    getName,
    getGivenName,
    getFamilyName,
    hasRole,
};

export default UserService;