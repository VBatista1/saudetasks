import { Provider } from "react-redux";
import React from "react";
import { mount } from "__mocks__/test.setup";
import configureStore from "redux-mock-store";
import { Checkbox } from "components/Atoms/Checkbox";
import { editTask } from "redux/features/modal/modalSlice";

const mockStore = configureStore();

const task = {
  id: 15,
  user_id: 11,
  title: "Spoliatio corona ipsam curriculum voro sordeo demergo decens.",
  due_on: "2022-01-11T00:00:00.000+05:30",
  status: "completed",
};

describe("Testing Checkbox", () => {
  let wrapper: any;
  let store: any;

  beforeEach(() => {
    store = mockStore();

    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <Checkbox task={task} />
      </Provider>
    );
  });

  it("should show the checkbox", () => {
    const checkbox = wrapper.find("styles__CheckboxContainer").first();

    expect(checkbox).toHaveLength(1);
  });
});
