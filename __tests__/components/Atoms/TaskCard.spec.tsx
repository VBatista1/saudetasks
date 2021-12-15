import { Provider } from "react-redux";
import React from "react";
import { TaskCard } from "components/Molecules/TaskCard";
import { mount } from "__mocks__/test.setup";
import configureStore from "redux-mock-store";
import { editTask } from "redux/features/modal/modalSlice";

const mockStore = configureStore();

const task = {
  id: 15,
  user_id: 11,
  title: "Spoliatio corona ipsam curriculum voro sordeo demergo decens.",
  due_on: "2022-01-11T00:00:00.000+05:30",
  status: "completed",
};

describe("Testing TaskCard", () => {
  let wrapper: any;
  let store: any;

  beforeEach(() => {
    store = mockStore();

    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <TaskCard task={task} />
      </Provider>
    );
  });

  it("should show the title", () => {
    const title = wrapper.find("span");

    expect(title.text()).toBe(
      "Spoliatio corona ipsam curriculum voro sordeo demergo decens."
    );
  });

  it("should have the checkbox", () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    const checkboxStyled = wrapper.find("styles__StyledCheckbox").first();

    expect(checkbox.length).toEqual(1);
    expect(checkboxStyled.length).toEqual(1);
  });

  it("should be checked", () => {
    const checkbox = wrapper.find("styles__StyledCheckbox").first();

    expect(checkbox.props().checked).toBe(true);
  });

  it("should open modal when clicked", () => {
    const taskCard = wrapper.find("styles__TaskCardContainer").at(0);
    taskCard.prop("onClick")();

    expect(store.dispatch).toHaveBeenCalledWith(editTask({ task }));
  });
});
