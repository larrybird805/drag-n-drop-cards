import React from 'react';
import './App.css';
import DragAndDropCards from './DragAndDropCards';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Drag-and-Drop Canvas</h1>
      </header>
      <div className="canvas">
      <DragAndDropCards />
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus a neque posuere, eget venenatis est ultrices. Ut auctor purus sed ex tristique, eget pretium velit molestie. Phasellus tincidunt.
        </p> */}
      </div>
    </div>
  );
};

export default App;
