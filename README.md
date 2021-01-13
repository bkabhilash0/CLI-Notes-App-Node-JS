# CLI BASED NOTES APP

Run `npm install` before running `npm start`.
The output file is stored in JSON Format and can be parsed easily using any of the convinient methods.

Packages required are:
1. yargs
2. chalk
3. fs (core module)

## USAGE:
1. Run `node App.js --help` to see the switches available.
2. For **read**, **remove** and **add** switch you have to add additional switches.
3. To View the Additional switches type `--help` followed by your prefered mode e.g `node App.js add --help`
4. The notes are output as a JSON file in the cwd.