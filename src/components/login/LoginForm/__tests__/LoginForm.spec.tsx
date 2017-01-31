import * as React from 'react';
import  LoginForm from '../LoginForm';
import  Cases from './LoginForm.cases';
import {shallow} from 'enzyme';


it('renders correctly', () => {
  <LoginForm {...Cases["default"]} />
  
});