#TestLib


testing npm library framework js


Some clarity on CJS and ESM. The website searches and YT content is outdated and most of it is non functional. 

branch step2: configure npm to generate correct package.json with defaults for
author, license. After this step you should have a correct .npmrc with author
name, a token which should not be published, and defaults for email. 
added save-exact true which locks down installed packages to a specific version
number like fs=3.4.5 instead of fs=^3.4.5 

branch step3: import json data with both ESM and CJS. build simple api for data and func to return single random item from data

branch step4: add linter