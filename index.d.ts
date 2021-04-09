export interface NationalHoliday {
    nome: string;
}

export interface RegionalHoliday {
    nome: string;
    estado: string;
}

export interface Holidays {
    date: string;
    nacionais: NationalHoliday[];
    regionais: RegionalHoliday[];
}

export default function isDateHoliday(date: string | Date) : Holidays;
