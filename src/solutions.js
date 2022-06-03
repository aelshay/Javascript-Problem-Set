/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <Abrahim_Elshayeb>
 *      Student ID: <118356161>
 *      Date: <02/06/2022>
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the file `src/problem-00.test.js.
 * Start by reading the big comment at the top of that file, then come back here and
 * continue.
 *
 * Before continuing, make sure you have completed the necessary setup steps (e.g.,
 * install node.js, run `npm install`, install the suggested VSCode extensions).
 * The rest of the instructions assume that you have done this. If you need help,
 * ask your professor.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, open a terminal (see https://code.visualstudio.com/docs/editor/integrated-terminal)
 * in the same directory as your `package.json` file (i.e., the root of this project)
 * and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this one problem instead of all tests. To do that,
 * add the name of a test file after `npm test` like this:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment (i.e., this file), and also read
 * the tests to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that document parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions (e.g., {string}).
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscores
 * ('_'), and makes it UPPERCASE.
 *
 * We want to be able to convert a string to Upper normalizeVariable Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are UPPER cased.
 *
 * The normalizeVariable() function should work like this:
 *
 * normalizeVariable('abc') --> returns 'ABC'
 * normalizeVariable(' ABC ') --> returns 'ABC'
 * normalizeVariable('ABC') --> returns 'ABC'
 * normalizeVariable('A BC') --> returns 'A_BC'
 * normalizeVariable(' A bC  ') --> returns 'A_BC'
 * normalizeVariable('A   BC') --> returns 'A_BC'
 * normalizeVariable('A.BC') --> returns 'A_BC'
 * normalizeVariable(' A..  B   C ') --> returns 'A_B_C'
 *
 * @param {string} value - a string to be converted
 * @return {string}
 ******************************************************************************/

function normalizeVariable(value) {
  value = value.toUpperCase().trim();

  let returnString = '';
  let trailing = false;

  for (let i = 0; i < value.length; i++) {
    let unwantedChar = value.charAt(i);
    if (unwantedChar == '.' || unwantedChar == '\t' || unwantedChar == ' ') {
      if (!trailing) {
        returnString += '_';
        trailing = true;
      }
    } else {
      returnString += unwantedChar;
      trailing = false;
    }
  }
  return returnString;
}

/*******************************************************************************
 * Problem 2: create an HTML <iframe> element for the given url.
 *
 * An iframe hosts one web page within another. Here is how we might use HTML
 * to use an iframe:
 *
 * <iframe src="https://web222.ca" height="500"></iframe>
 *
 * Our <iframe> has two attributes:
 *
 * - src: the URL to a web page
 * - height: the height to use (in pixels) when showing the iframe
 *
 * Write the createIframe() function to accept a URL and height, and return the
 * properly formatted iframe tag. For example:
 *
 * createIframe('https://web222.ca', 500);
 *
 * should return the following string of HTML:
 *
 * '<iframe src="https://web222.ca" height="500"></iframe>'
 *
 * A <iframe> can also optionally contain an `allowfullscreen` attribute,
 * which tells the browser that it's OK for the iframe to expand to fill
 * the whole screen (e.g., YouTube videos do this). For example:
 *
 * <iframe src="https://web222.ca" height="500" allowfullscreen></iframe>
 *
 * In this case, the <iframe> element can be expanded full screen.  Therefore,
 * your createIframe() function should also accept a third argument, `allowFullScreen`:
 *
 * // Full screen not allowed (the default)
 * createIframe('https://web222.ca', 500)
 * // Full screen allowed
 * createIframe('https://web222.ca', 500, true)
 *
 * The returned <iframe> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and height attribute values should be wrapped in double-quotes (e.g., src="..." height="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." height="..." allowfullscreen)
 * - The height attribute should only be added if it is a valid integer value (number or string).  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the iframe
 * @param {string|number} height - the height of the iframe. Must be a valid, positive integer
 * @param {boolean} allowFullScreen - whether to include the `allowfullscreen` attribute or not
 * @returns {string} - the HTML string for the iframe
 ******************************************************************************/

function createIframe(src, height, allowFullScreen) {
  let returnString = '';
  src = src.trim();

  if (allowFullScreen == true) {
    if (height > 1 && height % 1 == 0) {
      returnString = '<iframe src="' + src + '" height="' + height + '" allowfullscreen></iframe>';
    } else {
      returnString = '<iframe src="' + src + '" allowfullscreen></iframe>';
    }
  } else {
    if (height > 1 && height % 1 == 0) {
      returnString = '<iframe src="' + src + '" height="' + height + '"></iframe>';
    } else {
      returnString = '<iframe src="' + src + '"></iframe>';
    }
  }
  return returnString;
}
/*******************************************************************************
 * Problem 3: fix the formatting of Canadian Postal Codes
 *
 * A Canadian Postal Code (see https://en.wikipedia.org/wiki/Postal_codes_in_Canada)
 * is a 6-character string of the following form:
 *
 * A1A 1A1
 *
 * There are more than 800K valid postal codes.  The first three-characters of
 * the postal code is called a "Forward Sortation Area," and represents a geographic
 * region, with the first letter representing a province, or part of a province.
 *
 * The first character in a postal code can be any letter except D, F, I, O, Q, W, U, Z
 *
 * The other characters (i.e., letters) in a postal code can be any letter except
 * D, F, I, O, Q or U (i.e., W and Z are allowed)
 *
 * The numbers can be anything between 0 and 9
 *
 * HINT: use a Regular Expression to help you check for valid characters/numbers
 *
 * Many databases have postal codes that have been manually entered, and contain
 * formatting errors.  The fixPostalCode() function takes a possible postal code
 * (i.e. a string), attempts to format it, and returns the formatted version.
 * If the string is not a valid postal code, an error is thrown.  See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw.
 *
 * @param {string} postalCode - a possible postal code to be formatted
 * @returns {string} - a formatted postal code
 ******************************************************************************/

function fixPostalCode(postalCode) {
  postalCode = postalCode.toUpperCase();
  var chars = 0;
  for (var i = 0; i < postalCode.length; i++) {
    if (postalCode[i] != ' ') {
      chars += 1;
    }
  }
  if (chars != 6) {
    throw 'invalid postal code';
  }
  var firstLetter = 'DFIOQWUZ';
  var restOfLetters = 'DFIOQU';
  for (var i = 0; i < firstLetter.length; i++) {
    if (postalCode[0] == firstLetter[i]) {
      throw 'invalid postal code';
    }
  }
  for (var i = 1; i < postalCode.length; i++) {
    for (var j = 0; j < restOfLetters.length; j++) {
      if (postalCode[i] == restOfLetters[j]) {
        throw 'invalid postal code';
      }
    }
  }
  var lead3Char = '';
  var last3Char = '';
  for (var i = 0; i < postalCode.length; i++) {
    if (postalCode[i] == ' ') {
      continue;
    }
    if (lead3Char.length < 3) {
      lead3Char += postalCode[i];
    } else {
      last3Char += postalCode[i];
    }
  }
  var nonAlphaNum = lead3Char + last3Char;
  let returnValue = '';
  for (var i = 0; i < 6; i++) {
    if (i % 2 == 0) {
      if (nonAlphaNum[i] < 'A' || nonAlphaNum[i] > 'Z') {
        throw 'invalid postal code';
      }
    } else {
      if (nonAlphaNum[i] < '0' || nonAlphaNum[i] > '9') {
        throw 'invalid postal code';
      }
    }
  }
  returnValue = lead3Char + ' ' + last3Char;
  return returnValue;
}

/*******************************************************************************
 * Problem 4: convert a valid Canadian Postal Code to a Canadian Province
 *
 * The first letter of a Postal Code tells us which province the Postal Code is
 * from. Here's the list of Provinces/Territories, their 2-letter short form,
 * and the first letter(s) of the Postal Code that matches it:
 *
 * Province Name                    Short Form      First Letter of Postal Code
 * -----------------------------------------------------------------------------
 * Ontario                          ON              K, L, M, N, P
 * Quebec                           QC              G, H, J
 * Nova Scotia                      NS              B
 * New Brunswick                    NB              E
 * Manitoba                         MB              R
 * British Columbia                 BC              V
 * Prince Edward Island             PE              C
 * Saskatchewan                     SK              S
 * Alberta                          AB              T
 * Newfoundland and Labrador        NL              A
 * Nunavut, Northwest Territories   NT              X
 * Yukon                            YT              Y
 *
 * The toProvince() function converts a valid postal code to a province name. Use
 * your fixPostalCode() function from the previous problem to format and validate
 * the `postalCode` argument first. If it is invalid, return `null`. HINT: use try/catch
 * to deal with fixPostalCode() throwing an error, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the `useShortForm` argument is `true`, the province's short-form is
 * returned instead of the full name.  For example:
 *
 * toProvince('M5W1E6') returns 'Ontario'
 * toProvince('M5W 1E6') returns 'Ontario'
 * toProvince('M5W 1E6', true) returns 'ON'
 * toProvince('M5W') returns null
 *
 * @param {string} postalCode - a postal code to be validated and used
 * @param {boolean|undefined} useShortForm - whether to return the full or short name
 * @returns {string} - a province name or short form
 ******************************************************************************/

function toProvince(postalCode, useShortForm) {
  var returnValue = '';

  try {
    postalCode = fixPostalCode(postalCode);
  } catch (error) {
    returnValue = null;
  }

  if (postalCode != null) {
    const firstLetterPostal = ['KLMNP', 'GHJ', 'B', 'E', 'R', 'V', 'C', 'S', 'T', 'A', 'X', 'Y'];
    const shortForm = ['ON', 'QC', 'NS', 'NB', 'MB', 'BC', 'PE', 'SK', 'AB', 'NL', 'NT', 'YT'];
    const longForm = [
      'Ontario',
      'Quebec',
      'Nova Scotia',
      'New Brunswick',
      'Manitoba',
      'British Columbia',
      'Prince Edward Island',
      'Saskatchewan',
      'Alberta',
      'Newfoundland and Labrador',
      'Northwest Territories and Nunavut',
      'Yukon'
    ];

    for (let i = 0; i < firstLetterPostal.length; i++) {
      for (let ii = 0; ii < firstLetterPostal[i].length; ii++) {
        if (postalCode[0] == firstLetterPostal[i][ii]) {
          if (useShortForm == true) {
            returnValue = shortForm[i];
          } else {
            returnValue = longForm[i];
          }
        } else {
          continue;
        }
      }
    }
  }
  return returnValue;
}

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * As an example, the Seneca College Newnham campus is located at:
 *
 * Longitude: -79.3496 (negative number means West)
 * Latitude: 43.7955 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "43.7955, -79.3496" (NOTE: space after the comma)
 * 4. "[-79.3496,43.7955]" (NOTE: lack of space after comma, lat/lng values are reversed)
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the string form: "(lat, lng)"
 *
 * @param {string} value - a geographic coordinate string in one of the given forms
 * @returns {string} - a geographic coordinate formatted as "(lat, lng)"
 ******************************************************************************/

function normalizeCoord(value) {
  functionInput = value;

  var inputValue = '';
  var spacePresent = 0;
  var lat = 0;
  var longi = 0;
  var returnValue = '';
  for (let i = 0; i < functionInput.length; i++) {
    if (functionInput[i] == ' ') {
      spacePresent = 1;
      break;
    }
  }

  //splits the 2 numbers
  inputValue = functionInput.split(',');
  //loops through the 2 numbers to check for unwanted chars
  for (let x = 0; x < inputValue.length; x++) {
    for (let y = 0; y < inputValue[x].length; y++) {
      if (inputValue[x][y] == ' ') {
        inputValue[x] = inputValue[x].replace(inputValue[x][y], '');
      } else if (
        inputValue[x][y] == '-' ||
        inputValue[x][y] == '.' ||
        (inputValue[x][y] >= 0 && inputValue[x][y] <= 9)
      ) {
        continue;
      } else {
        inputValue[x] = inputValue[x].replace(inputValue[x][y], '');
      }
    }
  }

  //after getting rid of unwanted chars (if any), assigns the numbers to their variables
  if (spacePresent == 1) {
    lat = inputValue[0];
    longi = inputValue[1];
  } else if (spacePresent == 0) {
    longi = inputValue[0];
    lat = inputValue[1];
  }

  //Checks for out of bounds coordinates
  if (lat < -90 || lat > 90 || longi < -180 || longi > 180) {
    throw 'Invalid coordinate(s)';
  } else {
    returnValue = '(' + lat + ', ' + longi + ')';
  }
  return returnValue;
}

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "43.7955, -79.3496" and "[-62.1234,43.7955]",
 * a new list would be created of the following form "((43.7955, -79.3496), (43.7955, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("43.7955, -79.3496", "[-62.1234,43.7955]", "300, -9000") should return
 * "((43.7955, -79.3496), (43.7955, -62.1234))" and skip the invalid coordinate.
 *
 * @param {string} values - any number of string arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
  var functionInput = values;

  for (let i = 0; i < functionInput.length; i++) {
    try {
      functionInput[i] = ' ' + normalizeCoord(functionInput[i]);
    } catch (error) {
      functionInput.splice(i, 1);
      i--;
    }
  }
  functionInput = functionInput.toString().trim();
  functionInput = '(' + functionInput + ')';
  return functionInput;
}

/*******************************************************************************
 * Problem 7: count valid postal codes for a given province code
 *
 * The countForProvince() function takes a two-character province code, and
 * any number of postal codes, some of which may be invalid.  It returns the
 * total number of postal codes for the province represented by the two-character
 * code.
 *
 * For example:
 *
 * countForProvince('ON', 'M5W 1E6') returns 1
 * countForProvince('ON', 'Y0A 1L0') returns 0
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0') returns 2
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0', 'Y0A 1L0') returns 2
 * countForProvince('ON', 'INVALID', '', 'Y0A 1L0') returns 0
 *
 * Use the toProvince() function you wrote earlier in your answer.
 *
 * Throw an error if no postal codes are passed, or if any of the postal codes
 * is not a string.
 *
 * @param {string} provinceCode - a two character province code
 * @param {string} ...postalCodes - one or more postal code strings
 * @returns {number} the total, or 0
 ******************************************************************************/

function countForProvince(provinceCode, ...postalCodes) {
  if (postalCodes == 0) {
    throw 'No postal codes';
  }

  var postalCodesArray = postalCodes;
  var countValidPostals = 0;

  for (let x = 0; x < postalCodesArray.length; x++) {
    if (typeof postalCodesArray[x] != 'string') {
      throw 'Postal code not a string';
    }
  }

  for (let i = 0; i <= postalCodesArray.length - 1; i++) {
    if (postalCodesArray[i].length > 5 && postalCodesArray[i].length < 8) {
      let checkForValidPostal = toProvince(postalCodesArray[i], true);
      if (checkForValidPostal != null && checkForValidPostal == provinceCode) {
        countValidPostals++;
      }
    }
  }
  return countValidPostals;
}

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @param {bool|undefined} targetBlank - whether to open the link in a new tab/window
 * @returns {string}
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  var returnValue = '';
  var codeDesc = '';
  var allCodes = ['CC-BY', 'CC-BY-NC', 'CC-BY-SA', 'CC-BY-ND', 'CC-BY-NC-SA', 'CC-BY-NC-ND'];
  var allCodeDesc = [
    'Creative Commons Attribution License',
    'Creative Commons Attribution-NonCommercial License',
    'Creative Commons Attribution-ShareAlike License',
    'Creative Commons Attribution-NoDerivs License',
    'Creative Commons Attribution-NonCommercial-ShareAlike License',
    'Creative Commons Attribution-NonCommercial-NoDerivs License'
  ];

  for (let i = 0; i < allCodes.length; i++) {
    if (licenseCode == allCodes[i]) {
      codeDesc = allCodeDesc[i];
    }
  }

  if (codeDesc == '') {
    return '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>';
  }

  var queryString = licenseCode.split('-');
  queryString.splice(0, 1);

  if (queryString.length == 1) {
    returnValue = queryString[0];
    returnValue = returnValue.toLowerCase();
  }
  if (queryString.length == 2) {
    returnValue = queryString[0] + '-' + queryString[1];
    returnValue = returnValue.toLowerCase();
  } else if (queryString.length == 3) {
    returnValue = queryString[0] + '-' + queryString[1] + '-' + queryString[2];
    returnValue = returnValue.toLowerCase();
  }

  if (targetBlank == true) {
    returnValue =
      '<a href="https://creativecommons.org/licenses/' +
      returnValue +
      '/4.0/' +
      '" target="_blank"' +
      '>' +
      codeDesc +
      '</a>';
  } else {
    returnValue =
      '<a href="https://creativecommons.org/licenses/' +
      returnValue +
      '/4.0/">' +
      codeDesc +
      '</a>';
  }
  return returnValue;
}

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 * @param {string|number|boolean|} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value) {
  checkIfUndefined(value);

  if (value === true || value === false) {
    return value;
  } else {
    var functionInput = value;
    //trueOrFalseVars[0] is true , trueOrFalseVars[1] is false
    const trueOrFalseVars = [
      ['y', 'Y', 'o', 'O', 't', 'T', 'v', 'V'],
      ['n', 'N', 'f', 'F']
    ];

    for (let i = 0; i < trueOrFalseVars.length; i++) {
      for (let x = 0; x < trueOrFalseVars[i].length; x++) {
        if (functionInput[0] == trueOrFalseVars[0][x] || functionInput > 0) {
          return true;
        } else if (functionInput[0] == trueOrFalseVars[1][x] || functionInput < 1) {
          return false;
        }
      }
    }
  }
}

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every(...value1) {
  checkIfUndefined(value1);

  var functionInput = value1;
  for (let i = 0; i < functionInput.length; i++) {
    if (pureBool(functionInput[i]) == false) {
      return false;
    }
  }
  return true;
}

function any(...value2) {
  checkIfUndefined(value2);

  var functionInput = value2;

  for (let i = 0; i < functionInput.length; i++) {
    if (pureBool(functionInput[i]) == true) {
      return true;
    }
  }
  return false;
}

function none(...value3) {
  checkIfUndefined(value3);

  var functionInput = value3;
  for (let i = 0; i < functionInput.length; i++) {
    if (pureBool(functionInput[i]) == true) {
      return false;
    }
  }
  return true;
}

function checkIfUndefined(value) {
  if (value == undefined) {
    throw 'invalid value';
  }
}

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know from
 * week 1, a URL can contain optional name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 30, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} query the query to use. Must be properly URI encoded
 * @param {string} order the sort order to use, must be one of `ascending` or `descending`.
 *        If the caller uses `asc` convert it to `ascending`.  Same for `desc` and `descending`.
 * @param {number} count the number of results per page, must be 1-50
 * @param {string} license the license to use, must be one of:
 *        none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @returns {string} the properly formatted URL
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  if (order != 'asc' && order != 'desc' && order != 'ascending' && order != 'descending') {
    throw 'Invalid order';
  } else if (license == undefined || license == '') {
    throw 'Invalid license';
  } else if (count >= 31 || count <= 0) {
    throw 'Count too high';
  }

  var isQueryMultiWord = 0;
  var linkURL = 'https://api.inaturalist.org/v2/observations?query=';
  var linkQuery = query.trim();
  var linkOrder = '';
  var linkCount = '&count=' + count;
  var linkLicense = '&license=' + license;

  if (order.length < 5) {
    if (order == 'desc') {
      linkOrder = '&order=descending';
    } else if (order == 'asc') {
      if (order.length < 5) {
        linkOrder = '&order=ascending';
      }
    }
  } else {
    linkOrder = '&order=' + order;
  }

  if (isQueryMultiWord == 1) {
    linkQuery = "'" + linkQuery + "'";
  }

  var returnLink = linkURL + encodeURIComponent(linkQuery) + linkCount + linkOrder + linkLicense;
  return returnLink;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.normalizeVariable = normalizeVariable;
exports.createIframe = createIframe;
exports.fixPostalCode = fixPostalCode;
exports.toProvince = toProvince;
exports.normalizeCoord = normalizeCoord;
exports.formatCoords = formatCoords;
exports.countForProvince = countForProvince;
exports.generateLicenseLink = generateLicenseLink;
exports.pureBool = pureBool;
exports.every = every;
exports.any = any;
exports.none = none;
exports.buildUrl = buildUrl;
