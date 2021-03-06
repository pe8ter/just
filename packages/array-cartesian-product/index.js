module.exports = cartesianProduct;

/*
  cartesianProduct([[1, 2], ['a', 'b']]); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
  cartesianProduct(); // throws
*/

function isArray(item) {
  if (Object.prototype.toString.call(item) === '[object Array]') {
    return true;
  }

  return false;
}

function baseProduct(arr1, arr2) {
  var output = [];

  for (var i = 0; i < arr1.length; i++) {
    var item = isArray(arr1[i]) ? arr1[i] : [arr1[i]];

    for (var j = 0; j < arr2.length; j++) {
      var items = item.concat([arr2[j]]);
      output.push(items);
    }
  }

  return output;
}

function cartesianProduct(arr) {
  if (!isArray(arr)) {
    throw new Error('just-array-product expects an array');
  }

  if (!arr.length) {
    return [];
  }

  var output = arr[0];

  for (var i = 1; i < arr.length; i++) {
    output = baseProduct(output, arr[i]);
  }

  return output;
}
