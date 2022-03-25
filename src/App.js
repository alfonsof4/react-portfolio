import React, {useState} from 'react';
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'
import Project from './components/Project';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      {!aboutSelected ? (
        <>
          <Project />
        </>
      ) : (
        <>
          <About
            setContactSelected={setContactSelected}
          />
        </>
      )}

      
    </div>
  )
}

export default App;
