var fs = require('fs');
var dummyjson = require('dummy-json');

function generate (){
    var template = fs.readFileSync('scripts/mockTestsData/servicesPanel/template.hbs' , {encoding: 'utf8'});
    var result = dummyjson.parse(template);
    fs.writeFile("src/components/services/ServicesPanel/__tests__/mockData.tsx", result, function(err) {
        if(err) {
            return callback(err);
        }
        console.log("The file was saved!");
    });
}

module.exports = generate;