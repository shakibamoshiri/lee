#!/bin/bash

for word in $@; do
    if ! [ -e $word.mp3 ]; then
        echo -e "There is no  \033[1;32m$word.mp3\033[0m so looking for it ..." 
        lynx -dump -source https://www.ldoceonline.com/dictionary/$word | \
            perl -lne '/(?<=data-src-mp3=")[^"]+/ && print $&' | \
            head -n 1 | \
            xargs -I xxx wget -q -nc --show-progress -c xxx -O $word.mp3
    else
        echo -e "You have the file: \033[1;32m$word.mp3\033[0m" 
    fi
done

