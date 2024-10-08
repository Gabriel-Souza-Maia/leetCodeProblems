/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map();

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  console.log(Array.from(map.values()));
  console.log(map);
  return Array.from(map.values());
};

strs = ["eat","tea","tan","ate","nat","bat"]

groupAnagrams(strs);
