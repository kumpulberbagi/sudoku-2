require('console.table');
var math = require('mathjs');

var prob_one = "003020600900305001001806400008102900700000008006708200002609500800203009005010300";
var prob_two = "005030081902850060600004050007402830349760005008300490150087002090000600026049503";
var permutation = sum_array(array_num());


// Translate the given string into sudoku array that has 9 x 9 dimension
function string_to_array(str) {
  var into_nine = str.match(/.{1,9}/g);
  var result = [];
  for (var i = 0; i < 9; i +=1) {
    result[i] = into_nine[i].split("").map(Number);
    //console.log("--", result);
  }
  return result;
}

// Providing us a number from 0 to 9
function array_num() {
  var result = [];
  for (var i = 1; i <= 9; i += 1) {
    result.push(i)
  }
  return result.map(Number);
}

// permutation of number from 1 to 9
function sum_array(array) {
  return array.reduce((prev, next) => prev + next);
}

// unit
function vertical(set_array) {
  var result = [];
  for (var i = 0; i < set_array.length; i += 1) {
    result[i] = [];
    for (var j = 0; j <set_array.length; j += 1){
      result[i][j] = set_array[j][i];
    }
  }
  return result;
}

function small_region(array) {
  var result = [];
  for(var i = 0; i < array.length; i += 3) {
    var temporary = array.slice(i, i + 3);
    result.push(temporary)
  }
  return result;
}

function big_region(array) {
  var result = []
  for(var i = 0; i < array.length; i += 1) {
    result[i] = small_region(array[i])
  }
  return result;
}



function pr(para) {
  console.log(para);
}

function block1(big_region) {
  var result = [];
      for (var j = 0; j < 3; j += 1) {
        for (var k = 0; k < 3; k += 1){
          result.push(big_region[j][k])
          }
      }
    return result;
  }
  function block2(big_region) {
    var result = [];
        for (var j = 0; j < 3; j += 1) {
          for (var k = 0; k < 3; k += 1){
            result.push(big_region[j][k+3])
            }
        }
      return result;
    }
    function block3(big_region) {
      var result = [];
          for (var j = 0; j < 3; j += 1) {
            for (var k = 0; k < 3; k += 1){
              result.push(big_region[j][k+6])
              }
          }
        return result;
      }
      function block4(big_region) {
        var result = [];
            for (var j = 0; j < 3; j += 1) {
              for (var k = 0; k < 3; k += 1){
                result.push(big_region[j+3][k])
                }
            }
          return result;
        }
        function block5(big_region) {
          var result = [];
              for (var j = 0; j < 3; j += 1) {
                for (var k = 0; k < 3; k += 1){
                  result.push(big_region[j+3][k+3])
                  }
              }
            return result;
          }
          function block6(big_region) {
            var result = [];
                for (var j = 0; j < 3; j += 1) {
                  for (var k = 0; k < 3; k += 1){
                    result.push(big_region[j+3][k+6])
                    }
                }
              return result;
            }
            function block7(big_region) {
              var result = [];
                  for (var j = 0; j < 3; j += 1) {
                    for (var k = 0; k < 3; k += 1){
                      result.push(big_region[j+6][k])
                      }
                  }
                return result;
              }
              function block8(big_region) {
                var result = [];
                    for (var j = 0; j < 3; j += 1) {
                      for (var k = 0; k < 3; k += 1){
                        result.push(big_region[j+6][k+3])
                        }
                    }
                  return result;
                }
                function block9(big_region) {
                  var result = [];
                      for (var j = 0; j < 3; j += 1) {
                        for (var k = 0; k < 3; k += 1){
                          result.push(big_region[j+6][k+6])
                          }
                      }
                    return result;
                  }
function region(big_region) {
  var result = [block1(big_region),block2(big_region), block3(big_region),
    block4(big_region),block5(big_region),block6(big_region),block7(big_region),
    block8(big_region),block9(big_region)]
  return result
}
// Possible Solution
function possible_solution(arr1, arr2, arr3) {
  var union = [...arr1, ...arr2, ...arr3];
  var b = one_to_nine();
  return  b.filter(x => union.indexOf(x) < 0 );
}

function the_solution(str) {
  var arr_1 = string_to_array(str);
  var arr_2 = vertical(arr_1);
  var arr_3 = region(arr_1);
  var i = 0
  while (true){
    if (arr_1[i][i] !=)
}

// Auxilary function

function one_to_nine() {
  var result = [];
  for (var i = 0; i <= 9; i += 1) {
    result[i] = i;
  }
  return result;
}


// testing_var



var testing_var = string_to_array(prob_two);
pr(region(testing_var));
