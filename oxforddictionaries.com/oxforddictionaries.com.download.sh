#!/bin/bash

url=http://www.oxfordlearnersdictionaries.com/definition/english/

for word in $@; do
    if ! [ -e $word.mp3 ]; then
        echo -e "There is no  \033[1;32m$word.mp3\033[0m so looking for it ..." 
        lynx -dump -source $url$word\_1?q=$word | \
        egrep -o 'http[^ ]+?mp3' | \
        sort | \
        uniq | \
        grep $word | \
        xargs -I xxx wget -q -nc --show-progress -c xxx
    else
        echo -e "You have the file: \033[1;32m$word.mp3\033[0m" 
    fi
done

