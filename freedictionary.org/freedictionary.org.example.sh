#!/bin/bash

for word in $@; do
    if [ -e $word.example ];then
        cat $word.example
    else
        lynx -dump -source http://www.freedictionary.org/?Query=$word > $word.html
        perl -lne 'BEGIN{$w=$ARGV[0]; $w=~s/\..*$//g} push(@line,$&) while/(?<=&quot;)[^&<>]+/g; END{s/$w/\033[1;32m$&\033[0m/g && printf( "%-5d %s\n", ++$n, $_) for @line}' $word.html > $word.example
        cat $word.example
        rm $word.html
    fi
done
