// Type definitions for Google Firebase Dynamic Links API v1
// Project: https://firebase.google.com/docs/dynamic-links/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// TypeScript Version: 2.3

// IMPORTANT. 
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator

/// <reference types="gapi.client" />

declare namespace gapi.client.firebasedynamiclinks {
    
    interface CreateShortDynamicLinkRequest {
        // Information about the Dynamic Link to be shortened.
        // [Learn more](https://firebase.google.com/docs/dynamic-links/android#create-a-dynamic-link-programmatically).
        dynamicLinkInfo?: DynamicLinkInfo,
        // Full long Dynamic Link URL with desired query parameters specified.
        // For example,
        // "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample",
        // [Learn more](https://firebase.google.com/docs/dynamic-links/android#create-a-dynamic-link-programmatically).
        longDynamicLink?: string,
        // Short Dynamic Link suffix. Optional.
        suffix?: Suffix,
    }
    
    interface DynamicLinkEventStat {
        // The number of times this event occurred.
        count?: string,
        // Link event.
        event?: string,
        // Requested platform.
        platform?: string,
    }
    
    interface CreateShortDynamicLinkResponse {
        // Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
        shortLink?: string,
        // Preivew link to show the link flow chart.
        previewLink?: string,
        // Information about potential warnings on link creation.
        warning?: DynamicLinkWarning[],        
    }
    
    interface Suffix {
        // Suffix option.
        option?: string,
    }
    
    interface GooglePlayAnalytics {
        // Campaign medium; used to identify a medium such as email or cost-per-click.
        utmMedium?: string,
        // Campaign term; used with paid search to supply the keywords for ads.
        utmTerm?: string,
        // Campaign source; used to identify a search engine, newsletter, or other
        // source.
        utmSource?: string,
        // [AdWords autotagging parameter](https://support.google.com/analytics/answer/1033981?hl=en);
        // used to measure Google AdWords ads. This value is generated dynamically
        // and should never be modified.
        gclid?: string,
        // Campaign name; used for keyword analysis to identify a specific product
        // promotion or strategic campaign.
        utmCampaign?: string,
        // Campaign content; used for A/B testing and content-targeted ads to
        // differentiate ads or links that point to the same URL.
        utmContent?: string,
    }
    
    interface DynamicLinkInfo {
        // Android related information. See Android related parameters in the
        // [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
        androidInfo?: AndroidInfo,
        // Information of navigation behavior of a Firebase Dynamic Links.
        navigationInfo?: NavigationInfo,
        // Parameters used for tracking. See all tracking parameters in the
        // [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
        analyticsInfo?: AnalyticsInfo,
        // Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl
        // [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive)
        // on how to set up Dynamic Link domain associated with your Firebase project.
        // 
        // Required.
        dynamicLinkDomain?: string,
        // The link your app will open, You can specify any URL your app can handle.
        // This link must be a well-formatted URL, be properly URL-encoded, and use
        // the HTTP or HTTPS scheme. See 'link' parameters in the
        // [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
        // 
        // Required.
        link?: string,
        // iOS related information. See iOS related parameters in the
        // [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
        iosInfo?: IosInfo,
        // Parameters for social meta tag params.
        // Used to set meta tag data for link previews on social sites.
        socialMetaTagInfo?: SocialMetaTagInfo,
    }
    
    interface ITunesConnectAnalytics {
        // Provider token that enables analytics for Dynamic Links from within iTunes
        // Connect.
        pt?: string,
        // Affiliate token used to create affiliate-coded links.
        at?: string,
        // iTune media types, including music, podcasts, audiobooks and so on.
        mt?: string,
        // Campaign text that developers can optionally add to any link in order to
        // track sales from a specific marketing campaign.
        ct?: string,
    }
    
    interface SocialMetaTagInfo {
        // A short description of the link. Optional.
        socialDescription?: string,
        // An image url string. Optional.
        socialImageLink?: string,
        // Title to be displayed. Optional.
        socialTitle?: string,
    }
    
    interface DynamicLinkStats {
        // Dynamic Link event stats.
        linkEventStats?: DynamicLinkEventStat[],        
    }
    
    interface DynamicLinkWarning {
        // The warning code.
        warningCode?: string,
        // The warning message to help developers improve their requests.
        warningMessage?: string,
        // The document describing the warning, and helps resolve.
        warningDocumentLink?: string,
    }
    
    interface AndroidInfo {
        // Link to open on Android if the app is not installed.
        androidFallbackLink?: string,
        // Android package name of the app.
        androidPackageName?: string,
        // Minimum version code for the Android app. If the installed app’s version
        // code is lower, then the user is taken to the Play Store.
        androidMinPackageVersionCode?: string,
        // If specified, this overrides the ‘link’ parameter on Android.
        androidLink?: string,
    }
    
    interface NavigationInfo {
        // If this option is on, FDL click will be forced to redirect rather than
        // show an interstitial page.
        enableForcedRedirect?: boolean,
    }
    
    interface IosInfo {
        // Link to open on iOS if the app is not installed.
        iosFallbackLink?: string,
        // iOS App Store ID.
        iosAppStoreId?: string,
        // If specified, this overrides the ios_fallback_link value on iPads.
        iosIpadFallbackLink?: string,
        // iPad bundle ID of the app.
        iosIpadBundleId?: string,
        // Custom (destination) scheme to use for iOS. By default, we’ll use the
        // bundle ID as the custom scheme. Developer can override this behavior using
        // this param.
        iosCustomScheme?: string,
        // iOS bundle ID of the app.
        iosBundleId?: string,
    }
    
    interface AnalyticsInfo {
        // iTunes Connect App Analytics.
        itunesConnectAnalytics?: ITunesConnectAnalytics,
        // Google Play Campaign Measurements.
        googlePlayAnalytics?: GooglePlayAnalytics,
    }
    
    interface ShortLinksResource {
        // Creates a short Dynamic Link given either a valid long Dynamic Link or
        // details such as Dynamic Link domain, Android and iOS app information.
        // The created short Dynamic Link will not expire.
        // 
        // Repeated calls with the same long Dynamic Link or Dynamic Link information
        // will produce the same short Dynamic Link.
        // 
        // The Dynamic Link domain in the request must be owned by requester's
        // Firebase project.
        create (request: {        
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
        }) : gapi.client.Request<CreateShortDynamicLinkResponse>;        
        
    }
    
    
    interface V1Resource {
        // Fetches analytics stats of a short Dynamic Link for a given
        // duration. Metrics include number of clicks, redirects, installs,
        // app first opens, and app reopens.
        getLinkStats (request: {        
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
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // The span of time requested in days.
            durationDays?: string,
            // Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
            dynamicLink: string,
        }) : gapi.client.Request<DynamicLinkStats>;        
        
    }
    
}

declare namespace gapi.client {
    // Load Firebase Dynamic Links API v1
    export function load (name: "firebasedynamiclinks", version: "v1") : PromiseLike<void>;    
    export function load (name: "firebasedynamiclinks", version: "v1", callback: () => any) : void;    
    
    const shortLinks: gapi.client.firebasedynamiclinks.ShortLinksResource; 
    
    const v1: gapi.client.firebasedynamiclinks.V1Resource; 
    
}