var fs = require('fs');
var dummyjson = require('dummy-json');
var path = require('path')

var template = `
  {
    "adminService": [
      {{#repeat 5}}
      {
        "id": "roles/role-{{@index}}/subdomain-{{@index}}",
        "roleId": "role-{{@index}}",
        "logo": "http://placehold.it/64x64",
        "name": "{{company}}",
        "shortDescription": "{{lorem 10}}",
        "longDescription": "{{lorem 20}}",
        "longDescriptionUrl": "{{domain}}/longDescription",
        "proxyCode": "__ === your code here ===",
        "proxyCodeLanguage": 0,
        "impersonateWithinRole": {{boolean}},
        "isActive": {{boolean}},
        "csrf": {{boolean}},
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
    ],
    "clientServices": [
      {{#repeat 3}}
      {
        "id": "roles/role-{{@index}}/subdomain-{{@index}}",
        "roleId": "role-{{@index}}",
        "subDomain": "subdomain-{{@index}}",
        "logo": "http://placehold.it/64x64",
        "name": "{{company}}",
        "longDescription": "{{lorem 20}}",
        "longDescriptionUrl": "{{domain}}/longDescription",
        "impersonateWithinRole": {{boolean}},
        "secretPaths": [
          "string"
        ]
      }
      {{/repeat}}      
    ],
    "clientStatus": {
      "isLogged": true,
      "isAdmin": true,
      "canImpersonate": true,
      "sessionExpiresAt": 0
    }
  }
`;

var result = dummyjson.parse(template);
fs.writeFile(path.join(__dirname, 'db.json'), result, function(err) {
    if(err) {
        console.log(err);
    }
    console.log("The file was saved!");
});