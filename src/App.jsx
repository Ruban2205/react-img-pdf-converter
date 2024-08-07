import React from 'react';
import Converter from './components/Converter';
import TopNav from './components/TopNav';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <TopNav />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">JPG to PDF Converter</h1>
        <Converter />
      </div>
    </div>
  );
};

export default App;

