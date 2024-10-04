// App.js
import React, { useState } from 'react';
import Precios from './componentes/Precios';
import Nav from './componentes/Nav';

const App = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <Nav setActiveTab={setActiveTab} />
      <div className="App">
        {activeTab === 'tab1' && <Precios />}
        {activeTab === 'tab2' && <p>Contenido para Tab 2</p>}
        {activeTab === 'tab3' && <p>Contenido para Tab 3</p>}
      </div>
    </div>
  );
};

export default App;