import React from 'react';
import {Nav, Navbar} from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import {Link} from "react-router-dom";

function Navigation(props: { activePage: string; }) {
    let home = "black", about = "black", products = "black", contactus = "black";
    switch (props.activePage) {
        case "home": home = "gray";break;
        case "about": about = "gray";break;
        case "products": products = "gray";break;
        case "contact": contactus = "gray";break;
        default: break;
    }
    return (
        <Navbar appearance={"subtle"}>
            <Nav>
                <Nav.Item>
                    <span className={"f3 pa2 b sans-serif"} >
                        <Link to="/" id={"homeBtn"} className={home}>SoundFolks</Link>
                    </span>
                </Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item>
                    <span className={"f4 pa2 b sans-serif"} >
                        <Link to="/about" id={"aboutBtn"} className={about}>About</Link>
                    </span>
                </Nav.Item>
                <Nav.Item>
                    <span className={"f4 pa2 black b sans-serif"}>
                         <Link to="/products" id={"productsBtn"} className={products}>Products</Link>
                    </span>
                </Nav.Item>
                <Nav.Item>
                    <span className={"f4 pa2 black b sans-serif"}>
                         <Link to="/contactus" id={"contactusBtn"} className={contactus}>Contact Us</Link>
                    </span>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Navigation;
