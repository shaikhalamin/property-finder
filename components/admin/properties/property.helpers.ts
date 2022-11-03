import { PropertyFormHelpers } from "@/data/types/property/property";
import * as yup from "yup";

export const propertySchema = yup
  .object({
    name: yup.string().required(),
    purpose: yup.string().required(),
    descriptions: yup.string().required(),
    address: yup.string().required(),
    accommodations: yup.string().required(),
    garage: yup.boolean().required(),
    additionalSpec: yup.string().required(),
    electricityCost: yup.string().required(),
    lat: yup.string().required(),
    long: yup.string().required(),
    parking: yup.string().required(),

    price: yup.number().required(),
    noOfBedRoom: yup.number().required(),
    noOfBathRoom: yup.number().required(),
    propertySize: yup.number().required(),
    yearBuild: yup.number().required(),
    totalFloors: yup.number().required(),
    ceilingHeight: yup.number().required(),
    distanceFromCenter: yup.number().required(),
    utilityCost: yup.number().required(),
    cableTvCost: yup.number().required(),
    areaSize: yup.number().required(),
    propertyType: yup.number().required(),
    city: yup.number().required(),
    // features: yup.array().required(),
    // propertyImages: yup.array().required(),
  })
  .required();

export const propertyPurpose = [
  {
    id: "SALE",
    name: "Sale",
  },
  {
    id: "RENT",
    name: "Rent",
  },
];

export type PropertyFormData = {
  data: PropertyFormHelpers;
};
