import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Modal from "../components/Modal";

const mockStore = configureStore();

describe("Day component render", () => {
  const props = {
    show: true,
    handleClose: () => {},
    sesssion: {
      daysId: 1,
      time: "10:00",
      id: 11,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus quaerat ipsa dolor nihil cum ullam iste culpa veniam, magni a neque beatae consequatur totam eaque maxime aperiam illum molestiae.",
      sessionName: "Sunday session1",
    },
  };

  const store = mockStore({});
  it("RENDER", () => {
    const component = shallow(
      <Provider store={store}>
        <Modal {...props} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
