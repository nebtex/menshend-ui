var fs = require('fs');
var dummyjson = require('dummy-json');

var template = `
  [
    {{#repeat 1000}}
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
  ]
`;

var result = dummyjson.parse(template);
fs.writeFile("services.txt", result, function(err) {
    if(err) {
        console.log(err);
    }
    console.log("The file was saved!");
});