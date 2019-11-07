#!/usr/bin/env node

const fs = require( "fs" );
const R = require( "ramda" );

const log = console.log.bind( console );
const program = process.argv[1].split( /\// ).pop();
const filename = process.argv[ 2 ];

if( !filename ){
    log( `usage: ${program} filename` );
    log( `Ex.1 : ${program} file.txt` );
    return;
}

const newLine = "\n";
const toString = string => string.toString();
const ignoreEmtpyItem = item => item !== "";
const lineToWord = line => R.split( /\W+|\d+/g, line );
const sortByLength = ( a, b ) => a.length - b.length;
const mapLengthToString = string => string.length + " " + string;
const arrayToString = ( result, input ) => result + input + "\n";

R.pipe(
    fs.readFileSync,
    toString,
    R.split( newLine ),
//    R.filter( ignoreEmtpyItem ),
    R.map( lineToWord ),
    R.flatten,
    R.filter( ignoreEmtpyItem ),
    R.sort( sortByLength ),
    R.map( mapLengthToString ),
    R.reduce( arrayToString, "" ),
    log
)( filename );

