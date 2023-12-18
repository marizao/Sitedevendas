import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Login } from "./Login";
import { Profile } from "./pages/Profile";
import { Payment } from "./pages/Payment";
import { ProfileEdit } from "./pages/ProfileEdit";

export const Content = () => {
  return (
      <Routes>
        <Route exact path='/payment/:price' element={< Payment />} />
        <Route exact path='/profile/edit' element={< ProfileEdit />}/>
        <Route exact path='/profile' element={< Profile />}/>
        <Route exact path='/cart' element={< Cart />} />
        <Route exact path='/store' element={< Store />}/>
        <Route exact path='/Loja-De-Compras' element={< Login  />} />
      </Routes>
  )
}