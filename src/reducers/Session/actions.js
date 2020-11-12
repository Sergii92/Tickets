import { TYPES } from "./types";

export const dataActions = {
  fetchData: () => ({
    type: TYPES.FETCH_DATA,
  }),
  fetchDataOK: (data) => ({
    type: TYPES.FETCH_DATA_OK,
    payload: data,
  }),
};
