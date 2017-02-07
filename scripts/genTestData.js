var fs = require('fs');
var dummyjson = require('dummy-json');

var template = `
  let services = [
    {{#repeat 1000}}
    {
      "name": "{{company}}",
      "short_description": "This is the service short description",
      "long_description": "long description {{lorem}}",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role {{int 1 3}}",
        "role {{int 4 6}}"
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