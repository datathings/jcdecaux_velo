# bikes_digital_twin

## Requirement

Make sure you have **pnpm** & **zip** installed

## Getting started

The repository comes with a `tmp.zip` which contain the crawled JCDecaux data of 2 weeks.
Before running the application, make sure to unzip:
``` bash
unzip ./tmp.zip -d .
```
To start the application, execute `run.sh` in a terminal.
Navigate to [localhost:8080](http://localhost:8080) to see the frontend.

## Using new data and start customizing

If you want the running application to crawl new data, you need to supply an api key:
- Follow [this link](https://developer.jcdecaux.com/#/login) to create an account on the JCDecaux site
- After registering your can get an api key on your account page [here](https://developer.jcdecaux.com/#/account)
- Create a `api_key.txt`file at the root of this repository and paste your key inside

Furthermore, you will want to make changes to the time slider in the frontend to make sure you can display the new data.
This is also a first easy step to start customizing this simple sample project.
Search for the following code block in `./frontend/components/app-map/app-map.tsx` (start at line 173):
``` javascript
// *** Historic data setting ***
// comment this section if you want to work with newly crawled data
const start = Date.parse('2024-05-15T14:16:53.000Z');
// Add 2 weeks to the start date since thats the range of our data
const end = new Date(start + (Number(core.duration.WEEK) / 1000) * 2).getTime();
// *** Historic data setting ***

// *** Current data setting ***
// uncomment this section if you want to work with newly crawled data
// const start = Date.parse('YYYY-MM-DDTHH:MM'); // fill in start date of your data crawling
// const end = Date.now(); // end at curent time
// *** Current data setting ***
```

As you can see, there are two alternative settings to configure the slider.
To access new data, simply switch to the *current data setting* and fill in the start of your data history for the start date.
After this make sure to save the changes before running the application.






