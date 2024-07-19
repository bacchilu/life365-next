import axios from 'axios';

export interface Sector {
    Descrizione: string;
    ID_Categoria: number;
    slug: string;
}

export const getSectors = async function () {
    const res = await axios.get<Sector[]>('https://www.life365.eu/api/warehouse/getCategories');
    return res.data;
};
