import * as React from 'react';
import  LoginForm from '../LoginForm';
import  Cases from './LoginForm.cases';
import { shallow, mount, render } from 'enzyme';

describe('Login form basic structure', () => {
  it('requires githubLogin prop', () => {
    let loginForm = mount(<LoginForm {...Cases["default"]} />);
    expect(loginForm.props().githubLogin).toBeDefined()
  });
});