import { useState } from 'react';
import { get } from './utils/apiHelper';
import Button from './components/buttons/SubmitButton';
import SubmitButton from './components/buttons/SubmitButton';

function App() {

  return (
    <>
      <h1> what the hell </h1>

      <SubmitButton
        label="Submit"
        onClick = {() => get("http://localhost:8080/test")}
      />

      <Button
        label="Button"
        onClick = {()=>{}}
      />

    </>
  )


}

export default App
