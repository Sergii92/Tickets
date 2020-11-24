import { IsessionState } from "../../interfaces/index";

import { dataReducer, dataActions } from "./session";
test("booked success", () => {
  const myState: IsessionState = {
    days: [
      { id: 1, name: "hell0" },
      { id: 2, name: "hell0" },
      { id: 3, name: "hell0" },
    ],
    sessions: [
      {
        daysId: 1,
        sessionName: "hello",
        id: 11,
        description: "ffdfdfdfdfdf",
        time: "10:00",
      },
      {
        daysId: 1,
        sessionName: "hello",
        id: 12,
        description: "ffdfdfdfdfdf",
        time: "12:00",
      },
      {
        daysId: 1,
        sessionName: "hello",
        id: 13,
        description: "ffdfdfdfdfdf",
        time: "14:00",
      },
    ],
    ticket: {
      places: [
        {
          sessionID: 11,
          id: 1,
          booked: false,
        },
        {
          sessionID: 11,
          id: 2,
          booked: false,
        },
        {
          sessionID: 11,
          id: 3,
          booked: false,
        },
        {
          sessionID: 11,
          id: 4,
          booked: false,
        },
      ],
    },
  };
  // reducer()
  const newState = dataReducer(myState, dataActions.bookedPlace(4));
  expect(newState.ticket.places[3].booked).toBeTruthy();
});
