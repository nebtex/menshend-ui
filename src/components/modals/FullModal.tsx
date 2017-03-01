import * as React from 'react';
import * as classnames from 'classnames';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Form, Nav, NavItem, NavLink, Button, Modal, ModalHeader } from 'reactstrap';

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
	
	componentDidMount = () => {
		window.addEventListener('keydown', this.handleEscape);
	}

	componentWillUnmount = () => {
		window.removeEventListener('keydown', this.handleEscape);
	}

	render() {
		if (!this.props.isOpen) return null;
		return (
			<Modal toggle={this.props.toggle} isOpen={this.props.isOpen} className={styles.modalContainer}>
				<ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
				{this.props.children}
			</Modal>
		)
	}
}