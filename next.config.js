const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers');
const { withSentryConfig } = require("@sentry/nextjs");

const isDevelopmentMode = process.env.NODE_ENV === 'development'

const moduleExports = withPWA({
    pwa: {
        disable: isDevelopmentMode,
        dest: 'public'
    },
    future: {
        webpack5: true,
    },
    poweredByHeader: false,
    generateEtags: false,
    async headers() {
        return [{
            source: "/(.*)",
            headers: createSecureHeaders({
                forceHTTPSRedirect: [true, { maxAge: 63072000, includeSubDomains: true }],
                referrerPolicy: "strict-origin-when-cross-origin",
                nosniff: 'nosniff',
                xssProtection: 'block-rendering',
                frameGuard: 'sameorigin',

            })
        }];
    },
})

const SentryWebpackPluginOptions = {
};

module.exports = isDevelopmentMode ? moduleExports : withSentryConfig(moduleExports, SentryWebpackPluginOptions);