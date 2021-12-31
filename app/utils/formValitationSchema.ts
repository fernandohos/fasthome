import * as Yup from 'yup';

export const schema = Yup.object().shape({
    housing: Yup.string().required('Required field'),
    sale: Yup.string().required('Required field'),
    title: Yup.string().required('Required field'),
    explanation: Yup.string().required('Required field'),
    price: Yup.number().min(1, "Insert a valid Price").required('Required field'),
    numberOfRoom: Yup.number().min(0, "Insert a valid Number of Room").required('Required field'),
    grossM2: Yup.number().min(1, "Insert a valid Gross M²").required('Required field'),
    netM2: Yup.number().min(0, "Insert a valid Net M²").required('Required field'),
    warmingType: Yup.string().required('Required field'),
    buildingAge: Yup.number().min(0, "Insert a valid Building Age").required('Required field'),
    floorLocation: Yup.number().min(0, "Insert a valid Floor Location").required('Required field'),
    avaliableForLoan: Yup.string().required('Required field'),
    furnished: Yup.string(),
    status: Yup.string(),
    dues: Yup.number().min(0, "Insert a valid Dues"),
    swap: Yup.string(),
    front: Yup.string(),
    rentalIncome: Yup.number().min(0, "Insert a valid Rental Income"),
    address: Yup.string().required(),
    interiorFeatures: Yup.array().of(Yup.string()),
    externalFeatures: Yup.array().of(Yup.string())
});