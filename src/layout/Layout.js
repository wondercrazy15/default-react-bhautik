import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styled from '@emotion/styled';

const Main = styled.main`
  min-height: 100vh; 
`


const Layout = ({ children, loggedIn }) => (
  <>
    <ToastContainer />
    <Navbar />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
