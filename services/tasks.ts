import { ITask } from "components/Molecules/TaskCard";
import { api } from "./api";

export const getUserTasks = async () => {
  return await api
    .get(`users/1436/todos`)
    .then((response: any) => response.data)
    .catch((err) => err);
};

export const createTask = async (title: string, due_on: string) => {
  return await api
    .post(`users/1436/todos`, {title, due_on, status: "pending"})
    .then((response: any) => response.data)
    .catch((err) => err);
};

export const editTask = async (task: ITask) => {
  return await api
    .put(`todos/${task.id}`, {title: task.title, due_on: task.due_on, status: task.status})
    .then((response: any) => response.data)
    .catch((err) => err);
};

export const deleteTask = async (id: number) => {
  return await api
    .delete(`todos/${id}`)
    .then((response: any) => response.data)
    .catch((err) => err);
};
