
'use strict';
var glob = require("glob")
var fs = require('fs');


glob("src/**/*.story.+(ts|tsx)", function (er, files) {
        if (er) return callback(er);
        var requires = "";
        files.forEach(function(element, index, array){
            element = element.replace('.tsx','').replace('.ts','');
            requires += `require('../${element}');\n`;
        });
        var config_template = `import { configure } from '@kadira/storybook';
function loadStories() {
    // require as many stories as you need.
    ${requires}
}
configure(loadStories, module);`;
        fs.writeFile(".storybook/config.js", config_template, function(err) {
            if(err) {
                return callback(err);
            }
            console.log("The file was saved!");
        });
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
    })
