import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';


export const PageLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
