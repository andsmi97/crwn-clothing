import React from "react";
import { shallow, mount } from "enzyme";
// import { expect } from "chai";
import CollectionPreview from "../CollectionPreview";
import { data } from "../../pages/Shop/data";

describe("<CollectionPreview />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <CollectionPreview
        id={data[0].id}
        title={data[0].title}
        items={data[0].items}
        routeName={data[0].routeName}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
