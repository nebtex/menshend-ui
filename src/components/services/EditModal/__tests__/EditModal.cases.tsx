import EditModal, { IEditModalProps } from '../EditModal';
let testLogo = require('../../../../assets/testLogo.svg');

let Cases : {[id:string]:IEditModalProps} = {};

Cases['Default'] = {
  isOpen: true,
  toggle: function(){},
  store:{
    updateProxyCode:function(){},
    updateSubdomain:function(){},
    updateName:function(){},
    updateLogo:function(){},
    updateLogoError:function(){},
    updateShortDescription:function(){},
    updateLongDescriptionUrl:function(){},
    updateLongDescriptionUrlActive:function(){},
    updateLongDescription:function(){},
    updateProxyCodeLanguage:function(){},
    addAllowedOrigin:function(){},
    deleteAllowedOrigin:function(){},
    addAllowedMethod:function(){},
    deleteAllowedMethod:function(){},
    addAllowedHeader:function(){},
    deleteAllowedHeader:function(){},
    addExposedHeader:function(){},
    deleteExposedHeader:function(){},
    updateMaxAge:function(){},
    updateOptionsPassthrough:function(){},
    updateAllowCredentials:function(){},
    updateCacheActive:function(){},
    updateTTL:function(){},
    addSecretPath:function(){},
    deleteSecretPath:function(){},
    updateStrategy:function(){},
    updateCsrf:function(){},
    updateImpersonateWithinRole:function(){},
    updateIsActive:function(){}
  }
};

Cases['Service'] = {
  isOpen: true,
  toggle: function(){},
  store:{
    codeOnChange: function(){},
    updateProxyCode:function(){},
    updateSubdomain:function(){},
    updateName:function(){},
    updateLogo:function(){},
    updateLogoError:function(){},
    updateShortDescription:function(){},
    updateLongDescriptionUrl:function(){},
    updateLongDescriptionUrlActive:function(){},
    updateLongDescription:function(){},
    updateProxyCodeLanguage:function(){},
    addAllowedOrigin:function(){},
    deleteAllowedOrigin:function(){},
    addAllowedMethod:function(){},
    deleteAllowedMethod:function(){},
    addAllowedHeader:function(){},
    deleteAllowedHeader:function(){},
    addExposedHeader:function(){},
    deleteExposedHeader:function(){},
    updateMaxAge:function(){},
    updateOptionsPassthrough:function(){},
    updateAllowCredentials:function(){},
    updateCacheActive:function(){},
    updateTTL:function(){},
    addSecretPath:function(){},
    deleteSecretPath:function(){},
    updateStrategy:function(){},
    updateCsrf:function(){},
    updateImpersonateWithinRole:function(){},
    updateIsActive:function(){},
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
  },
};

export default Cases;