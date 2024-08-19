import { useState } from 'react';
import './App.css';
import PersonalCard from './components/Personal'


function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
});


  return (
    <>
      <PersonalCard handlePersonalSubmit={setPersonalInfo}/>
      {/* for test */}
      <h2>{personalInfo.firstName}</h2>
      <h2>{personalInfo.lastName}</h2>
      <h2>{personalInfo.email}</h2>
      <h2>{personalInfo.phone}</h2>
    </>
  )
}

export default App
