import React from "react";
import { shallow } from "enzyme";
import MenuItem from "../MenuItem";
import { data } from "../Directory/data";
describe("<MenuItem />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <MenuItem
        id={data[0].id}
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={data[0].size}
        linkUrl={data[0].linkUrl}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
