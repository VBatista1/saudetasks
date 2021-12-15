import type { NextPage } from "next";
import Head from "next/head";

import { Menu } from "components/Organisms/Menu";
import { Navbar } from "components/Organisms/Navbar";
import { Container } from "styles/home";
import { Home } from "components/Templates/Home";
import { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { addTasksList } from "redux/features/tasks/tasksSlice";
import { User, ITask } from "utils/types";
import { addUser } from "redux/features/user/userSlice";

interface HomePageProps {
  tasks: ITask[];
  user: User;
}

const HomePage: NextPage<HomePageProps> = ({ tasks, user }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addTasksList(tasks));
    dispatch(addUser(user));
  }, []);

  return (
    <>
      <Head>
        <title>SaúdeTasks - Exames, Consultas e Cirurgias</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://www.saudeid.com.br/favicon-32x32.png?v=a5c8821faa0ec5cc8340bb445dc291e3"
        />
      </Head>

      <Container>
        <Menu />
        <Navbar />
        <Home />
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const todos = await fetch(`https://gorest.co.in/public/v1/users/1468/todos`);
  const user = await fetch(`https://gorest.co.in/public/v1/users/1468`);

  const userJson = await user.json();
  const todosJson = await todos.json();

  return { props: { tasks: todosJson.data, user: userJson.data } };
}

export default HomePage;
