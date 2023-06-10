
import React from 'react';
import { Image } from '@themesberg/react-bootstrap';

import TransDevLogo from '../assets/img/brand/red.svg'

const Preloader = (props) => {

  const { show } = props;

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Image className="loader-element animate__animated animate__jackInTheBox" src={TransDevLogo} height={40} />
    </div>
  );
};

export default Preloader;