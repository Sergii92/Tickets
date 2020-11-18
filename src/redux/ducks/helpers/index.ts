export const helperBoockedPlace = (obj: any, arr: Array<any>, id: number) => {
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

export const helperGetPlaces = (obj: any, arr: Array<any>) => {
  return {
    ...obj,
    places: arr,
  };
};
