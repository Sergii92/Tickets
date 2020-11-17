export const helperBoockedPlace = (obj, arr, id) => {
  const newPlaces = arr.map((place) => {
    if (place.id === id) {
      return {
        ...place,
        boocked: true,
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

export const helperGetPlaces = (obj, arr) => {
  return {
    ...obj,
    places: arr,
  };
};
