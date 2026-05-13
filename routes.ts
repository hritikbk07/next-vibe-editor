// an arrray of routes that can be accesible to the public 
// these routes donot reuire authentication
/** @type {string[]} */

export const publicRoutes: string[] = [

]

// an array oroutes that are protected
// these routes require authentication to access
/** @type {string[]} */


export const protectedRoutes: string[] = [
    "/",
]

// an array of routes that are accessible to the public
// Routes that start with this (/api/auth)prefix donot require authentication

/** @type {string[]} */

export const authRoutes: string[] = [
    "/auth/sign-in",
]

// an array of routes that are accessible to the public
// routes that start with this (/api/auth) prefix do not require authentication
/** @type {string} */

export const apiAuthPrefix: string = "/api/auth"
// changed to redirect to home page after login
export const DEFAULT_LOGIN_REDIRECT = "/";
