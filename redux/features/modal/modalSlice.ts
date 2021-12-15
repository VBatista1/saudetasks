import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "utils/types";
import type { RootState } from "redux/store";

export type ModalState = {
  variant: string;
  open: boolean;
  task: ITask;
};

const initialState: ModalState = {
  variant: "",
  open: false,
  task: {
    due_on: "",
    id: 0,
    status: "",
    title: "",
    user_id: 0,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    newTask: (state) => {
      return { ...state, open: true, variant: 'new' }
    },
    editTask: (state, action: PayloadAction<any>) => {
      return { open: true, variant: 'edit', task: action.payload.task }
    },
    closeModal: (state) => {
      return initialState;
    },
    updateTask: (state, action: PayloadAction<any>) => {
      state.task = { ...state.task, ...action.payload };
    },
  },
});

export const { updateTask, closeModal, editTask, newTask } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
