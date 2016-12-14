"use strict"

var fs = require('fs')

var board_string = fs.readFileSync('set-01_sample.unsolved.txt').toString().split("\n")[0]

class Sudoku {
    constructor(board_string) {
        this._board_string = board_string;
        this._papan = [];
        this._tampung = [];
    }

    solve() {
        console.log("\nSesudah :\n");
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
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m][n])
                            }
                        }
                    } else if (i < 3 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m][n + 3])
                            }
                        }
                    } else if (i < 3 && j < 9) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m][n + 6])
                            }
                        }
                    } else if (i < 6 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m + 3][n])
                            }
                        }
                    } else if (i < 6 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m + 3][n + 3])
                            }
                        }
                    } else if (i < 6 && j < 9) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m + 3][n + 6])
                            }
                        }
                    } else if (i < 9 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m + 6][n])
                            }
                        }
                    } else if (i < 9 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m + 6][n + 3])
                            }
                        }
                    } else if (i < 9 && j < 99) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < n; n++) {
                                this._tampung.push(this._papan[m + 6][n + 6])
                            }
                        }
                    }

                    //Memasukkan Jawaban Dalam Array
                    for (var l = 1; l < 10; l++) {
                        if (this._tampung.indexOf(l.toString()) == -1) {
                            this._papan[i][j] = l.toString()
                            break;
                        }
                    }
                }
            }
        }
        console.log(this._papan);
    }

    board() {
        console.log("Sebelum :\n");
        for (var i = 0; i < 9; i++) {
            var arrPapan = [];
            for (var j = 0; j < 9; j++) {
                arrPapan.push(this._board_string.slice(0, 1))
                this._board_string = this._board_string.slice(1)
            }
            this._papan.push(arrPapan)
        }
        return this._papan;
    }

}

var game = new Sudoku(board_string)
console.log(game.board())
game.solve()
