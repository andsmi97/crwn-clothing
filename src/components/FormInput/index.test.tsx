import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FormInput from "./index";

describe("<FormInput />", () => {
  const wrapper = shallow(<FormInput />);
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders label given label", () => {
    const wrapper = shallow(<FormInput label="label" />);
    console.log(wrapper.find("label"));
    expect(wrapper.find("label")).toBe(1);
  });
});
