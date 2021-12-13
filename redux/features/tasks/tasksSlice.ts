import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "components/Molecules/TaskCard";
import type { RootState } from "redux/store";

export type TasksState = {
  list: ITask[];
};

const initialState: TasksState = {
    list: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<ITask[]>) => {
      state.list = action.payload;
    },
  },
});


export const { addTasks } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.list;

export default tasksSlice.reducer;
