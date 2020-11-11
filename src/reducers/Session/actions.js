import { TYPES } from "./types";

export const dataActions = {
  fetchData: (data) => ({
    type: TYPES.FETCH_DATA,
    payload: data,
  }),
};
