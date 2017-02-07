var fs = require('fs');
var dummyjson = require('dummy-json');

var template = `
  [
    {{#repeat 1000}}
    {
      "name": "{{company}}",
      "short_description": "short description {{lorem 10}}",
      "long_description": "long description {{lorem 30}}",
      "logo": "http://placehold.it/64x64",
      "roles": [
        {{#repeat 3}}
          "{{lorem 1}}"
        {{/repeat}}
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