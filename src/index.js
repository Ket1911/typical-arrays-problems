
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  } else {
  
    let minValue = array[0];
  array.forEach( function(item, i){
    if (item < minValue) {
      minValue = item;
    }
  });
  return minValue;
  }
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  } else {
    let maxValue = array[0];
    array.forEach( function(item, i){
      if (item > maxValue) {
        maxValue = item;
    }
  });
  return maxValue;
  }
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
    } else {
      let avgValue = 0;
      array.forEach( function(item, i){
        avgValue = avgValue + item;
    });

  
  return avgValue / array.length;
  }
}
