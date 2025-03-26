#!/bin/bash
#Install Greycat
greycat install

#Build Frontend
pnpm i
pnpm build

#Start the server
bin/greycat serve --user=1
