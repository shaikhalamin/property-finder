import { PropertyFormHelpers } from "@/data/types/property/property";
import * as yup from "yup";

export const propertySchema = yup
  .object({
    name: yup.string().required({msg:"Name must be string"}),
    purpose: yup.string().required({msg:"purpose must be string"}),
    descriptions: yup.string().required({msg:"descriptions must be string"}),
    address: yup.string().required({msg:"address must be string"}),
    accommodations: yup.string().required({msg:"accommodations must be string"}),
    garage: yup.boolean().required({msg:"garage must be check"}),
    additionalSpec: yup.string().required({msg:"additionalSpec must be string"}),
    electricityCost: yup.string().required({msg:"electricityCost must be string"}),
    lat: yup.string().required({msg:"lat must be string"}),
    long: yup.string().required({msg:"long must be string"}),
    parking: yup.string().required({msg:"parking must be string"}),

    price: yup.number().required({msg:"price must be number"}),
    noOfBedRoom: yup.number().required({msg:"noOfBedRoom must be number"}),
    noOfBathRoom: yup.number().required({msg:"noOfBathRoom must be number"}),
    propertySize: yup.number().required({msg:"propertySize must be number"}),
    yearBuild: yup.number().required({msg:"yearBuild must be number"}),
    totalFloors: yup.number().required({msg:"totalFloors must be number"}),
    ceilingHeight: yup.number().required({msg:"ceilingHeight must be number"}),
    distanceFromCenter: yup.number().required({msg:"distanceFromCenter must be number"}),
    utilityCost: yup.number().required({msg:"utilityCost must be number"}),
    cableTvCost: yup.number().required({msg:"cableTvCost must be number"}),
    areaSize: yup.number().required({msg:"areaSize must be number"}),
    propertyType: yup.number().required({msg:"propertyType must be number"}),
    city: yup.number().required({msg:"city must be number"}),
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
