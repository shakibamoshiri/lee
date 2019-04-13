#!/bin/bash

# https://www.oxfordlearnersdictionaries.com/definition/american_english/you?q=you
url=https://www.oxfordlearnersdictionaries.com/definition/american_english/

for word in $@; do
    if ! [ -e $word.mp3 ]; then
        echo -e "There is no  \033[1;32m$word.mp3\033[0m so looking for it ..." 
            lynx -dump -source $url$word?q=$word | \
            perl -lne '/http[^"]+us[^"]+\.mp3/gi && print $&'  | \
            head -n 1 | \
            xargs -I xxx mpv xxx
    else
        echo -e "You have the file: \033[1;32m$word.mp3\033[0m" 
        mpv $word.mp3
    fi
done

