import React from 'react';
import Header from '../../organisms/header';
import Body from '../../organisms/body';
import './styles.scss';
import { useUser } from '../../../context/User';

function Home() {
  const { user, setUser } = useUser();

  return (
    <>
      <Header />

      {user.teste && <h2>sadsd</h2>}

      <Body />
    </>
  );
}

export default Home;
