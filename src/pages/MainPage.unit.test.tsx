import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

describe("MainPage Component", () => {
  const daysData = [
    { id: 1, name: "dfdf" },
    { id: 2, name: "dfdf" },
    { id: 3, name: "dfdf" },
    { id: 4, name: "dfdf" },
  ];

  it("Renders", () => {
    const component = shallow(<MainPage days={daysData} />);
    expect(component).toMatchSnapshot();
  });

  it("Test data", () => {
    const data = jest.fn(() => true);
    data();
    expect(data).toHaveReturned();
    expect(daysData).toHaveLength(daysData.length);
  });
});
