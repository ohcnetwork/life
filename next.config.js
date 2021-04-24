const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers');

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
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