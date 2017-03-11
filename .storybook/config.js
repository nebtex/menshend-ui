import { configure } from '@kadira/storybook';
function loadStories() {
    // require as many stories as you need.
    require('../src/components/general/EditableList/__tests__/EditableList.story');
require('../src/components/login/EnvironmentCard/__tests__/EnvironmentCard.story');
require('../src/components/login/LoginForm/__tests__/LoginForm.story');
require('../src/components/login/ServiceInfoCard/__tests__/ServiceInfoCard.story');
require('../src/components/login/SessionCounter/__tests__/SessionCounter.story');
require('../src/components/modals/__tests__/FullModal.story');
require('../src/components/services/EditModal/__tests__/EditModal.story');
require('../src/components/services/EditModal/EditModalBody/__tests__/EditModalBody.story');
require('../src/components/services/EditModal/EditModalBody/CacheSection/__tests__/CacheSection.story');
require('../src/components/services/EditModal/EditModalBody/CorsSection/__tests__/CorsSection.story');
require('../src/components/services/EditModal/EditModalBody/GeneralSection/__tests__/GeneralSection.story');
require('../src/components/services/EditModal/EditModalBody/GeneralSection/BackendSection/__tests__/BackendSection.story');
require('../src/components/services/EditModal/EditModalBody/LongDescriptionSection/__tests__/LongDescriptionSection.story');
require('../src/components/services/EditModal/EditModalBody/NavBar/__tests__/NavBar.story');
require('../src/components/services/EditModal/EditModalBody/SecretPathsSection/__tests__/SecretPathsSection.story');
require('../src/components/services/EditModal/EditModalBody/ShortDescriptionSection/__tests__/ShortDescriptionSection.story');
require('../src/components/services/EditModal/EditModalHeader/__tests__/EditModalHeader.story');
require('../src/components/services/NavBar/__tests__/NavBar.story');
require('../src/components/services/ServiceCard/__tests__/ServiceCard.story');
require('../src/components/services/ServicesPanel/__tests__/ServicesPanel.story');

}
configure(loadStories, module);