import React from "react";
import { shallow, render } from "enzyme";

import SingleCard from "../components/SingleCard";

describe("SingleCard Component", () => {
  const props = {
    daysId: 1,
    time: "10:00",
    id: 11,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus quaerat ipsa dolor nihil cum ullam iste culpa veniam, magni a neque beatae consequatur totam eaque maxime aperiam illum molestiae.",
    sessionName: "Sunday session1",
    onClick: () => null,
  };

  it("RENDER", () => {
    const component = shallow(<SingleCard {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("find title", () => {
    const component = render(<SingleCard {...props} />);
    expect(component.find(".card-title").text()).toEqual(props.sessionName);
  });
  it("find text", () => {
    const component = render(<SingleCard {...props} />);
    expect(component.find(".card-text").first().text()).toEqual(
      "Open For get more Information"
    );
  });
});
