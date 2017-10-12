This repo uses [Create React App](https://github.com/facebookincubator/create-react-app) as it's template to get up and running with react.

## To get started

```sh
cd survey-viewer/survey-viewer
npm start
```
* Yes, the inner `survery-viewer` folder

### To use cached data
change the `useLocalData={false}` in index.js to `true`

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

## About the Application

The goal of this application is to create a data visualizer for survey information from a remote server. For ease of development, the option for location cached data was also added. The survey data presented consists of 3 main elements: basic information about the survey, qualifications, and requirements. "Qualifications are the "rules" that a person must fit to meet a quota. Quotas are the number of people of various requirements that are available (i.e., 10 women, 10 men; 20 people 10 to 14 years old, 30 people 15 to 20 years old, etc.)"

The goal is to present all of the data is a visually pleasing way. The design was meant to mirror the boxes that are sent out to customers with the items for the surveys. All are present, but more detailed information about each can be accessed by clicking on the relevant part that you want to expose. Some of the surveys have a very large amount of nested data that can make the current format less than ideal.

Thoughts about further development:
1. Filtering and search are a must, though I don't know exactly how the end user interacts with the data. Filtering by requirements/quotas would make it easier to find exactly what you're looking for. Even by the name or end data to find a specific survey or check on which ones are about to stop.
2. Single Survey View - Given the large number of quotas with nested questions or requirements on a survey, having a way to drill down into a single survey would make it easier for the user take in the information. Items could also be grouped or arranged in ways that make sense to the end users goals.
3. Code clean up - Not everything in this project is included in the most optimal way. A subset of bootstrap could be included vs having the whole thing. The code library I started with comes with a lot of extra features that could be removed. Given the time constraint of the project, I focused on the functionality and getting all of the necessary pieces in place, rather than making them production ready with the smallest bundle size.

#### This is not an exhaustive discussion of the project, just an overview to pass on some thoughts while it's reviewed.
