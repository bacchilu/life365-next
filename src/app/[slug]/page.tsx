const SectorPage: React.FC<{params: {slug: string}}> = function ({params}) {
    return <p>This is the {params.slug} Page</p>;
};

export default SectorPage;
