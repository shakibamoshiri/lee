#!/usr/bin/env node

const fs = require( "fs" );

const log = console.log;
const program = process.argv[1].split( /\// ).pop();
const filename = process.argv[ 2 ];

if( !filename ){
    log( `usage: ${program} filename percentage?` );
    log( `Ex.1 : ${program} file.txt` );
    log( `Ex.2 : ${program} file.txt 80` );
    return;
}

const percentage = ( process.argv[ 3 ] || 101 );

const file = fs.readFileSync( filename );
let unique = {},
    count = 0;

file.toString()
    .split( /\W+|\d+/g )
    .filter( ( word ) =>  word !== "" )
    .map( ( word ) => word.toLowerCase() )
    .forEach( ( word ) => {
         unique[ word ] = ++unique[ word ] || +!unique[ word ];
        ++count;
    })

const sprintf = ( text, space = 5 ) => {
    text = text + "";
    return ( text + ( " ".repeat( space - text.length ) ) );
}

const weight = 100 / count ;
let total = 0,
    value = 0,
    each = 0,
    lineNumber,
    vocabulary,
    gWeight,
    wordWeight,
    sumWeight;

Object.keys( unique )
       .sort( ( a, b ) => { return unique[ b ] - unique[ a ] } )
       .forEach( ( key, index ) => {
            value = unique[ key ];
            each = value * weight;
            total += each;
            
            lineNumber = sprintf( index + 1, 10 );
            vocabulary = sprintf( key, 20 );
            gWeight    = sprintf( value, 10 );
            wordWeight = sprintf( each.toFixed( 6 ), 10 );
            sumWeight  = sprintf( total.toFixed( 6 ), 10 );
            
            if( total - 1 <= percentage ){
                log( lineNumber, vocabulary, gWeight, wordWeight, sumWeight )
            }
        });

