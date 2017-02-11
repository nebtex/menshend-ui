import { configure } from '@kadira/storybook';
function loadStories() {
    // require as many stories as you need.
    require('../src/components/login/EnvironmentCard/__tests__/EnvironmentCard.story');
require('../src/components/login/LoginForm/__tests__/LoginForm.story');
require('../src/components/login/ServiceInfoCard/__tests__/ServiceInfoCard.story');
require('../src/components/services/EditModal/__tests__/EditModal.story');
require('../src/components/services/NavBar/__tests__/NavBar.story');
require('../src/components/services/ServiceCard/__tests__/ServiceCard.story');
require('../src/components/services/ServicesPanel/__tests__/ServicesPanel.story');

}
configure(loadStories, module);