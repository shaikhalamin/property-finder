
type KeyValueObject = {
    [key: string]: string;
}

export const bindKeyValue = (
  searchParams: URLSearchParams,
  object: KeyValueObject
) => {
  for (const [key, value] of Object.entries(object)) {
    searchParams.append(key, String(value).toString());
  }
  return searchParams;
};

export const bindFilterKeyValue = (filterObject: KeyValueObject) => {
  let filterQueryString = ``;
  for (const [key, value] of Object.entries(filterObject)) {
    filterQueryString += `&filters[${key}]=${value}`;
  }
  return filterQueryString;
};

type FilterType = {
  basic: KeyValueObject;
  order: KeyValueObject;
  filters: KeyValueObject;
};

export const generatePropertyFilterUrl = (url: string, filters: FilterType) => {
  const searchParams = new URLSearchParams({});
  bindKeyValue(searchParams, filters.basic);
  bindKeyValue(searchParams, filters.order);
  const filterQueryString = bindFilterKeyValue(filters.filters);

  return `${url}?${searchParams.toString()}${filterQueryString}`;
};
