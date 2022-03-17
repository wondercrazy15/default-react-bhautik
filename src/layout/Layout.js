import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Layout = ({ children, loggedIn }) => (
  <>
    <ToastContainer />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
