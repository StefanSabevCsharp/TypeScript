export type Adress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export type Geo = {
    lat: string;
    lng: string;
}