import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MainMenuJson from '../data/MainMenu.json';

const MainMenu = ({currentPage}) => {
    return(
        <Navbar className="side-nav" sticky="top">
            <Nav activeKey={currentPage} className="flex-column">
                {getMainMenuItems(currentPage)}
            </Nav>
        </Navbar>
    );
}


const getMainMenuItems = (currentPage) => {
    const mainMenuItems = [];

    MainMenuJson.map((menuItem) => {
        return mainMenuItems.push(getMenuItemContent(menuItem, currentPage));
    });

    return mainMenuItems;
}

const getMenuItemContent = (menuItem, currentPage) => {
    if ( 'children' in menuItem && isMenuInPath(menuItem, currentPage) ) {
        return (
            <Nav.Item>
                <Nav.Link href={menuItem.link} eventKey={menuItem.link} key={menuItem.link}>{menuItem.label}</Nav.Link>
                    {getMainMenuItemChildren(menuItem, currentPage)}
            </Nav.Item>
        );
    } else {
        return (
            <Nav.Item>
                <Nav.Link href={menuItem.link} eventKey={menuItem.link} key={menuItem.link}>{menuItem.label}</Nav.Link>
            </Nav.Item>
        );
    }
}

const isMenuInPath = ( menuItem, currentPage ) => {
    if ( typeof currentPage !== "undefined" && currentPage.indexOf(menuItem.link) === 0 ) {
        return true;
    } else {
        return false;
    }
}

const getMainMenuItemChildren = (menuItem, currentPage) => {
    const menuItemChildren = [];

    menuItem.children.map((childMenuItem) => {
        return menuItemChildren.push(getMenuItemContent(childMenuItem, currentPage));
    });

    return menuItemChildren;
}

export default MainMenu;