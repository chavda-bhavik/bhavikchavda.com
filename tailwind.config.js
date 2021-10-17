module.exports = {
    purge: {
        content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                classy: {
                    light: '#E3F2FF',
                    base: '#E6F4F1',
                    medium: '#7FB6AC',
                    dark: '#344B47',
                    maroon: '#ACBAD3',
                },
                spot: {
                    gray: '#AEBCB9',
                },
            },
            animation: {
                'blob-spin': 'blobbing 25s linear infinite',
            },
            keyframes: {
                blobbing: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            textColor: ['disabled'],
        },
    },
    plugins: [],
};
