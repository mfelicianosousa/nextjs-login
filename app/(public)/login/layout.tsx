import Head from "./head"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <Head />
            <body>
                <h2>Login - Sistema Olá Mundo</h2>
                <hr/>
                {children}
            </body>
        </html>
    )
}