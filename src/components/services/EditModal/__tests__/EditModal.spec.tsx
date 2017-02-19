/// <reference types='jest' />

import * as React from 'react';
import  EditModal from '../EditModal';
import  Cases from './EditModal.cases';
import { shallow, mount, render } from 'enzyme';

describe('EditModal', () => {
  let editModal:any;

  describe('Default', () => {

    const testProps = Cases['Default'];

    beforeEach(() => {
      editModal = mount(<EditModal {...testProps} />);
    });

    it('should have default expected values', () => {
      const state = editModal.state();

      expect(state.name).toEqual('Unknown service');
      expect(state.shortDescription).toEqual('');
      expect(state.longDescription).toEqual('');
      expect(state.subdomain).toEqual('');
      expect(state.logo).toEqual('https://placehold.it/64x64');
    });

    it('should have an alphanumeric subdomain', () => {
      const nonAlphanumeric = '-#$non-alphanumeric34';
      const alphanumeric = 'subdomainAlphanumeric123';

      editModal.instance().subdomainOnChange({target:{value:nonAlphanumeric}});
      expect(editModal.state().subdomain).toEqual('');

      editModal.instance().subdomainOnChange({target:{value:alphanumeric}});
      expect(editModal.state().subdomain).toEqual(alphanumeric);
    });

    it("should set name error true if name is empty at form's validation", () => {
      editModal.setState({name:''});
      editModal.instance().saveService();

      expect(editModal.instance().formHasNoErrors()).toEqual(false);
      expect(editModal.state().nameError).toEqual(true);
    });

    it("should set subdomain error true if subdomain is empty at form's validation", () => {
      editModal.setState({subdomain:''});
      editModal.instance().saveService();

      expect(editModal.instance().formHasNoErrors()).toEqual(false);
      expect(editModal.state().subdomainError).toEqual(true);
    });

    describe('Roles TabPane' ,() => {
      const testRole = 'role 1';

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
      const service = editModal.props().service,
            state = editModal.state();

      expect(state.name).toEqual(service.name);
      expect(state.shortDescription).toEqual(service.short_description);
      expect(state.longDescription).toEqual(service.long_description);
      expect(state.subdomain).toEqual(service.subDomain);
      expect(state.logo).toEqual(service.logo);
    });

    it('should set the right available roles having into account the service roles', () => {
      let availableRoles = editModal.state().availableRoles,
          serviceRoles = editModal.state().serviceRoles;

      let exists:boolean = false;

      serviceRoles.forEach((role:string) => {
        if(availableRoles.includes(role)){
          exists = true;
        }
      });
      expect(exists).toEqual(false);
    });
  });
});
