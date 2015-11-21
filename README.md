In this example, the stream class will accept text input, count word matches based
on a regular expression, and then emit the results in an event when the stream has fin-
ished being sent. You could use this to count word matches in a text file, or pipe data
from a web page and count the number of paragraph tags—it’s up to you. First we
need to create a new project.

test.js
-> The test actually reads the current file and passes the data through CountStream .
-> run it :
   1) node test.js
   2) npm test
      when add `node test.js` in package.json script field
