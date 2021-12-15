import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "utils/types";
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
    addTasksList: (state, action: PayloadAction<ITask[]>) => {
      state.list = action.payload;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.list = [...state.list, action.payload];
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const newList = state.list.filter(function (obj) {
        return obj.id !== action.payload;
      });
      state.list = newList;
    },
    modifyTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.list.findIndex((obj => obj.id === action.payload.id));
      let newList = state.list;
      newList[taskIndex] = action.payload;
      state.list = newList;
    },
  },
});

export const { addTasksList, addTask, removeTask, modifyTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.list;

export default tasksSlice.reducer;
