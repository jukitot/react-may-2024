import React, {FC, useEffect, useState} from 'react';
import './App.css';

import {IUser} from "./models/IUser";
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {useStore} from "./store/store";

const App:FC = () => {

  return (
      <>
          <HeaderComponent/>

              <Outlet/>



      </>
  );
}

export default App;
