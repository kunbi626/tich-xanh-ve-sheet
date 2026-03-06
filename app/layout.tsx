import '@/app/globals.css';
import { headers } from 'next/headers';

export const generateMetadata = async () => {
    const h = await headers();
    const host = h.get('x-forwarded-host') || h.get('host');
    const proto = h.get('x-forwarded-proto') || 'https';
    const base = `${proto}://${host}`;

    return {
        metadataBase: new URL(base)
    };
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body className={`font-body antialiased`}>{children}</body>
        </html>
    );
};
export default RootLayout;
