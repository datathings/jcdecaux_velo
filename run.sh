#!/bin/bash

unzip tmp.zip -d .

#Install Greycat
greycat install

#Build Frontend
pnpm i
pnpm build

#Start the server
bin/greycat serve --user=1
