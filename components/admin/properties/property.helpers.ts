import { PropertyFormHelpers } from "@/data/types/property/property";
import * as yup from "yup";

export const propertySchema = yup
  .object({
    name: yup.string().required("Name is required"),
    purpose: yup.mixed().oneOf(['SALE', 'RENT']),//yup.string().required("Purpose is required").typeError("Please select a purpose"),
    descriptions: yup.string().required("Description is required"),
    address: yup.string().required("Address is required"),
    accommodations: yup.string().required("Accommodations is required"),
    garage: yup.boolean().required("Garage is required"),
    additionalSpec: yup.string().nullable().optional(),
    electricityCost: yup.string().required("Electricity cost is required"),
    lat: yup.number().required().typeError("Please add a valid lat"),
    long: yup.number().required().typeError("Please add a valid long"),
    parking: yup.string().required("Parking cost is required"),
    heating: yup.string().required("Heating cost is required"),
    price: yup.number().required().typeError("Please add a valid price"),
    noOfBedRoom: yup.number().required().typeError("Please add a valid noOfBedRoom"),
    noOfBathRoom: yup.number().required().typeError("Please add a valid noOfBathRoom"),
    propertySize: yup.number().required().typeError("Please add a valid propertySize"),
    yearBuild: yup.number().required().typeError("Please add a valid yearBuild"),
    totalFloors: yup.number().required().typeError("Please add a valid totalFloors"),
    ceilingHeight: yup.number().required().typeError("Please add a valid ceilingHeight"),
    distanceFromCenter: yup.number().required().typeError("Please add a valid distanceFromCenter"),
    utilityCost: yup.number().required().typeError("Please add a valid utilityCost"),
    cableTvCost: yup.number().required().typeError("Please add a valid cableTvCost"),
    areaSize: yup.number().required().typeError("Please add a valid areaSize"),
    propertyType: yup.number().required("Property type is required").typeError("Please select a property type"),
    city: yup.number().required("City is required").typeError("Please select a city"),
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
