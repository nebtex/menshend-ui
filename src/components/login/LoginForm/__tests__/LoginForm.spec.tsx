
/// <reference types='jest' />

import * as React from 'react';
import  LoginForm from '../LoginForm';
import  Cases from './LoginForm.cases';
import { shallow, mount, render } from 'enzyme';

describe('Login form', () => {
  describe('Default', () => {
    let loginForm:any;

    beforeEach(() => {
      loginForm = mount(<LoginForm {...Cases['default']} />);
    });

    it('should have the defined props', () => {
      expect(loginForm.props().githubLogin).toBeDefined();
      expect(loginForm.props().userPassLogin).toBeDefined();
      expect(loginForm.props().tokenLogin).toBeDefined();
      expect(loginForm.props().user).toBeDefined();
    });

    it('should render correctly', () => {
      expect(loginForm.find('GithubLogin').length).toEqual(1);
      expect(loginForm.find('TokenForm').length).toEqual(1);
      expect(loginForm.find('UserPassForm').length).toEqual(1);
    });
  });

  describe('User is logged', () => {
    let loginForm:any;

    beforeEach(() => {
      loginForm = mount(<LoginForm {...Cases['User is logged']} />);
    });

    it('should render correctly', () => {
      expect(loginForm.find('Button').length).toEqual(1);
      expect(loginForm.find('SessionCounter').length).toEqual(1);
    });
  });

  describe('Github error', () => {
    let loginForm:any;

    beforeEach(() => {
      loginForm = mount(<LoginForm {...Cases['Github error']} />);
    });

    it('should render the github button with warning color and outlined', () => {
      let githubLogin = loginForm.find('GithubLogin').first();
      let button = githubLogin.find('Button');
      expect(button.props().color).toEqual('warning');
      expect(button.props().outline).toEqual(true);
    });

    it('should render with the user/pass tab as active tab', () => {
      expect(loginForm.props().activeTab).toEqual('UserPassTab');
    });
  });

  describe('Username error', () => {
    let loginForm:any;

    beforeEach(() => {
      loginForm = mount(<LoginForm {...Cases['Username error']} />);
    });

    it('should render the inputs and the formGroups with danger color', () => {
      let userPassForm = loginForm.find('UserPassForm').first();
      let userFormGroup = userPassForm.find('FormGroup').first();
      let passFormGroup = userPassForm.find('FormGroup').last();
      let nameInput = userFormGroup.find('Input').first();
      let passInput = passFormGroup.find('Input').first();

      expect(passFormGroup.props().color).toEqual('danger');
      expect(userFormGroup.props().color).toEqual('danger');
      expect(nameInput.props().state).toEqual('danger');
      expect(passInput.props().state).toEqual('danger');
    });

    it('should render a form feedback', () => {
      let userPassForm = loginForm.find('UserPassForm').first();
      let passFormGroup = userPassForm.find('FormGroup').last();
      expect(passFormGroup.find('FormFeedback').length).toEqual(1);
    });

    it('should render with the user/pass tab as active tab', () => {
      expect(loginForm.find('TabContent').props().activeTab).toEqual('UserPassTab');
      expect(loginForm.props().activeTab).toEqual('UserPassTab');      
    });
  });

  describe('Token error', () => {
    let loginForm:any;

    beforeEach(() => {
      loginForm = mount(<LoginForm {...Cases['Token error']} />);
    });

    it('should render the input and the formGroup with danger color', () => {
      let tokenForm = loginForm.find('TokenForm').first();
      let formGroup = tokenForm.find('FormGroup').first();
      let input = formGroup.find('Input').first();

      expect(formGroup.props().color).toEqual('danger');
      expect(input.props().state).toEqual('danger');
    });

    it('should render a form feedback', () => {
      let tokenForm = loginForm.find('TokenForm').first();
      let formGroup = tokenForm.find('FormGroup').first();
      expect(formGroup.find('FormFeedback').length).toEqual(1);
    });

    it('should render with the token tab as active tab', () => {
      expect(loginForm.find('TabContent').props().activeTab).toEqual('TokenTab');      
      expect(loginForm.props().activeTab).toEqual('TokenTab');      
    });
  });
});