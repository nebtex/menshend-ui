
'use strict';
var fs = require('fs');
var config_template = `
// Type de// Type definitions for Fuse.js 2.2.0
// Project: https://github.com/krisk/Fuse
// Definitions by: Mika Kalathil <https://github.com/mikaak/>

declare module 'fuse.js' {
  interface FuseOptions {
    id?: string;
    keys?: any[];
    caseSensitive?: boolean;
    include?: string[];
    maxPatternLength?: number;
    shouldSort?: boolean;
    distance?: number;
    location?: number;
    threshold?: number;
    verbose?: boolean;
    tokenize?: boolean;
    searchFn?(searchFunction: FuseSearchFn):any;
    getFn?(object: any, property: string): any;
    sortFn?(): any[];
  }

  interface FuseSearchFn {
    constructor(pattern: string, options: FuseOptions):any;
    search(pattern: string): any[];
  }

  export = class Fuse<T> {
    public list: T[];
    public options: FuseOptions;

    constructor(list: T[], options: FuseOptions);
    public set(list: T[]): T[];
    public search(pattern: string): T[];
  };
}
`;

fs.writeFile("node_modules/fuse.js/index.d.ts", config_template, function(err) {
    if(err) {
        return callback(err);
    }
    console.log("The file was saved!");
});