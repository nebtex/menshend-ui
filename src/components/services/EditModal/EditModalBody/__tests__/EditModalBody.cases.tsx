/// <reference types='jest' />
import EditModalBody, { IEditModalBodyProps } from '../EditModalBody';

const Cases : {[id:string]:IEditModalBodyProps} = {};
const roles: string[] = ['role1', 'role2', 'role3'];

Cases['Long Description URL Active']={
  activeTab: 'longDescription',
  longDescriptionUrlActive: true  
}

Cases['Long Description URL Inactive']= {
  activeTab: 'longDescription',  
  longDescriptionUrlError: false
}

Cases['Name Error']= {
  nameError: true,
  name:'',
  activeTab:'general'
}

Cases['URL Error'] = {
  activeTab: 'longDescription',
  longDescriptionUrlError: true,
  longDescriptionUrlActive: true
}

export default Cases;