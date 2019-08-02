import React from "react";
import { shallow } from "enzyme";
import SignUp from "../SignUp";

describe("<SignUp />", () => {
  const wrapper = shallow(<SignUp />);
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
