import React from "react";
import { Button } from "@aws-amplify/ui-react";

const signOutBar = {
    background:
        "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,var(--amplify-opacities-50)) 100%)",
    fontWeight: "400",
    margin: 0,
    padding: "10px",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2,
};

const Header = ({ signOut, email }) => {
    return (
        <>
            <p style={{ margin: "53px" }}></p>
            <p style={signOutBar}>
                Hello {email}{" "}
                <Button variation="primary" size="default" onClick={signOut}>
                    Kijelentkezés
                </Button>
            </p>

            <header id="home" className="header">
                <nav className="nav" role="navigation">
                    <div className="container nav-elements">
                        <div className="branding">
                            <a href="#home">
                                <img
                                    src="images/hpluslogo.svg"
                                    alt="Logo - H Plus Sports"
                                />
                            </a>
                        </div>
                        <ul className="navbar">
                            <li>
                                <a href="#home">home</a>
                            </li>
                            <li>
                                <a href="#history">history</a>
                            </li>
                            <li>
                                <a href="#products">products</a>
                            </li>
                            <li>
                                <a href="#guarantee">guarantee</a>
                            </li>
                            <li>
                                <a href="#people">people</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container tagline">
                    <h1 className="headline">Our Mission</h1>
                    <p>
                        We support and encourage <em>active and healthy</em>{" "}
                        lifestyles, by offering <em>ethically sourced</em> and{" "}
                        <em>eco-friendly</em> nutritional products for the{" "}
                        <em>performance-driven</em> athlete.
                    </p>
                </div>
            </header>
        </>
    );
};

export default Header;
