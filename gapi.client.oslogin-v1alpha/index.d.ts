// Type definitions for Google Google Cloud OS Login API v1alpha
// Project: https://cloud.google.com/compute/docs/oslogin/rest/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// TypeScript Version: 2.3

// IMPORTANT. 
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator

/// <reference types="gapi.client" />

declare namespace gapi.client.oslogin {
    
    interface SshPublicKey {
        // An expiration time in microseconds since epoch.
        expirationTimeUsec?: string,
        // [Output Only] The SHA-256 fingerprint of the SSH public key.
        fingerprint?: string,
        // Public key text in SSH format, defined by
        // <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
        // section 6.6.
        key?: string,
    }
    
    interface Empty {
    }
    
    interface ImportSshPublicKeyResponse {
        // The login profile information for the user.
        loginProfile?: LoginProfile,
    }
    
    interface PosixAccount {
        // Only one POSIX account can be marked as primary.
        primary?: boolean,
        // The default group ID.
        gid?: number,
        // The user ID.
        uid?: number,
        // The username of the POSIX account.
        username?: string,
        // The path to the logic shell for this account.
        shell?: string,
        // The path to the home directory for this account.
        homeDirectory?: string,
        // The GECOS (user information) entry for this account.
        gecos?: string,
        // System identifier for which account the username or uid applies to.
        // By default, the empty value is used.
        systemId?: string,
    }
    
    interface LoginProfile {
        // Indicates if the user is suspended.
        suspended?: boolean,
        // A map from SSH public key fingerprint to the associated key object.
        sshPublicKeys?: any,
        // The list of POSIX accounts associated with the Directory API user.
        posixAccounts?: PosixAccount[],        
        // A unique user ID for identifying the user.
        name?: string,
    }
    
    interface SshPublicKeysResource {
        // Updates an SSH public key and returns the profile information. This method
        // supports patch semantics.
        patch (request: {        
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // V1 error format.
            "$.xgafv"?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Mask to control which fields get updated. Updates all if not present.
            updateMask?: string,
            // The fingerprint of the public key to update. Public keys are identified by
            // their SHA-256 fingerprint. The fingerprint of the public key is in format
            // `users/{user}/sshPublicKeys/{fingerprint}`.
            name: string,
        }) : gapi.client.Request<SshPublicKey>;        
        
        // Retrieves an SSH public key.
        get (request: {        
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // V1 error format.
            "$.xgafv"?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // The fingerprint of the public key to retrieve. Public keys are identified
            // by their SHA-256 fingerprint. The fingerprint of the public key is in
            // format `users/{user}/sshPublicKeys/{fingerprint}`.
            name: string,
        }) : gapi.client.Request<SshPublicKey>;        
        
        // Deletes an SSH public key.
        delete (request: {        
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // V1 error format.
            "$.xgafv"?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // The fingerprint of the public key to update. Public keys are identified by
            // their SHA-256 fingerprint. The fingerprint of the public key is in format
            // `users/{user}/sshPublicKeys/{fingerprint}`.
            name: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface UsersResource {
        // Adds an SSH public key and returns the profile information. Default POSIX
        // account information is set when no username and UID exist as part of the
        // login profile.
        importSshPublicKey (request: {        
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // V1 error format.
            "$.xgafv"?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // The unique ID for the user in format `users/{user}`.
            parent: string,
        }) : gapi.client.Request<ImportSshPublicKeyResponse>;        
        
        // Retrieves the profile information used for logging in to a virtual machine
        // on Google Compute Engine.
        getLoginProfile (request: {        
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // V1 error format.
            "$.xgafv"?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth access token.
            access_token?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // The unique ID for the user in format `users/{user}`.
            name: string,
        }) : gapi.client.Request<LoginProfile>;        
        
        sshPublicKeys: SshPublicKeysResource,
    }
    
}

declare namespace gapi.client {
    // Load Google Cloud OS Login API v1alpha
    export function load (name: "oslogin", version: "v1alpha") : PromiseLike<void>;    
    export function load (name: "oslogin", version: "v1alpha", callback: () => any) : void;    
    
    const users: gapi.client.oslogin.UsersResource; 
    
}