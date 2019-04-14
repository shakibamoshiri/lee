#!/usr/bin/env node

const fs = require( "fs" );

const log = console.log;

const filename = process.argv[2];
const listname = process.argv[3];


const file = fs.readFileSync( filename );
const list = fs.readFileSync( listname );

const lines = file.toString().split( "\n" );
const vocabularies = list.toString().split( /\W+/g ).filter(( line ) => line !== "" );

lines.forEach( ( line ) => {
    const words = line.split( /\W+/g );
    
    const upLine = words.map( ( word ) => {
        const lc = word.toLowerCase();
        vocabularies.forEach( ( item ) => {
            if( item === lc ){
                word = "+" + word;
            }
        })
        return word;
    })
        log( upLine.join( " " ) );
})
