export interface Iday {
  readonly id: number;
  name: string;
}

export interface ComponentProps {
  day: Iday;
}

export interface IsessionData {
  daysId: number;
  description: string;
  id: number;
  sessionName: string;
  time: string;
}

export interface IplaceData {
  sessionID: number;
  id: number;
  booked: boolean;
}

export interface Itiket {
  places: Array<IplaceData>;
}

export interface IsessionProps {
  sesssion: IsessionData;
}

export interface IsessionState {
  days: Array<Iday>;
  sessions: Array<IsessionData>;
  ticket: any;
}
export interface IactionType {
  type: string;
  payload: any;
}

export interface Itypes {
  FETCH_DAYS: string;
  FETCH_DATA_SUCCESS: string;
  FETCH_SESSIONS: string;
  FETCH_SESSIONS_SUCCESS: string;
  FETCH_PLACES: string;
  FETCH_PLACES_SUCCESS: string;
  GET_SESSION_ID: string;
  BOOKED_PLACE: string;
  PUT_PLACES: string;
  PUT: string;
}
