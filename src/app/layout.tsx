import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Container} from 'react-bootstrap';

import {getAllSectors} from '../lib/model/sector';
import {Footer, Header} from '../ui/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {title: 'Life365 - Home', description: 'Home'} as Metadata;

const RootLayout: React.FC<{children: React.ReactNode}> = async function ({children}) {
    const sectors = await getAllSectors();

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header sectors={sectors} />
                <main>
                    <Container className="p-4">{children}</Container>
                </main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
