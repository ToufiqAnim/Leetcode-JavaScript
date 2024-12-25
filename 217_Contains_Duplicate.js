// using sets
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};

// using map
var containsDuplicate = function (nums) {
  const map = new Map();
  for (const i of nums) {
    if (map.has(i)) return true;
    map.set(i, true);
    return false;
  }
};
