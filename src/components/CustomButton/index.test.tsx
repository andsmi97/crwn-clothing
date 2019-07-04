import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./index";

describe("<CustomButton />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<CustomButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
