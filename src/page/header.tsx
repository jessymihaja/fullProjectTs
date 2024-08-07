import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
function Header(){
    const [num,setNum]=useState(0);
    function clickHandler(){
        setNum(num+1)
    }
    function resetNum(){
        setNum(0)
    }
    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/fruits'>fruits</Nav.Link>
                <Nav.Link href='/formulaire'>form</Nav.Link>
                <Button onClick={clickHandler} variant="secondary" size="lg">{num}</Button>
                <Button onClick={resetNum} variant="info" size="sm">reset</Button>
            </Nav>
            </Container>
      </Navbar>           
        </>
    )
}
export default Header;
