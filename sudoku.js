'use strict'
var board_string = "105802000090076405200400819019007306762083090000061050007600030430020501600308900"
var counting = 0;
var element = board_string.split('');
var check = ["1","2","3","4","5","6","7","8","9"];


var square = [];
//counting how much zero
function checkZero(){
  var zero = board_string.split("")
  for(var i=0; i<=zero.length; i++){
      if(zero[i] === "0"){
        counting +=1;
      }
  }
  return counting
}

//cek colom
function board(){
  var print = [[],[],[],[],[],[],[],[],[]];
    var j= 0;
    var k =0;
    //print board
    while (j<element.length) {
      print[k].push(element[j])
      j+=1
      if (j%9===0) {
        k+=1
      }
    }
    return print
}
//array papan in column
function columnBoard(){
  var kolom = [];
  board();
  var array1 = board() ;
  for (var i = 0; i < 9; i++) {
    kolom.push([])
    for (var j = 0; j < 9; j++) {
      kolom[i].push(array1[j][i])
    }
  }return kolom
}
//
//square array
function squareBoard(){
  var array1 = board();
  //template square
  for (var k = 0; k < 9; k++) {
    square.push([])
  }
  for (var i = 0; i < 9; i++) {
      for (var j = 0; j <9; j++) {
        if ( i<3 && j<3 ) {
          //console.log(i,j);
          square[0].push(array1[i][j])
        }else if (i< 3  && j>=3 && j<6) {

          square[1].push(array1[i][j])
          //console.log(i,j);
        }else if (i<3  && j>=6 && j<9){
          //console.log(i,j);
          square[2].push(array1[i][j])
        }else if (i<6 && i>=3 && j<3 ) {
          //console.log(i,j);
            square[3].push(array1[i][j])
        }else if (i>= 3 && i<6  && j>=3 && j<6) {
            square[4].push(array1[i][j])
        }else if (i>= 3 && i<6 && j<9 && j>=6) {
           square[5].push(array1[i][j])
        }else if (i>= 6 && i<9 && j<3) {
            square[6].push(array1[i][j])
        }else if (i>= 6 && i<9 && j>=3 && j<6) {
            square[7].push(array1[i][j])
        }else if (i>= 6 && i<9 && j>=6 &&j<9) {
            square[8].push(array1[i][j])
          }

        }
  }
  return square
}
//cek kolom,baris,dan square
function cek(number,indeks,jenis){
  for (var i = 0; i < 9; i++) {
    if (number===Number(jenis[indeks][i])) {
      return true
    }
  }
  return false
}
//removepossiblenumber
function remove(possibleNumber,number){
  var index = possibleNumber.indexOf(number)
  possibleNumber.splice(index,1)
  return possibleNumber
}
//forchecking index in box
function indexSquare(i,j){
  if ( i<3 && j<3 ) {
    return 0
  }else if (i< 3  && j>=3 && j<6) {
    return 1
  }else if (i<3  && j>=6 && j<9){
    return 2
  }else if (i<6 && i>=3 && j<3 ) {
    return 3
  }else if (i>= 3 && i<6  && j>=3 && j<6){
    return 4
  }else if (i>= 3 && i<6 && j<9 && j>=6){
    return 5
  }else if (i>= 6 && i<9 && j<3){
    return 6
  }else if (i>= 6 && i<9 && j>=3 && j<6) {
    return 7
  }else if (i>= 6 && i<9 && j>=6 &&j<9) {
    return 8
  }
}
//


//cekKolom
//console.log(board());
// console.log(columnBoard());
console.log(board());
//cek kotak
console.log(`cek kotak : ${cek(0,5,squareBoard())}`);
//cek kolom
console.log(`cek kolom : ${cek(2,1,columnBoard())}`);
//cekbaaris
console.log(`cek baris : ${cek(1,0,board())}`);

// cek()
//console.log(board_string);
