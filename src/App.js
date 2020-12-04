import { Home } from "./Home"
import { FAQ } from "./FAQ"

import './App.css';

function App() {
  const user = {id: 1, name: "Sanjeet"}
  return (
    <div>
      <Home user={user} />

      <FAQ />
    </div>
  );
}

export default App;
