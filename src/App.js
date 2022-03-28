import React, {useState} from 'react';
import Homepage from './components/Homepage'
import Contact from './components/Contact'
import About from './components/About'
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Homepage
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

      {contactSelected ? (
        <>
          <Contact
            setContactSelected={setContactSelected}
          />
        </>) : (
          <>
          </>
      )}
      <Footer />
      
    </div>
  );
}

export default App;
