export const SessionStorageKeys = {
    USER: 'user',
    USERS: 'users',
    PROVIDER: 'provider',
    PROVIDERS: 'providers'
}

export const UserRoles = {
    OWNER: 'owner',
    TENANT: 'tenant'
}

export const DeviceProperties = {
    TITLE:'title',
    MAX_CONSUMPTION:'max',
    DESCRIPTION:'description'
}

export function isLoggedIn() {
    return  getSessionItem(SessionStorageKeys.USER) !== null;
}

export function isAuthorized(authority) {
    const loggedInUser = getSessionItem(SessionStorageKeys.USER);
    return loggedInUser !== null && loggedInUser.role === authority;
}

export function setSessionItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionItem(key) {
    const value = sessionStorage.getItem(key);
    return value !== null ? JSON.parse(value) : value;
}

export function removeSessionItem(key) {
    sessionStorage.removeItem(key);
}

export function clearSession() {
    removeSessionItem(SessionStorageKeys.USER);
}