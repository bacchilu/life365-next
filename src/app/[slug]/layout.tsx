import {Metadata} from 'next';

import {getSectorBySlug} from '../../lib/model';

export async function generateMetadata({params}: {params: {slug: string}}) {
    const currentSector = await getSectorBySlug(params.slug);
    return {title: `Life365 - ${currentSector!.Descrizione}`, description: currentSector!.Descrizione} as Metadata;
}

const PageLayout: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <>{children}</>;
};

export default PageLayout;
