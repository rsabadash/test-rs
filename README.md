# Test task by Roman Sabadash

## How to run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm lint`
Check lint rules.

### `npm lint:fix`
Fix code according to lint rules.

### `npm format`
Fix code according to prettier rules.

## Structure

**components** - common components that can be reused.\
Each component has own folder with next structure:
- styles - module css files inside
- one or many files that implement defined functionality
- index.ts - file to export all allowed data from the folder
- types.ts - types that are specified for the component
- constants.ts - constants that are specified for the component

**data** - mock application data.

**hooks** - folder for shared hooks.

**pages** - folder for pages where each page has own folder with the same as in **components** structure.

## Description
The application is to show the bundlers that is available for user to buy.

The data is "fetched" from **data/bundles.json** file. The response will be available in a 5 seconds. Before bundles is visible user see skeleton.

There is no routing as only one page is implemented.

No lazy loading because no real fetch.
