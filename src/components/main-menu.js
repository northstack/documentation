import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MainMenuJson from '../data/MainMenu.json';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.getMainMenuItems = this.getMainMenuItems.bind(this);
        this.getMenuItemContent = this.getMenuItemContent.bind(this);
        this.getMenuItemChildren = this.getMenuItemChildren.bind(this);
        this.isMenuInPath = this.isMenuInPath.bind(this);
    }

    render() {
        return (
            <Navbar className="side-nav" sticky="top">
                <Nav activeKey={this.props.currentPage} className="flex-column">
                    {this.getMainMenuItems()}
                </Nav>
            </Navbar>
        );
    }

    getMainMenuItems() {
        const mainMenuItems = [];

        MainMenuJson.map((menuItem) => {
            return mainMenuItems.push(this.getMenuItemContent(menuItem));
        });

        return mainMenuItems;
    }

    getMenuItemContent(menuItem) {
        if ( 'children' in menuItem && this.isMenuInPath(menuItem, this.props.currentPage) ) {
            return (
                <Nav.Item key={menuItem.link}>
                    <Nav.Link href={menuItem.link} eventKey={menuItem.link} key={menuItem.link}>{menuItem.label}</Nav.Link>
                        {this.getMenuItemChildren(menuItem)}
                </Nav.Item>
            );
        } else {
            return (
                <Nav.Item key={menuItem.link}>
                    <Nav.Link href={menuItem.link} eventKey={menuItem.link} key={menuItem.link}>{menuItem.label}</Nav.Link>
                </Nav.Item>
            );
        }
    }

    getMenuItemChildren(menuItem) {
        const menuItemChildren = [];

        menuItem.children.map((childMenuItem) => {
            return menuItemChildren.push(this.getMenuItemContent(childMenuItem, this.props.currentPage));
        });

        return menuItemChildren;
    }

    isMenuInPath(menuItem) {
        if ( typeof this.props.currentPage !== "undefined" && this.props.currentPage.indexOf(menuItem.link) === 0 ) {
            return true;
        } else {
            return false;
        }
    }
}

export default MainMenu;