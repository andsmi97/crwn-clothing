import React from "react";
import { shallow } from "enzyme";
import SignInAndSignUp from "../SignInAndSignUp";

describe("<SignInAndSignUp />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SignInAndSignUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
