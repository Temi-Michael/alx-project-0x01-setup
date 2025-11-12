export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserProps {
    id: number;
    name: string;
    username?: string;
    email?: string;
    // address: Address;
    phone?: string;
    website?: string;
    // company: Company;
}

export interface Address extends UserProps {
    street: string;
    suite?: string;
    city: string;
    zipcode?: string;
    // geo: Geo;
}

export interface Geo extends Address {
    lat?: string;
    lng?: string;
}

export interface Company extends Geo {
    name: string;
    catchPhrase: string;
    bs: string;
}
