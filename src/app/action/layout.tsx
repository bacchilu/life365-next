import { Metadata } from 'next';

export const metadata = {title: 'Life365 - Action', description: 'Action'} as Metadata;

const PageLayout: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <>{children}</>;
};

export default PageLayout;
