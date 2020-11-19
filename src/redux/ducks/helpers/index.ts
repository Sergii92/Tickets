import { IplaceData } from "../../../interfaces";

export const helperBookedPlace = (
  obj: any,
  arr: Array<IplaceData>,
  id: number
) => {
  const newPlaces = arr.map((place) => {
    if (place.id === id) {
      return {
        ...place,
        booked: true,
      };
    } else {
      return {
        ...place,
      };
    }
  });

  return {
    ...obj,
    places: newPlaces,
  };
};

export const helperGetPlaces = (obj: any, arr: Array<IplaceData>) => {
  return {
    ...obj,
    places: arr,
  };
};
