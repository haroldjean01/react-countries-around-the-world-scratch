### Learning Objectives

Use useEffect hook with a dependency array to retrieve data when a component first mounts
Use useState to manage component state
Use custom hooks to bundle together multiple useState & useEffect calls
Use the Supabase Javascript client to retrieve data from a database
Use the network tab to examine (and debug) the request being sent to a server and the response received from a server
Use the async/await pattern to make our asynchronous code easier to read

### Description

There is a database provided to you that contains all the countries in the world. Your goal is to query that data using the Supabase Javascript client and then the `useEffect` hook to display the data. You should also use the flagpedia API to load each country's flag. The API uses the 2 character ISO code to identify countries which is saved in the `iso2` column of the database. Finally, your app should allow users to filter by continent, and search by name.

### Acceptance Criteria

Must use the Supabase client to get the list of countries
Must use the `useEffect` hook to call the service layer to get the list of countries
Users should see a list of all the countries of the world with their flag
Users should be able to filter by continent
Rubric
Required for grading: Main branch deployed to Netlify, and open PR from dev branch to Netlify with deploy preview

### Task Points

`fetchCountries` function in services folder gets list of countries from Supabase 4
useEffect correctly loads the list of countries when the `Main` component renders 4
useEffect uses a try / catch block to display an error if the API call fails 4
useEffect / useState moved into a custom useCountries component 4
Users can filter by continent
