import axios from 'axios';

export interface Sector {
    Descrizione: string;
    ID_Categoria: number;
    slug: string;
}

export const getAllSectors = async function () {
    const res = await axios.get<Sector[]>('https://www.life365.eu/api/warehouse/getCategories');
    return res.data;
};

export const getSectorBySlug = async function (slug: string) {
    const sectors = await getAllSectors();
    return sectors.find((s) => s.slug === slug);
};
