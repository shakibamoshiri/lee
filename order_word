#!/usr/bin/env node

const fs = require( "fs" );

const log = console.log;
const program = process.argv[1].split( /\// ).pop();
const filename = process.argv[ 2 ];

if( !filename ){
    log( `usage: ${program} filename` );
    log( `Ex.1 : ${program} file.txt` );
    return;
}


const file = fs.readFileSync( filename );
const fileString = file.toString();
const fileLines = fileString.split( "\n" ).filter( ( line ) => line !== "" );

let unique = {},
    words = [];
fileLines.forEach( ( line ) => {
    words = line.split( /\W+|\d+/g ).filter( ( word ) =>  word !== "" );
 
    words.forEach( ( word ) => {
        unique[ word ] = word.length;
    })
})

const sprintf = ( text, space = 5 ) => {
    text = text + "";
    return ( text + ( " ".repeat( space - text.length ) ) );
}

let value = 0;
Object.keys( unique )
       .sort( ( a, b ) => { return unique[ a ] - unique[ b ] } )
       .forEach( ( key, index ) => {
            value = unique[ key ];
            log( sprintf( value ), key );
        });

