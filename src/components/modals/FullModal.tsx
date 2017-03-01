import * as React from 'react';
import * as classnames from 'classnames';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Form, Nav, NavItem, NavLink, Button } from 'reactstrap';

let styles = require('./FullModal.scss');

export interface IFullModalProps {
    className?: string
    isOpen?: boolean
    toggle?: { (): void }
    title?: string
}

export interface IFullModalState { }

/**
 * use this component when you need a full size modal
 */
export default class FullModal extends React.Component<IFullModalProps, IFullModalState>{
    handleEscape = (event: any) => {
        if (event.keyCode == 27) {
            if (this.props.isOpen) {
                this.props.toggle()
            }
        }
    }
    render() {
        if (!this.props.isOpen) return null;
        return (
            <div onKeyPress={this.handleEscape} className={styles.modalContainer}>
                <Navbar fixed="top" className={classnames(styles.navbar, this.props.className)} light>
                    <NavbarBrand href="#">{this.props.title}</NavbarBrand>
                    <Collapse isOpen={true} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="danger" outline onClick={this.props.toggle}>Close</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className={styles.modalContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}