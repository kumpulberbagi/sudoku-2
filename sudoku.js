"use strict"
require('console.table');
class Sudoku {
  constructor(board_string, arrBoard, containerH, containerV, posibleH) {
    this._board_string = board_string;
    this.arrBoard = arrBoard;
    this.containerH = containerH;
    this.containerV = containerV;
    this.posibleH = posibleH;
  }


  // Returns a string representing the current state of the board
  board() {
    this.arrBoard = [];
    for (var i = 0; i < 9; i++) {
       var row = board_string.split("").splice(i*9, 9);
       this.arrBoard.push(row);
    }
    for (var i = 0; i < this.arrBoard.length; i++) {
      for (var j = 0; j < this.arrBoard[i].length; j++) {
        this.arrBoard[i][j] = parseInt(this.arrBoard[i][j]);
      }
    }
    return this.arrBoard;
  }

  exsistH() {
    this.containerH =[];
    for (var i = 0; i < this.arrBoard.length; i++) {
      var containH = [];
      for (var j = 0; j < this.arrBoard.length; j++) {
        if(this.arrBoard[i][j] !== 0){
          containH.push(this.arrBoard[i][j]);
        }
      }
      this.containerH.push(containH);
    }
    return this.containerH;
  }

  exsistV(){
    this.containerV =[];
    for (var i = 0; i < this.arrBoard.length; i++) {
      var containV = [];
      for (var j = 0; j < this.arrBoard.length; j++) {
        if(this.arrBoard[j][i] !== 0){
          containV.push(this.arrBoard[j][i]);
        }
      }
      this.containerV.push(containV);
    }
    return this.containerV;
  }




  checkH() {
    var sudoku = this.board();
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudoku[i][j] === 0) {
          for (var k = 1; k <= 9; k++) {
            if (this.exsistH()[i].indexOf(k) == -1) {
              sudoku[i][j] = k;
            }
          }
        }
      }
    }
    return sudoku;
  }

  checkV() {
    var sudoku = this.board();
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudoku[j][i] === 0) {
          for (var k = 1; k <= 9; k++) {
            if (this.exsistV()[i].indexOf(k) == -1) {
              sudoku[j][i] = k;
            }
          }
        }
      }
    }
    return sudoku;
  }

  checkVH() {
    var sudoku = this.board();
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (sudoku[i][j] === 0) {
          while (sudoku[i][j] === 0) {
            if (this.exsistH()[i].indexOf(this.getRandom()) == -1 && this.exsistV()[i].indexOf(this.getRandom()) == -1) {
              sudoku[i][j] = this.getRandom();
            }
          }
          // for (var k = 1; k <= 9; k++) {

          // }
        }
      }
    }
    return sudoku;
  }


  posible_h() {
    var sudoku = this.board();
    this.posibleH =[];
    for (var i = 0; i < sudoku.length; i++) {
      var containH = [];
      for (var j = 0; j < sudoku.length; j++) {
        for (var k = 1; k <= 9; k++) {
          if (this.exsistH()[i].indexOf(k) == -1) {
            this.posibleH.push(k);
          }
        }
      }
      this.posibleH.push(containH);
    }
    return this.posibleH;
  }




  getRandom() {
    return Math.ceil(Math.random()*9);
    return this;
  }
  solve() {


  }





}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// console.log(game.posible_h());
console.log("SUDOKU PUZZLE");
console.table(game.board());
// // game.solve();
// console.log(game.exsistH());
// console.log(game.exsistV());
console.log("SUDOKU HORIZONTAL");
console.table(game.checkH());
console.log("SUDOKU VERTIKAL");
console.table(game.checkV());
console.log("REAL SUDOKU (Dev. State)");
console.table(game.checkVH());
// console.log(game.getRandom());
// // Remember: this will just fill out what it can and not "guess"
// // game.solve()
//
// // console.log(game.board())
