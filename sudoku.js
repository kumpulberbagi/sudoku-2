"use strict"
class Sudoku {
  constructor(board_string) {
    this.board_array = board_string;
    this.board_temp = [];
  }

  // cek horisontal
  //console.log(game.cekRow(0, 3);
  cekRow(row, col) {
    var num = this.board_temp[row][col]
    var status = "tidak ditemukan angka yang sama"
    for (var i = 0; i < 9; i++) {
      //saya akan skip apabila i sama dengan col
      if (i != col) {
        if (this.board_temp[row][i] == num) {
          status = "ditemukan angka yang sama"
          return status;
        }
      }
    }
    return status;
  }
  // cek vertical
  cekCol(row, col) {
    var num = this.board_temp[row][col]
    var status = "tidak ditemukan angka yang sama"
    for (var i = 0; i < 9; i++) {
      if (i != row) {
        if (this.board_temp[i][col] == num) {
          status = "ditemukan angka yang sama"
          return status;
        }
      }
    }
    return status;
  }
  // cetak board sudoku
  board() {
    for (var i = 0; i < 9; i++) {
      this.board_temp[i] = [];
      for (var j = 0; j < 9; j++) {
        this.board_temp[i][j] = this.board_array[(9 * i) + j];
      }
    }
    return this.board_temp;
  }
} // end class

// The file has newlines at the end of each line,
// so we call split to remove it (\n)

var tampungSemua = [];
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt').toString().split("\n")[0]
board_string = board_string.split("")
//console.log(satuanArray);
var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"

// cetak board sudoku
console.log(game.board());

// menjalakan cek horisontal
// cekRow([ index baris ], [index kolom])
console.log("cek horisontal : " + game.cekRow(0, 3));
// menjalakan cek vertical
// cekRow([ index baris ],[index kolom])
console.log("cek vertical : " + game.cekCol(3, 2));
