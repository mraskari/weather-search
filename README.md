Hi, Please run

npm i
npm start

to run application,

I created a subject to read search input box change event, we will read this value in FetchApi component.
to prevent dozen requests to server, there is a debounce mechanism that waits for user to stop pressing keys for a while, 
also we check the length of city name to be more than two characters.

then first api calls and sends city name to server, application waits for the result of this call and display a loading component, 
then request may either fails that application shows an error page or succeeds and application use the response to send next api call,

after receive response data, displays it in a nice presentation, background shows it is day or night now ...
