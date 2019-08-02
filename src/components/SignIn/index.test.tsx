import React from "react";
import { shallow } from "enzyme";
import SignIn from "../SignIn";

describe("<SignIn />", () => {
  const wrapper = shallow(<SignIn />);
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
