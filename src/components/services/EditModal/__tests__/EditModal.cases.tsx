import EditModal, { IEditModalProps } from '../EditModal';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEditModalProps} = {};

Cases['Default'] = {
  isOpen: true,
  toggle: function(){},
  codeOnChange: function(){},
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange: function(){},
  longDescriptionOnChange: function(){},
  handleAllowedOriginsAdd: function(){},
  handleAllowedOriginsDelete: function(){},
  handleAllowedMethodsAdd: function(){},
  handleAllowedMethodsDelete: function(){},
  handleAllowedHeadersAdd: function(){},
  handleAllowedHeadersDelete: function(){},
  handleExposedHeadersAdd: function(){},
  handleExposedHeadersDelete: function(){},
  maxAgeOnChange: function(){},
  optionsPassthroughOnChange: function(){},
  handleSaveService: function(){},
  allowCredentialsOnChange: function(){},
  cacheActiveOnChange: function(){},
  ttlOnChange: function(){},
  handleSecretPathsAdd: function(){},
  handleSecretPathsDelete: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){}
};

Cases['Service'] = {
  isOpen: true,
  toggle: function(){},
  codeOnChange: function(){},
  nameOnChange: function(){},
  logoOnChange: function(){},
  logoOnError: function(){},
  shortDescriptionOnChange: function(){},
  longDescriptionUrlOnChange: function(){},
  longDescriptionUrlActiveOnChange: function(){},
  longDescriptionOnChange: function(){},
  handleAllowedOriginsAdd: function(){},
  handleAllowedOriginsDelete: function(){},
  handleAllowedMethodsAdd: function(){},
  handleAllowedMethodsDelete: function(){},
  handleAllowedHeadersAdd: function(){},
  handleAllowedHeadersDelete: function(){},
  handleExposedHeadersAdd: function(){},
  handleExposedHeadersDelete: function(){},
  maxAgeOnChange: function(){},
  optionsPassthroughOnChange: function(){},
  handleSaveService: function(){},
  allowCredentialsOnChange: function(){},
  cacheActiveOnChange: function(){},
  ttlOnChange: function(){},
  handleSecretPathsAdd: function(){},
  handleSecretPathsDelete: function(){},
  strategyOnChange: function(){},
  csrfOnChange: function(){},
  impersonateWithinRoleOnChange: function(){},
  isActiveOnChange: function(){},
  logo: "http://placehold.it/64x64",
  name: "LexiconLabs",
  shortDescription: "Eros blandit proin sit gravida ornare lectus velit proin quisque.",
  longDescription: "Gravida tristique ac sapien i mattis facilisis. Purus pellentesque aliquet leo. Sem sit pellentesque fringilla in, sit non at velit.",
  longDescriptionUrl: "lexiconlabs.eu/longDescription",
  impersonateWithinRole: true,
  isActive: true,
  csrf: true,
  strategy: 'proxy',
  "cache": {
    "active": false,
    "ttl": 0
  },
  "cors": {
    "allowedOrigins": [
      "allowed-origin-1",
      "allowed-origin-2"
    ],
    "allowedMethods": [
      "POST",
      "GET",
      "PUT"
    ],
    "allowedHeaders": [
      "allowed-header-1",
      "allowed-header-2",
      "allowed-header-3"
    ],
    "allowCredentials": false,
    "optionsPassthrough": false,
    "maxAge": false,
    "exposedHeaders": [
      "exposed-header-1",
      "exposed-header-2"
    ]
  },
  "secretPaths": [
    "secret-path-1",
    "secret-path-2"
  ]
};

export default Cases;