# Permit Lookup Tool

This application allows users to look up the current status of their Interstate Commerce Permit by supplying their permit number into a text box.  Data is stored in a spreadsheet.

## Application Dependencies

This project was built using [NodeJS](https://nodejs.org/en/) version 4.X, and is maintained in version control using [git](https://git-scm.com/).  Please make sure you have these applications installed before you proceed.  You'll need to clone the repository to your local machine to get started.  To clone a the repo navigate to the location you'd like to clone this repository onto your local machine ex: `cd ~/User/web`, then run the clone command, `git clone git@github.com:USFWS/southeast-permits.git permits` to save the project to a new folder called permits.

## Project Dependencies

To install all of the packages that this project depends on open a terminal window and navigate to the project folder ex: `cd ~/User/project-name`.  Once you're in the project folder run `npm install`.

## Data

The data behind this application is maintained in a [Google Spreadsheet](https://docs.google.com/a/doi.gov/spreadsheets/d/1V2DDPwRo3iKL9CvhizwKFi9Pokw6Xwkb1RcVD2VDvAQ/edit?usp=sharing), **DOI users only, sorry**!  To make this data available to the application select only those columns you need for the app to function (no names, contact information, etc; only the permit number, and status information), paste those fields into a new sheet, then download the data as a CSV file.  You'll want to save this CSV file in the `src/data` directory and name the file `permits.csv`.

## Development

To start a local development server with livereload run `npm start`.

## build

To build a production ready version of the application run `npm run build`, then copy all of the files in the `dist` folder to the web server to publish the page.

## Templates

There are two templates included in this project.  One template, [result.jade](https://github.com/USFWS/southeast-permits/blob/master/src/js/result.jade) displays the result if a permit is found as the user types in their permit number.  Alternatively [error.jade](https://github.com/USFWS/southeast-permits/blob/master/src/js/error.jade) displays an error message if something goes wrong.  You can pass a message into the error template to customize the message.

## License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
