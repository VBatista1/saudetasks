import React from "react";
import { shallow } from "__mocks__/test.setup";
import { Divider } from "components/Atoms/Divider";

describe("Testing Divider", () => {
  const wrapper = shallow(<Divider/>);
  

  it("should show divider", () => {
    const divider = wrapper.find("styles__DividerContainer");
    expect(divider).toHaveLength(1);
  });
});