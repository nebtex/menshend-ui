/// <reference types='jest' />

import * as React from 'react';
import  EditModal from '../EditModal';
import  Cases from './EditModal.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModal', () => {
  let editModal:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    describe('Roles TabPane' ,() => {
      const testRole = 'role 1';
     
      beforeEach(() => {
        editModal = mount(<EditModal {...testProps} />);
      });

      it('should move a role from available roles to service roles when double click over role is triggered', () => {

        let availableRoles = editModal.state().availableRoles,
            serviceRoles = editModal.state().serviceRoles;
        
        expect(availableRoles.includes(testRole)).toEqual(true);
        expect(serviceRoles.includes(testRole)).toEqual(false);

        editModal.instance().availableRolesOnDoubleClick(testRole);
        expect(availableRoles.includes(testRole)).toEqual(false);
        expect(serviceRoles.includes(testRole)).toEqual(true);
      });

      it(`should move a role from service roles to available roles 
          when double click over role is triggered and role exists in props`, () => {

        let availableRoles = editModal.state().availableRoles,
            serviceRoles = editModal.state().serviceRoles;

        editModal.instance().availableRolesOnDoubleClick(testRole);
        expect(availableRoles.includes(testRole)).toEqual(false);
        expect(serviceRoles.includes(testRole)).toEqual(true);

        editModal.instance().serviceRolesOnDoubleClick(testRole);
        expect(serviceRoles.includes(testRole)).toEqual(false);
        expect(availableRoles.includes(testRole)).toEqual(true);
        expect(editModal.props().roles.includes(testRole)).toEqual(true);
      });

      it(`should remove a role from service roles and does not move that role to available roles 
          when double click over role is triggered and role does not exist in props`, () => {
        
        const newTestRole = 'newTestRole';
        let availableRoles = editModal.state().availableRoles,
            serviceRoles = editModal.state().serviceRoles;

        editModal.instance().serviceRoleOnAddition(newTestRole);
        expect(serviceRoles.includes(newTestRole)).toEqual(true);
        
        editModal.instance().serviceRolesOnDoubleClick(newTestRole);
        expect(serviceRoles.includes(newTestRole)).toEqual(false);
        expect(availableRoles.includes(newTestRole)).toEqual(false);
      });
    });
  });

  describe('Service', () => {

    const testProps = Cases['Service'];

    beforeEach(() => {
      editModal = mount(<EditModal {...testProps} />);
    });

    it('should have the service values as state', () => {
    });
  });
});
