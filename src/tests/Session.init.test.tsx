import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Session from "../components/Session";

const mockStore = configureStore();

describe("Session  Component", () => {
  const store = mockStore({});
  const sessionProps = {
    daysId: 1,
    time: "10:00",
    id: 11,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus quaerat ipsa dolor nihil cum ullam iste culpa veniam, magni a neque beatae consequatur totam eaque maxime aperiam illum molestiae.",
    sessionName: "Sunday session1",
  };

  describe("Session component render", () => {
    it("RENDER", () => {
      const component = shallow(
        <Provider store={store}>
          <Session sesssion={sessionProps}></Session>
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
    it("Find text", () => {
      const component = shallow(
        <Provider store={store}>
          <Session sesssion={sessionProps}></Session>
        </Provider>
      );

      // const node = component.find("p");

      // expect(node.length).toEqual(2);
    });
  });

  describe("detailse", () => {
    let mySession: any;
    let component: any;
    beforeEach(() => {
      mySession = {
        daysId: 1,
        time: "10:00",
        id: 11,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus quaerat ipsa dolor nihil cum ullam iste culpa veniam, magni a neque beatae consequatur totam eaque maxime aperiam illum molestiae.",
        sessionName: "Sunday session1",
      };
    });

    beforeEach(() => {
      component = shallow(
        <Provider store={store}>
          <Session sesssion={mySession}></Session>
        </Provider>
      );
    });

    it("should exist", () => {
      expect(component).toBeTruthy();
      expect(component.props().children.props.sesssion).toEqual(mySession);
    });
  });
});
