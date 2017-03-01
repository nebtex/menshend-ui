import { configure } from '@kadira/storybook';
function loadStories() {
    // require as many stories as you need.
    require('../src/components/login/EnvironmentCard/__tests__/EnvironmentCard.story');
require('../src/components/login/LoginForm/__tests__/LoginForm.story');
require('../src/components/login/ServiceInfoCard/__tests__/ServiceInfoCard.story');
require('../src/components/login/SessionCounter/__tests__/SessionCounter.story');
require('../src/components/modals/__tests__/FullModal.story');
require('../src/components/services/EditModal/__tests__/EditModal.story');
require('../src/components/services/EditModal/EditModalBody/__tests__/EditModalBody.story');
require('../src/components/services/EditModal/EditModalHeader/__tests__/EditModalHeader.story');
require('../src/components/services/NavBar/__tests__/NavBar.story');
require('../src/components/services/ServiceCard/__tests__/ServiceCard.story');
require('../src/components/services/ServicesPanel/__tests__/ServicesPanel.story');

}
configure(loadStories, module);