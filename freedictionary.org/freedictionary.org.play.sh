#!/bin/bash

word=$1

for word in $@; do
    mpv http://www.freedictionary.org/pronunciation_sound/$word.mp3
done
