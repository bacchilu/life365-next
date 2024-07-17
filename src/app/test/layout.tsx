import type { Metadata } from 'next';

import 'bootstrap/dist/css/bootstrap.min.css';

import { LifeFooter, LifeHeader } from './navbar';

export const metadata = {title: 'Life365', description: 'TEST'} as Metadata;

const TestLayout: React.FC<{children: React.ReactNode}> = function ({children}) {
    return (
        <div>
            <LifeHeader />
            <main>{children}</main>
            <LifeFooter />
        </div>
    );
};

export default TestLayout;
