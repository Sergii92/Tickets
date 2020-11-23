import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Day from "../components/Day";
import Session from "../components/Session";
import { mock } from "./testMock";
const mockStore = configureStore();

describe("Day Component", () => {
  const props = {
    day: { id: 1, name: "Test" },
    isOpen: true,
  };

  const store = mockStore(mock);

  describe.skip("Day component render", () => {
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
  });
});
