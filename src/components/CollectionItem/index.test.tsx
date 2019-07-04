import React from "react";
import { shallow, mount } from "enzyme";
// import { expect } from "chai";
import CollectionItem from "../CollectionItem";

describe("<CollectionItem />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <CollectionItem id={5} name="name" price={15} imageUrl="image" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  // it("renders an `.collection-item`", () => {
  //   const wrapper = shallow(
  //     <CollectionItem id={5} name="name" price={15} imageUrl="image" />
  //   );
  //   expect(wrapper.find(".collection-item")).to.have.lengthOf(1);
  // });
  // it("renders an `.image`", () => {
  //   const wrapper = shallow(
  //     <CollectionItem id={5} name="name" price={15} imageUrl="image" />
  //   );
  //   expect(wrapper.find(".image")).to.have.lengthOf(1);
  // });
  // it("renders an `.collection-footer`", () => {
  //   const wrapper = shallow(
  //     <CollectionItem id={5} name="name" price={15} imageUrl="image" />
  //   );
  //   expect(wrapper.find(".collection-footer")).to.have.lengthOf(1);
  // });
  // it("renders an `.name`", () => {
  //   const wrapper = shallow(
  //     <CollectionItem id={5} name="name" price={15} imageUrl="image" />
  //   );
  //   expect(wrapper.find(".name")).to.have.lengthOf(1);
  // });
  // it("renders an `.price`", () => {
  //   const wrapper = shallow(
  //     <CollectionItem id={5} name="name" price={15} imageUrl="image" />
  //   );
  //   expect(wrapper.find(".price")).to.have.lengthOf(1);
  // });
  // it("allows us to set props", () => {
  //   const wrapper = mount(
  //     <CollectionItem id={5} name="name" price={15} imageUrl="image" />
  //   );
  //   expect(wrapper.props().id).to.equal(5);
  //   expect(wrapper.props().name).to.equal("name");
  //   expect(wrapper.props().price).to.equal(15);
  //   expect(wrapper.props().imageUrl).to.equal("image");
  // });
});
