const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './lib/**/*.{js,jsx,ts,tsx}',
        './layouts/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './components/*.{js,jsx,ts,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            transitionProperty: {
                'height': 'height'
            },
            screens: {
                xs: '520px',
                ...defaultTheme.screens
            },
            fontFamily: {
                inter:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
            },
            colors: {
                primary: {
                    50: '#FDFAF7',
                    100: '#FCEEE2',
                    200: '#F9DBC1',
                    300: '#F7BD8D',
                    400: '#F6904D',
                    500: '#FD6400',
                    600: '#E05900',
                    700: '#C75000',
                    800: '#9E3F00',
                    900: '#803300'
                },
                secondary: {
                    50: '#F6F1FD',
                    100: '#E7DBFA',
                    200: '#D0BAF2',
                    300: '#B186EA',
                    400: '#8A57DB',
                    500: '#6436B0',
                    600: '#4D1E9B',
                    700: '#3E1A74',
                    800: '#2F1457',
                    900: '#28114B'
                },
                gray: {
                    100: '#FBFAFC',
                    200: '#F7F5FA',
                    300: '#F1EDF7',
                    400: '#DFDAE8',
                    500: '#BFB8CC',
                    600: '#9187A1',
                    700: '#7D728F',
                    800: '#6A5F7A',
                    900: '#453C52',
                    1000: '#1F2937',
                    1100: '#111827',
                    1200: '#192030',
                    1300: '#131a29'
                }
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'colors.gray.900',
                        h2: {
                            color: 'colors.blue.500',
                            '&:hover': {
                                color: 'colors.blue.700'
                            }
                        },
                        h3: {
                            color: 'colors.blue.500',
                            '&:hover': {
                                color: 'colors.blue.700'
                            }
                        },
                        strong: {
                            color: 'colors.blue.500',
                            '&:hover': {
                                color: 'colors.blue.700'
                            }
                        }
                    }
                },
                DARK: {
                    css: {
                        color: 'colors.gray.100',
                        h2: {
                            color: 'colors.blue.100',
                            '&:hover': {
                                color: 'colors.blue.100'
                            }
                        },
                        h3: {
                            color: 'colors.blue.100',
                            '&:hover': {
                                color: 'colors.blue.100'
                            }
                        },
                        strong: {
                            color: 'colors.blue.500',
                            '&:hover': {
                                color: 'colors.blue.700'
                            }
                        }
                    }
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')()]
};
