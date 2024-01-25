import React from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <h2>Login - Sistema Olá Mundo</h2>
                <hr/>
                {children}
            </body>
        </html>
    )
}