import React from "react";
import { shallow } from "__mocks__/test.setup";
import { DeleteButton } from "components/Atoms/DeleteButton";

describe("Testing DeleteButton", () => {
  const mockOnClick = jest.fn();
  const wrapper = shallow(<DeleteButton onClick={mockOnClick} />);
  

  it("should show the button", () => {
    const button = wrapper.find("styles__DeleteButtonContainer");
    expect(button).toHaveLength(1);
  });

  it("should show delete icon", () => {
    const deleteIcon = wrapper.find('svg')

    expect(deleteIcon).toBeDefined();
  });

  it("should call function onClick", () => {
    wrapper.prop("onClick")();

    expect(mockOnClick).toHaveBeenCalled();
  });
});
