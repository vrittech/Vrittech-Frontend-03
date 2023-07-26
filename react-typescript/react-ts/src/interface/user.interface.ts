export interface AddressInterface {
    city: string;
    postalCode: number;
    zipCode: number;
}

export type AbcInterface = {
    name: string;
    age: number;
    address: AddressInterface;
};