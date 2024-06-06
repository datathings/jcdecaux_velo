#Unzip the data
unzip ./tmp.zip -d .
#Install Greycat
./install.sh

#Build Frontend
pnpm i
pnpm build

#Start the server
greycat serve --user=1
