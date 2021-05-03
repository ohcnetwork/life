const withPWA = require('next-pwa');
const { createSecureHeaders } = require('next-secure-headers');
const { withSentryConfig } = require('@sentry/nextjs');

const isDevelopmentMode = process.env.NODE_ENV === 'development';

const moduleExports = withPWA({
    pwa: {
        disable: isDevelopmentMode,
        dest: 'public'
    },
    future: {
        webpack5: true
    },
    poweredByHeader: false,
    generateEtags: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: createSecureHeaders({
                    forceHTTPSRedirect: [true, { maxAge: 63072000, includeSubDomains: true }],
                    referrerPolicy: 'strict-origin-when-cross-origin',
                    nosniff: 'nosniff',
                    xssProtection: 'block-rendering',
                    frameGuard: 'sameorigin'
                })
            }
        ];
    },
    webpack: (config, { dev, isServer }) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat'
            });
        }

        return config;
    },
    async redirects() {
        return [
            {
                source: '/videos',
                destination: 'https://cutt.ly/covid19comms',
                permanent: true
            }
        ];
    }
});

const SentryWebpackPluginOptions = {};

module.exports = isDevelopmentMode
    ? moduleExports
    : withSentryConfig(moduleExports, SentryWebpackPluginOptions);
