#!/bin/bash

word=$1

for word in $@; do
    wget -nc -q --show-progress -c http://www.freedictionary.org/pronunciation_sound/$word.mp3
done
