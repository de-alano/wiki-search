# Wiki Search

## Task:
Implement a code that will look for the top 10 results in the Wikipedia API (sample query: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%22Liverpool%22&srlimit=10)

## Requirements:

- The view should contain the “search phrase” input field, “replace with” input field and three buttons: search, replace, replace all.
- Results should be displayed as a list and should include result title and snipped fields.
- Search matches within each result snipped should be highlighted.
- The request should be invoked on search button click and while typing in search field (not on every key pressed)
- Replace should replace the first currently available highlighted search match with a phrase taken from "replace with" field.
- Replace all should replace every highlighted search match.
- Allowed technologies: React


## Installation
- Clone this repo in your terminal

    `git clone https://github.com/de-alano/wiki-search`

- In your terminal, cd into the directory you just created

    `cd your-weather/`

- Install all dependencies

    `npm install`

- Run the app locally.

    `npm start`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>The page will reload if you make edits.<br>You will also see any lint errors in the console.


## Author
Alan Dominiczak