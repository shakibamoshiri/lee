#!/bin/bash

for word in $@; do
    if ! [ -e $word.example ]; then
        echo -e "There is no  \033[1;32m$word.example\033[0m so looking for it ..." 
        lynx -dump -source https://www.ldoceonline.com/dictionary/$word > $word.html
        perl -lne 'BEGIN{$m=$ARGV[0]; $m=~s/\..+$//g} push(@word, $&) while /(?<=exa">).*?exa">/g; END{ s/<.*?>//g && s/$m/\033[1;32m$&\033[0m/g && printf "%-5d %s\n", ++$n, $_ for @word }' $word.html | \
        tee $word.example
        # rm -f $word.html
    else
        cat $word.example
    fi
done

