import {getSectorBySlug} from '../../lib/model';

const SectorPage: React.FC<{params: {slug: string}}> = async function ({params}) {
    const currentSector = await getSectorBySlug(params.slug);

    return (
        <p>
            This is the <em>{currentSector!.Descrizione}</em> Page
        </p>
    );
};

export default SectorPage;
