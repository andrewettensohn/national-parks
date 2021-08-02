export interface Park {
    id: string;
    url: string;
    fullName: string;
    parkCode: string;
    description: string;
    latitude: string;
    longitude: string;
    latLong: string;
    activities: Activity[];
    topics: Activity[];
    states: string;
    contacts: Contacts;
    entranceFees: Entrance[];
    entrancePasses: Entrance[];
    fees: any[];
    directionsInfo: string;
    directionsUrl: string;
    operatingHours: OperatingHour[];
    addresses: Address[];
    images: Image[];
    weatherInfo: string;
    name: string;
    designation: string;
}

export interface Activity {
    id: string;
    name: string;
}

export interface Address {
    postalCode: string;
    city: string;
    stateCode: StateCode;
    line1: string;
    type: AddressType;
    line3: string;
    line2: string;
}

export enum StateCode {
    Ar = "AR",
    Nm = "NM",
}

export enum AddressType {
    Mailing = "Mailing",
    Physical = "Physical",
}

export interface Contacts {
    phoneNumbers: PhoneNumber[];
    emailAddresses: EmailAddress[];
}

export interface EmailAddress {
    description: string;
    emailAddress: string;
}

export interface PhoneNumber {
    phoneNumber: string;
    description: string;
    extension: string;
    type: PhoneNumberType;
}

export enum PhoneNumberType {
    Fax = "Fax",
    Voice = "Voice",
}

export interface Entrance {
    cost: string;
    description: string;
    title: string;
}

export interface Image {
    credit: string;
    title: string;
    altText: string;
    caption: string;
    url: string;
}

export interface OperatingHour {
    exceptions: Exception[];
    description: string;
    standardHours: Hours;
    name: string;
}

export interface Exception {
    exceptionHours: Hours;
    startDate: Date;
    name: string;
    endDate: Date;
}

export interface Hours {
    wednesday?: string;
    monday?: string;
    thursday?: string;
    sunday?: string;
    tuesday?: string;
    friday?: string;
    saturday?: string;
}