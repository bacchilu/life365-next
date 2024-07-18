import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Container} from 'react-bootstrap';

import {LifeFooter, LifeHeader} from './navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {title: 'Life365', description: 'TEST'} as Metadata;

const RootLayout: React.FC<{children: React.ReactNode}> = function ({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LifeHeader />
                <main>
                    <Container className="p-4">{children}</Container>
                </main>
                <LifeFooter />
            </body>
        </html>
    );
};

export default RootLayout;
