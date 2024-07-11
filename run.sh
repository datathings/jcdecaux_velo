#!/bin/bash
#Install Greycat
./install.sh

#Build Frontend
pnpm i
pnpm build

#Start the server
greycat serve --user=1
