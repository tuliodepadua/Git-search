import React from 'react';
import Header from '../../organisms/header';
import Body from '../../organisms/body/Body';
import './styles.scss';
import { useUser } from '../../../context/User';

function Home() {
  const { user, setUser } = useUser();

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default Home;
