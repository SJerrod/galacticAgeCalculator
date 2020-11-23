# **Galactic Age calculator**

#### Calculates age based on location in solar system, 11/13/2020

#### **By Jerrod Styrk**

## Decription
- This application will allows the user to put in their current earth based age and it will output their age based on each planets yearly solar rotation.

## Setup

#### _Things You Need_
 * A prefered Internet Browser
 * A code Editor to view the code 

 #### _To Open Locally_

- [Click to view Github repository](https://github.com/SJerrod/galacticAgeCalculator) Or simply paste the following url into your prefered browser https://github.com/SJerrod/galacticAgeCalculator
- To Clone repository simply click the green Code button and copy the url.
- Using a prefered terminal use the command 'git clone paste-url-here' in which ever directory you wish.
- Open the newly cloned repo with your text editor.
- In the terminal use the command 'npm install' to install all necessary packages for this project.
- Now use the command 'npm start' to start a live server

<details>
  <summary>Note to Apple Users</summary>

    - Under package.json navigate to "scripts"
    - Navigate to "start", the & needs to be replaced with ;
    Before
    "scripts": {... "start": "npm run build & webpack-dev-server --open --mode development",
    After
    "scripts": {... "start": "npm run build; webpack-dev-server --open --mode development",
  </details>

## Specifications

| Behavior                                                        | Input     | Output    |
| --------------------------------------------------------------- | --------- | --------- |
| Takes users current age and outputs as normal. | 28 | 28 |
| Converts users current age and outputs age in Mercury years. (A Mercury year is .24 Earth years.) | 28 | 116.7 |
| Converts users current age and outputs age in Venus years. (A Venus year is .62 Earth years.) | 28 | 45.16 |
| Converts users current age and outputs age in Mars years. (A Mars year is 1.88 or Earth years.) | 28 | 14.89 |
| Converts users current age and outputs age in Jupiter years. (A Jupiter year is 11.86 Earth years.) | 28 | 2.361 |
| Determine how many years a user has left on each planet | (lifeExpectancy - currentEarthAge)/ planetAge | timeRemaining |
| If user currentEarthAge surpasses lifeExpectancy return number of years they have exeeded | (currentEarthAge - lifeExpectancy)/planetAge | timePassed | 


## Bugs

* None Known

## For support

_jstyrk@citadel.edu_

## Technologies and tools used

- Visual Studio Code
- Html
- markdown
- bootstrap
- css
- jQuery
- javaScript
- clean-webpack-plugin
- css-loader
- eslint
- eslint-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
- popper.js
- jest
- babel

### License

[MIT] Copyright (c) 2020 **Jerrod Styrk**