import React from "react";
import { shallow } from "enzyme";
import SignIn from "../SignIn";
import CustomButton from "../CustomButton";

describe("<SignIn />", () => {
  const wrapper = shallow(<SignIn />);
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("prevents default", () => {
    const drink = jest.fn();
    wrapper
      .find(CustomButton)
      .first()
      .simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});
