interface FileType extends File {
    preview: string;
}

export type FormValuesType = {
    housing: string,
    sale: string,
    title: string,
    explanation: string,
    price: number,
    numberOfRoom: number,
    grossM2: number,
    netM2: number,
    warmingType: string,
    buildingAge: number,
    floorLocation: number,
    avaliableForLoan: string,
    furnished: string,
    status: string,
    dues: number,
    swap: string,
    front: string,
    rentalIncome: number,
    address: string;
    files: FileType[];
    externalFeatures: string[],
    interiorFeatures: string[],
    name: string;
    email: string;
    mobileNumber: string;
    mobileNumber2: string;
    telephone: string;
}