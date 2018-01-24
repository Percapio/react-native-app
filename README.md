## Craigslist Forums Mobile App (_app name TBD_)

A simple mobile app for the IOS and Android written using React Native and Redux, and bootstrapped by Create React Native App.  

The concept behind this app is to allow users to interact with Craiglist's forums with a mobile-app built with a user-first mentality.

---
#### Available Scripts
  * npm start
  * npm test
  * npm run ios
  * npm run android
  * npm run eject

---
#### Building the App
Craiglist doesn't seem to feature any sort of pre-built API, so the only way to fetch their data is to webscrap the pages we would need.

##### Webscrap Example
First, comes the call done by the Life Cycle Method: _componentDidMount_, where we request that the data be fetched, so we can set the state with all the thread titles and their extraneous information (_such as url params_).
```
componentDidMount() {
  this.props.getAllThreads()
    .then( payload => this.setState({ threads: payload.threads }) );
}
```
After going through the actions folder, the call will eventually reach the utils folder where the webscrapping function is called.  As you will see, the first thing we must do is fetch the URL and, considering how we couldn't find any third-party libraries to suit our needs, we ended up using the fetch method that comes bundled with React Native.

One of the issues of using the Fetch function, is how the function is limited to only a few methods after it makes its HTML request: ( blob, json, formData, and text ).  The first three will not help us with what we need, so that leaves us with the text method which means a lot of indexing, slicing and dicing to get what we want.  It's messy, but it works.

After locating where the necessary data are located, we have to make sure to build out a JSON format to send back not only to the Life Cycle Method still awaiting for the promise to be fulfilled, but also to the reducer that we have in order to set this particular data into our global state.
``` 
const GetAllThreads = () => (
  fetch('http://forums.craigslist.org')
    .then( response => response.text() )
    .then( text => {
      const forumListColumns = text.indexOf('forumlistcolumns');
      const forumStats       = text.indexOf('forumstats');
      const miniPayload      = text.slice( forumListColumns, forumStats );
      const payloadArrayed   = miniPayload.split('<');

      const threads = [];

      payloadArrayed.forEach( (el, index) => {
        if ( el.includes('href="') ) {
          let [ link, title ] = convertIntoValues( el );

          if ( payloadArrayed[index + 1].includes('threadcount') ) {
            threads.push({
              'link'  : link,
              'title' : title,
              'count' : convertIntoInt( el ),
            });
          } else {
            threads.push({
              'link' : link,
              'title': title,
            });
          }
        }
      });

      return threads;
    })
);
```
---
#### Final Word
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
If you are cloning this project, and wish to see more advanced options of configuring/starting the app.  Please, visit [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md) as it will provide more details on how to get started.

