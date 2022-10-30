import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPost from './containers/BlogPost';
import Landing from './containers/Landing';
import Project from './containers/Project';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<Project />} />
        </Routes>
      </BrowserRouter>
      ,
    </ChakraProvider>
  );
}

export default App;
