import React from 'react';

export default function Layout({ title, children }) {
    return (
        <html lang="en" data-theme="nord">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Space+Grotesk%3Awght%40400%3B500%3B700"
                />
                <title>{title}</title>
                <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
            </head>
            <body style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
                {children}
            </body>
        </html>
    );
}