import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Contact name="Joe Exotic" avatar="https://randomuser.me/api/portraits/men/36.jpg" online />
     <Contact name="Ted Cruz" avatar="https://randomuser.me/api/portraits/men/73.jpg" offline />
     <Contact name="Jean-Marie" avatar="https://randomuser.me/api/portraits/men/0.jpg" online />
    </div>
  );
}

export default App;
