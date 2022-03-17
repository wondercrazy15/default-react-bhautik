import './App.css';
import React from 'react';
import Layout from './layout/Layout';
import PageNotFound from './components/UI/PageNotFound/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import Todo from './Pages/Todo/Todo';

const App = () => {
  let pages;

  pages = (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/todo" element={<Todo />} /> 
      <Route path="*" exact={true} element={<PageNotFound />} />
    </Routes>
  )

  return (
    <>
      <Layout>{pages}</Layout>
    </>
  );
}

export default App;
