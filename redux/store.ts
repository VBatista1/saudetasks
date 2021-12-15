import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import tasksReducer from './features/tasks/tasksSlice';
import modalReduce from './features/modal/modalSlice';
import useReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
      tasks: tasksReducer,
      modal: modalReduce,
      user: useReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
