const API_BASE = "http://localhost:8070";
const STATIC_IMAGES = `${API_BASE}/static/`;
const FEATURES_IMAGES = `${API_BASE}/uploads/feature/`;
const HEADER_IMAGES = `${API_BASE}/uploads/header/`;
const FLOOR_PLAN_IMAGES = `${API_BASE}/uploads/floor_plan/`;

export const API_URLS = {
  base_url: API_BASE,
  static_img: STATIC_IMAGES,
  feature_img: FEATURES_IMAGES,
  header_img: HEADER_IMAGES,
  floor_plan: FLOOR_PLAN_IMAGES,
  propertyTypes: `${API_BASE}/v1/property-type`,
  properties: `${API_BASE}/v1/property`,
};

