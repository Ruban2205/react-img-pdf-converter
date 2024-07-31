import React from 'react';
import Converter from './components/Converter';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">JPG to PDF Converter</h1>
      <Converter />
    </div>
  );
};

export default App;
