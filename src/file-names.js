const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let outputArr = [];
  for (let i = 0; i < names.length; i++) {

    let currentName = names[i];

    foundEntries = outputArr.filter(element => element == currentName);
    console.log("foundEntries: " + foundEntries)

    if (foundEntries.length > 0) {
      let tmpName = currentName + "(" + foundEntries.length + ")";
      if (outputArr.includes(tmpName)) {
        let num = foundEntries.length;
        do {
          num++;
          tmpName = currentName + "(" + num + ")";
        }
        while (outputArr.includes(tmpName))
        currentName = tmpName
      }
      else {
        currentName = tmpName;
      }
    }
    outputArr.push(currentName);
  }

  return outputArr;
}


module.exports = {
  renameFiles
};

renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);