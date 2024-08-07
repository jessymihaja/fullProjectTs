import React, { ChangeEvent, HtmlHTMLAttributes, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();

  function onNomChange(e : any){
    setNom(e.target.value)
 }
 function onMailChange(e : any){
    setEmail(e.target.value)
 }

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/saveForm', {nom,email});
      console.log('Réponse de l\'API:', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    }
    navigate('/')
    
  };

  return (
    <form onSubmit={handleSubmit} method='POST'  >
      
      <Container>
        <InputGroup hasValidation className='mb-3 w-25'>
          <InputGroup.Text>nom</InputGroup.Text>
          <Form.Control type="text" value={nom}
            onChange={onNomChange} required />
          <Form.Control.Feedback type="invalid">
            Please choose an username.
          </Form.Control.Feedback>
        </InputGroup>
        <div className='w-25 mb-3'>
        <Form.Control
          type="email"
          placeholder='email@****'
          value={email}
          onChange={onMailChange}
        />
      </div>
      <Button type="submit" variant='secondary'>Envoyer</Button>
      </Container>
      
    </form>
  );
};

export default Formulaire;
