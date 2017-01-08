"use strict"

var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt').toString().split("\n")[0].trim()
var board_string = fs.readFileSync('data.txt').toString().split("\n")[0].trim()


class Sudoku {
    constructor(board_string) {
        this._board_string = board_string;
        this._papan = [];
        this._tampung = [];
        this._l = 1
        this._indexKosong = [];
        this._index = -1
    }
    checkIndex(){
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j <9 ; j++) {
          if (this._papan[i][j] == 0) {
              this._indexKosong.push([i,j].join(""))
          }
        }
      }
    }

    solve() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (this._papan[i][j] == 0) {

                    this._tampung = []; //Reset Tampung Jadi Kosong
                    var k = 0;
                    var p = 0;
                    //Mengambil data this._board_string Dalam Bentuk Horizontal dan Vertikal
                    while (k < this._papan[0].length) {
                        this._tampung.push(this._papan[i][p]) //Horizontal
                        this._tampung.push(this._papan[p][j]) //Vertikal
                        k++
                        p++
                    }

                    // Mengambil data this._board_string dalam bentuk 3x3

                    if (i < 3 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m][n])
                            }
                        }
                    } else if (i < 3 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m][n + 3])
                            }
                        }
                    } else if (i < 3 && j < 9) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m][n + 6])
                            }
                        }
                    } else if (i < 6 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 3][n])
                            }
                        }
                    } else if (i < 6 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 3][n + 3])
                            }
                        }
                    } else if (i < 6 && j < 9) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 3][n + 6])
                            }
                        }
                    } else if (i < 9 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 6][n])
                            }
                        }
                    } else if (i < 9 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 6][n + 3])
                            }
                        }
                    } else if (i < 9 && j < 99) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 6][n + 6])
                            }
                        }
                    }

                    while (this._l < 10) {
                        if (this._tampung.indexOf(this._l.toString()) == -1) {
                            this._papan[i][j] = this._l.toString()
                            this._l = 1
                            break;
                        }
                        this._l++
                    }

                    if (this._papan[i][j] == "0") {
                        var tmp = this._indexKosong[this._index].split("")
                        i = Number(tmp[0])
                        j = Number(tmp[1])
                        this._l = Number(this._papan[i][j])+1
                        this._papan[i][j] = "0"
                        this._index-1
                    }else{
                        this._index++
                    }
                    console.log(this._index);
                }
            }
        }
        return  this._papan
    }

    board() {
        // console.log("Sebelum :");
        let count = 0
        for (var i = 0; i < 9; i++) {
            var arrPapan = [];
            for (var j = 0; j < 9; j++) {
                arrPapan.push(this._board_string[count])
                count++;
            }
            this._papan.push(arrPapan)
        }
        return this._papan;
    }

}

var game = new Sudoku(board_string)
console.log(game.board())
game.checkIndex();
console.log(game.solve())
