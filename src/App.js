import './App.css';
import React from "react";
import obj from './product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hello, there!</Alert.Heading>
      <p>
       Hi im ramsey
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}


function CardBootstrap() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x42tmAKex3xSGmmajDgLr1KfDMwP3fNwRsuoQ-yn&s" />
      <Card.Body>
        <Card.Title>Hello, there!</Card.Title>
        <Card.Text>
        Hi im Ramsey 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

const App = () => {
  console.log("obj JSON : " , obj )
  const objJS = JSON.parse(obj)
  console.log("objJS : " , objJS  )
 return (

  <div>
  <div className='myObj'>
  <h1 style={{color:'#f00000'}}>Our Object : </h1>
  <h3> Name : {objJS.name} </h3>
  <h3> Price : {objJS.price} </h3>
  <p> <strong> Description : </strong>{objJS.description} </p>
  </div>
  <img className='myImg' src={objJS.image} alt='my img' />
  <CardBootstrap />
  <AdditionalContentExample/>
</div>
 );
};
export default App;