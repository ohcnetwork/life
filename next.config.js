const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = withPWA({
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

const SentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);