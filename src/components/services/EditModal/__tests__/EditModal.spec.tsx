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
      expect(state.logo).toEqual('https://placehold.it/64x64');
    });

    it("should set name error true if name is empty at form's validation", () => {
      editModal.setState({name:''});
      editModal.instance().saveService();

      expect(editModal.state().nameError).toEqual(true);
    });

    it("should set long description url error true if url is empty/invalid and url is active at form's validation", () => {
      editModal.setState({longDescriptionUrl:''});
      editModal.instance().saveService();
      expect(editModal.state().longDescriptionUrlError).toEqual(true);

      editModal.setState({longDescriptionUrl:'fdasffdsa'});
      editModal.instance().saveService();
      expect(editModal.state().longDescriptionUrlError).toEqual(true);
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
      expect(state.logo).toEqual(service.logo);
    });
  });
});
