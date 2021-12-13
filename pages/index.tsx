import type { NextPage } from "next";
import Head from "next/head";

import { Menu } from "components/Organisms/Menu";
import { Navbar } from "components/Organisms/Navbar";
import { MainContainer, Container } from "styles/home";
import { Home } from "components/Templates/Home";
import { ITask } from "components/Molecules/TaskCard"
import { useEffect } from "react";
import {
  useAppDispatch,
} from 'redux/hooks';
import {
  addTasks
} from 'redux/features/tasks/tasksSlice';

interface HomePageProps {
  tasks: ITask[];
}

const HomePage: NextPage<HomePageProps> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addTasks(tasks));
  },[])

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
        <MainContainer>
          <Navbar />
          <Home />
        </MainContainer>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://gorest.co.in/public/v1/users/1436/todos`);
  const data = await res.json();
  return { props: { tasks: data.data } };
}

export default HomePage;
