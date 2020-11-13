export const helperBoockedPlace = (sessionsArray, id) => {
  return sessionsArray.map((session) => session);
};

export const helperGetCarentPlaces = (array, id) => {
  return array.map((session) => {
    return session.sessions.map((item) => {
      if (item.id === id) {
        return item.places.map((place) => {
          return {
            ...place,
          };
        });
      }
    });
  });
};
