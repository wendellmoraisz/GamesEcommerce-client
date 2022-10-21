import React from 'react';
import Home from './pages/Home';


const App = () => {

  const createDefaultUser = async () => {

    try {
      const response = await fetch("http://localhost:3333/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: "admin",
          password: "12345",
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  }

  createDefaultUser();

  return (
    <Home />
  );
}

export default App;
