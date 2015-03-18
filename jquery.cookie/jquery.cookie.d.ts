// Type definitions for jQuery Cookie Plugin 1.3
// Project: https://github.com/carhartl/jquery-cookie
// Definitions by: Roy Goode <https://github.com/RoyGoode/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

interface JQueryCookieOptions {
	/** 
	 *  Define lifetime of the cookie.
	 *  Value can be a Number which will be interpreted as days from time of creation or a Date object.
	 *	If omitted, the cookie becomes a session cookie.
	 */
    expires?: number|Date;
	/** 
	 *  Define the path where the cookie is valid.
	 *  By default the path of the cookie is the path of the page where the cookie was created (standard browser behavior).
	 *  If you want to make it available for instance across the entire domain use path: '/'.
	 *  Default: path of page where the cookie was created.
	 *  Note regarding Internet Explorer:
	 *  Due to an obscure bug in the underlying WinINET InternetGetCookie implementation, IE’s document.cookie will not return a cookie if it was set with a path attribute containing a filename. (From Internet Explorer Cookie Internals (FAQ)).
	 *  This means one cannot set a path using path: window.location.pathname in case such pathname contains a filename like so: /check.html (or at least, such cookie cannot be read correctly).
	 */
    path?: string;
	/** 
	 *  Define the domain where the cookie is valid.
	 *  Default: domain of page where the cookie was created.
	 */
    domain?: string;
	/**
	 *  If true, the cookie transmission requires a secure protocol (https).
	 *  Default: false.
	 */
    secure?: boolean;
}

interface JQueryCookieStatic {
    raw?: boolean;
    json?: boolean;

    (): { [key: string]: string };
    (name: string): any;
    (name: string, converter: (value: string) => any): any;
    (name: string, value: string): void;
    (name: string, value: string, options: JQueryCookieOptions): void;
    (name: string, value: any): void;
    (name: string, value: any, options: JQueryCookieOptions): void;
}

interface JQueryStatic {
    cookie?: JQueryCookieStatic;

    removeCookie(name: string): boolean;
    removeCookie(name: string, options: JQueryCookieOptions): boolean;
}
