export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface ITask {
  due_on: string;
  id: number;
  status: string;
  title: string;
  user_id: number;
}
