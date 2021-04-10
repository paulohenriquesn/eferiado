export type State =  
    "AC"|
    "AL"|
    "AP"|
    "AM"|
    "BA"|
    "CE"|
    "DF"|
    "ES"|
    "GO"|
    "MA"|
    "MT"|
    "MS"|
    "MG"|
    "PA"|
    "PB"|
    "PR"|
    "PE"|
    "PI"|
    "RJ"|
    "RN"|
    "RS"|
    "RO"|
    "RR"|
    "SC"|
    "SP"|
    "SE"|
    "TO"

export type DateType = string | Date

export interface NationalHoliday {
    nome: string;
}

export interface RegionalHoliday {
    nome: string;
    estado: State;
    data?: string;
}

export interface Holidays {
    data: string;
    nacionais: NationalHoliday[];
    regionais: RegionalHoliday[];
}

export function getHolidaysByDate(date: DateType) : Holidays;

export function getHolidaysByState(estado: State, date?: DateType): RegionalHoliday[]