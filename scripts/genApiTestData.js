var fs = require('fs');
var dummyjson = require('dummy-json');

var template = `
  {
    "adminService": [
      {{#repeat 20}}
      {
        "id": "service_{{int 1 3}}.",
        "roleId": "role_{{int 1 3}}",
        "logo": "http://placehold.it/64x64",
        "name": "{{company}}",
        "shortDescription": "{{lorem 10}}",
        "longDescription": "{{lorem 20}}",
        "longDescriptionUrl": "{{domain}}/longDescription",
        "proxyCode": "__ === your code here ===",
        "proxyCodeLanguage": 0,
        "impersonateWithinRole": {{boolean}},
        "isActive": {{boolean}},
        "strategy": 0,
        "cache": {
          "active": {{boolean}},
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
          "allowCredentials": {{boolean}},
          "optionsPassthrough": {{boolean}},
          "maxAge": {{boolean}},
          "exposedHeaders": [
            "string"
          ]
        },
        "secretPaths": [
          "string"
        ]
      }
      {{/repeat}}
    ]
  }
`;

var result = dummyjson.parse(template);
fs.writeFile("../db.json", result, function(err) {
    if(err) {
        console.log(err);
    }
    console.log("The file was saved!");
});