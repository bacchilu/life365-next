import {Metadata} from 'next';

export const metadata = {title: 'Life365 - Link', description: 'Link'} as Metadata;

const PageLayout: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <>{children}</>;
};

export default PageLayout;
