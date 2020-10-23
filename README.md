1. create Dropdown and AnimalsList component, then call it on App
2. add values for user to select on Dropdown ('All', 'Cats', 'Dogs')
3. add state to App.js (selection)
4. create a methdod `handleUserChoice` to find out which value has the user selected on the dropdown (use the `event` from javascript), and save it in the state.
5. pass this method `handleUserChoice` down to `Dropdown` and call it on your select when it listens to a change.
6. create a method `handleChoice` and depending on which value is on `selection` from the state, will return the correct info. example:
if cats is the value on state, return the array cats
7. pass down as props to `AnimalsList` the result of your function `handleChoice`, which will be an array
8. on `AnimalsList`, receive the props and iterate over the array, rendering a `AnimalCard` component to each element of the array.
9. pass down to `AnimalCard` the props from each individual object (name and imgUrl)
10. receive on `AnimalCard` the props and show them on respective html tags