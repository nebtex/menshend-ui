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
  strategy: 0,
  "cache": {
    "active": false,
    "ttl": 0
  },
  "cors": {
    "allowedOrigins": [
      "string"
    ],
    "allowedMethods": [
      "string"
    ],
    "allowedHeaders": [
      "string"
    ],
    "allowCredentials": false,
    "optionsPassthrough": false,
    "maxAge": false,
    "exposedHeaders": [
      "string"
    ]
  },
  "secretPaths": [
    "string"
  ]
};

export default Cases;