import React, { Suspense, lazy } from 'react';
import images from './Images';
import './App.css';

const Card = lazy(() => import('./Card'));

function App() {
  return (
    <>
      <h1>25 ReactJs Inteview Questions</h1>
      <div className="App">
        
        <Suspense fallback={<div>Loading cards...</div>}>
          {images.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Suspense>
      </div>
    </>
  );
}

export default App;
