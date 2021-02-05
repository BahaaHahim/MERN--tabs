import './App.css';
import Tabs from './Components/Tabs';
import {useState} from 'react';


function App() {
  const[ tabs, setTabs] = useState([
    {
      label:"Tab1",
      content:"this is tab 1 content"
    },
    {
      label:"Tab2",
      content:"this is tab 2 content"
    },
    {
      label:"Tab3",
      content:"this is tab 3 content"
    }
  ]);
  return (
    <div className="App">
      <Tabs tabs={tabs}></Tabs>
    </div>
  );
}

export default App;
