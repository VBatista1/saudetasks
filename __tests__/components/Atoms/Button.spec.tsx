import React from "react";
import { shallow } from "__mocks__/test.setup";
import { Button } from "components/Atoms/Button";
import "jest-styled-components";

describe("Testing Button", () => {
  const mockOnClick = jest.fn();

  it("should show the button", () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find("styles__ButtonContainer");

    expect(button).toHaveLength(1);
    expect(wrapper).toHaveStyleRule('background', 'var(--dark-blue)');
    expect(wrapper).toHaveStyleRule('color', 'var(--white)');
  });

  it("should render content", () => {
    const wrapper = shallow(<Button>Test</Button>);
    const button = wrapper.find("styles__ButtonContainer");

    expect(button.text()).toBe("Test");
  });

  it("should do something on click", () => {
    const wrapper = shallow(<Button onClick={mockOnClick}/>);
    wrapper.prop("onClick")();

    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should change background color and text color", () => {
    const wrapper = shallow(<Button color="#000" textColor="#fff"/>);

    expect(wrapper).toHaveStyleRule('background', '#000');
    expect(wrapper).toHaveStyleRule('color', '#fff');
  });
});
