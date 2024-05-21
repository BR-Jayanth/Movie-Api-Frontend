import { Outlet } from "react-router-dom";

import React from 'react'

export const Layout = () => {
  //Layout of the page
  return (
    <main>
        <Outlet/>
    </main>
  )
}

