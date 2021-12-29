# Rob Alonzi BB Developer Assignment

## Getting started
Clone this repository. `git clone https://github.com/RobAlonzi/bb-player-card.git`. Alternatively, you can download a `.zip` file of the project.

## Backend
The backend is written in Flask/Python.  It contains a couple of useful endpoints for accessing the NHL's publicly accessible API. 

### Backend Quick Start
1. First validate that you've installed Python &gt;=3.4 and pip
2. Install the requirements in backend/requirements.txt, including flask
3. To start a development server, run "flask start".  To run in debug mode (automatically refresh on code changes), run "FLASK_DEBUG=1 flask run"

## Frontend
The frontend is written in React/Javascript. It is bootstrapped with the popular [Create React App](https://github.com/facebook/create-react-app) scaffolding.

### Frontend Quick Start
1. First validate that you've installed `NodeJS LTS` and `npm` (I am using Node version 16.10 and npm version 7.24 for reference).
2. Install the dependencies in `frontend/package.json`, with `npm install`. Make sure you are in the `frontend` directory before running `npm install`.
3. To start a development server, run `npm start`.
4. The API base is set to be `http://127.0.0.1:5000`. If this is different on your machine, please update the env variable `REACT_APP_API_BASE_URL` in `frontend/.env`.
5. Have fun!

# About the Submission

## General Features
1. Player search in the top header will find any active NHL player with a text search and allow the user to navigate to that player's page
2. The player page will load the player's vital information (name, position, DOB, etc) in the top header, along with a picture. While loading, placeholders are shown to give the users an idea of where the content will appear.
3. Three main tabs are available, `Overview`, `Events` and `Shifts`.

### Overview Tab
 - Will show basic player stats for the current season, as well as a game log table and a career stats table.
 - The tables have pagination so reduce the amount of real estate taken for each item.
 - Skaters and goalies have different columns/stats available to view.
 
### Events Tab
- This tab uses an API that takes a list of game id's from the player's game log, and fetches all event data for those games. It then filters the events to find which events involve the current player.
- The tab itself has a few visualizations for skaters:
 - Events by Type: a breakdown of each event the player is involved in by type.
 - Penalties by Type: What types of penalties does this player take/draw/serve.
 - Shots by Type: A radial chart showing what types of shots this player takes, as well as how many goals for that shot type.
- For goalies, Events by Type and Penalties by Type is still shown, but Shots by Type is replaced by Save Pct by Type. This shows the goalie's save pct based on the type of shot taken.
- Finally, a table where all the events returned by the API is shown, for a user to dig into.

### Shifts Tab
- For goalies this data is probably not helpful, but I decided to leave it up anyways, on the off chance something can be done with it.
- This tab uses an API that takes a list of game id's from the player's game log, and fetches all shift data for those games. It then filters the shifts to find which shifts are that of the selected player.
- From there we have a display of some shift stats based on the data we receive. Average shift length, median shift length and longest shift could be useful to help determine this player's tendencies/usage. In starting lineup means they were on the ice at `00:00 of the first period`. Alternatively, on for final regulation shift means they were on the ice at `20:00 of the third period`.
- One visualization on this tab, which shows the breakdown of TOI by period.
- Finally, a table where all the shifts returned by the API is shown, for a user to dig into.


## If I had more time
A number of things can be done to improve the submission. I have pulled a pretty good amount of data for each player and there is a lot of potential for what can be achieved if given more time:
 - More visualizations. The visualizations currently are a bit basic. I had potential features in my head but the time did not allow for it. I have pulled shift and event data, and it should be possible to create a chart like the one on [ShiftChart](http://shiftchart.com/) but with events being overlaid onto the shift data for the player. This could give a better sense of when in a shift a player is committing certain events (penalties, or giveaways for example). Also, was thinking about creating a heat map of where on the ice the events are occurring. I found this [D3js Hockey Rink](https://github.com/JonDemelo/NHL-RINK-D3) and had an idea of using this to map out each event. Adding filters by event type would also be helpful.
 - More data for each player. As it is, in terms of player stats I have the current season and career stats for each player. I had an idea to include more splits (month, home/away, vs each team), but decided to scrap it as while it is more data on the page, it's much of the same and decided to work on other features like event/shift data instead. 
 - Other external data sources. It would be possible to scrape CapFriendly for contract information, but that is a big job in of itself. It would also be possible to use the shift data to determine who the player plays with/against most often. But again, I would need to match up the shift start/end times with other player shift data and it quickly became a much bigger task than the time allotted. 
 - More goalie info. I am sure goals by location / type would be valuable. As I described above, I would likely map it on a rink using the x/y coordinates given to us by the event data.
 - Sorting / Filtering on the tables. Adding some sorting / filtering on the tables would give the user a much easier time to dig into the data and find exactly what they are looking for.
 - The app can be expanded to show `Team` and `Game` pages as well if you want to dig into certain teams or games instead of just a specific player. Also, a dashboard of some kind would be helpful.


Other things, from a direct tech / housekeeping perspective:
 - Add tests to give confidence the build is solid before releasing.
 - Optimize some of the backend calls. In certain areas I make a few calls just to get just a small sliver of data from the result. There may be opportunity for optimization.
 - Clear up some backend code. In some areas what I am trying to achieve might be confusing for another developer or myself in a few months. Adding comments or abstracting certain logic into another function might make it easier for readability.
 - Some components in the frontend are not very DRY. I noticed writing similar code in a few places. Could be a sign that there is an opportunity for abstraction.
 - Instead of always pulling from the NHL API, add ability to store certain data that needs more processing from our end into our own database, so speed up query time.
 - Design for edge cases. When APIs fail, what happens? Players who are just drafted but have yet to play a game are available to be searched but their stats are empty, causing a bad experience. We should fix that.
 
Finally, just generally would find it helpful to speak / interact with the people who would be using this app. What data is important to them? How do they use the data? If we don't have a certain bit of data, can we get it? What are the pain points of the current solution? I think speaking to your users can open your eyes to what features to prioritize. I've been in situations where something trivial to implement on the development side is causing a lot of frustration for the users, but was never addressed because we didn't use the app in the same way. I am not the subject matter expert, but I can help these people achieve what they need in a shorter amount of time with tools I can provide. 

## External Data Sources
1. https://api.nhle.com/stats/rest/en/shiftcharts. Fetches the player shift data by game
2. https://suggest.svc.nhl.com/svc/suggest/. Fetches potential player matches with an input search)
3. https://statsapi.web.nhl.com/api/v1/game. Fetches game data (events)
4. https://statsapi.web.nhl.com/api/v1/people. Fetches player data (vitals, stats, splits)

## External Packages
1. @craco/craco: "^6.4.3"
2. @emotion/react: "^11.7.1",
3. @emotion/styled: "^11.6.0",
4. @mui/icons-material: "^5.2.5",
5. @mui/material: "^5.2.6",
6. @nivo/bar: "^0.75.0",
7. @nivo/radar: "^0.75.0",
8. axios: "^0.24.0",
9. luxon: "^2.2.0",
10. react: "^17.0.2",
11. react-dom: "^17.0.2",
12. react-query: "^3.34.6",
13. react-router-dom: "^6.2.1",
14. react-scripts: "5.0.0",
15. react-select: "^5.2.1",
16. web-vitals: "^2.1.2",
17. husky: "^7.0.4",
18. lint-staged: "^12.1.4",
19. prettier: "^2.5.1"

## Screenshot
![image](https://user-images.githubusercontent.com/5641600/147687263-9360b27a-a37b-4870-b4c2-eb9a28847334.png) - Using Google Chrome on Linux. Version 96.0.4664.93 (Official Build) (64-bit)
