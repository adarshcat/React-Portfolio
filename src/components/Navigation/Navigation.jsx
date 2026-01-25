import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { NavigationCont } from "./NavigationElements";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <NavigationCont>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
        </NavigationCont>
    )
}

export default Navigation;