import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Day from "../components/Day";
import Session from "../components/Session";
const mockStore = configureStore();

describe("Day Component", () => {
  const props = {
    day: { id: 1, name: "Test" },
    isOpen: true,
  };

  const store = mockStore({});

  describe("Day component render", () => {
    it("RENDER", () => {
      const component = shallow(
        <Provider store={store}>
          <Day day={props.day} />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it("Test no cards before open day block", () => {
      const component = shallow(
        <Provider store={store}>
          <Day day={props.day} />
        </Provider>
      );

      expect(component.find(Session)).toHaveLength(0);
    });

    // it("Test render 6 cards after open Day block", () => {
    //   const mockedSession = [
    //     {
    //       daysId: 1,
    //       time: "10:00",
    //       id: 11,
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus quaerat ipsa dolor nihil cum ullam iste culpa veniam, magni a neque beatae consequatur totam eaque maxime aperiam illum molestiae.",
    //       sessionName: "Sunday session1 ",
    //     },
    //     {
    //       daysId: 1,
    //       time: "12:00",
    //       id: 12,
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus quaerat ipsa dolor nihil cum ullam iste culpa veniam, magni a neque beatae consequatur totam eaque maxime aperiam illum molestiae.",
    //       sessionName: "Sunday session2 ",
    //     },
    //   ];
    //   const mockedSessionStore = mockStore({ sessions: mockedSession });

    //   const component = shallow(
    //     <Provider store={mockedSessionStore}>
    //       <Day day={props.day} />
    //     </Provider>
    //   );

    //   // component.find(".card").simulate("click");

    //   // expect(component.find(Session)).toHaveLength(1);
    // });
  });
});
