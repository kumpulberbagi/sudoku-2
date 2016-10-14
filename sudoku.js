"use strict"

class Sudoku {
  constructor(board_string) {
      this.board_string = board_string
      this.tampungBoard = []
      this.cornerRow = -1
      this.cornerCol = -1
  }

  emptyArr(){
    var emptyArr = []
    for(var i = 0 ; i < this.tampungBoard.length; i++){
      for(var j = 0 ; j < this.tampungBoard.length; j++){
        if(this.tampungBoard[i][j] === 0){
          emptyArr.push([i,j])
        }
      }
    }
    return emptyArr
  }

  solve(board, empty, i) {
    var limit = 9, row, col, value, found
    while(i < empty.length){
      row = empty[i][0]
      col = empty[i][1]
      value = board[row][col] + 1
      found = false

      while(!found && value <= limit){

        if(this.checkAll(board, row, col, value)){
          found = true
          board[row][col] = value
          i++
        }else{
          value++
        }
      }
      if(!found){
        board[row][col] = 0
        // this.solve(board, empty, i--)
        i--
      }
    }

    console.log(`Result :\n`);
    for(var i = 0 ; i < 9 ; i++){
      let kolom1 = String(board[i]).replace(/,/g, ' ').slice(0, 5)
      let kolom2 = String(board[i]).replace(/,/g, ' ').slice(6, 11)
      let kolom3 = String(board[i]).replace(/,/g, ' ').slice(12, 17)

      console.log(` ${kolom1} | ${kolom2} | ${kolom3}`);
      if(i === 2 || i === 5){
        console.log(`----------------------`);
      }
    }
  }

  checkAll(board, row, col, cek){
    if(this.checkNumSquare(board, row, col, cek) === true &&
    this.checkNumCol(board, col, cek) === true &&
    this.checkNumRow(board, row, cek) === true){
      return true
    }else{
      return false
    }
  }

  substitue(board, cornerRow, cornerCol,cek)//untuk checkNumSquare(3x3)
  {
    var flag = 0;
    for(var i = cornerRow ; i < cornerRow+3 ; i++){
      for(var j = cornerCol ; j < cornerCol+3 ; j++){

        if(i == 0 && j == 2) {
          debugger
          // console.log(`cek perbandingan ${board[i][j]} dengan $cek`)
        }

        if(board[i][j] === cek){
          flag++
        }else{
          flag += 0
        }
      }
    }
    if(flag > 0){
      return false
    }else{
      return true
    }
  }

  checkNumSquare(board, row, col, cek){

    if(row >= 0 && row < 3){
      if(col >= 0 && col < 3){
        return this.substitue(board, 0, 0, cek)
      }else if(col >= 3 && col < 6){
        return this.substitue(board, 0, 3, cek)
      }else{
        return this.substitue(board, 0, 6, cek)
      }
    }else if(row >= 3 && row < 6){
      if(col >= 0 && col < 3){
        return this.substitue(board, 3, 0, cek)
      }else if(col >= 3 && col < 6){

        return this.substitue(board, 3, 3, cek)
      }else{
        return this.substitue(board, 3, 6, cek)
      }
    }else{
      if(col >= 0 && col < 3){
        return this.substitue(board, 6, 0, cek)
      }else if(col >= 3 && col < 6){
        return this.substitue(board, 6, 3, cek)
      }else{
        return this.substitue(board, 6, 6, cek)
      }
    }
}

  checkNumCol(board, col, cek){
    var flag = 0;
    for(var row = 0 ; row < 9 ; row++){
      if(board[row][col] === cek ){
        flag++
      }else{
        flag += 0
      }
    }
    if(flag > 0){
      return false
    }else{
      return true
    }
  }

  checkNumRow(board, row, cek){
    var flag = 0;
    for(var col = 0 ; col < 9 ; col++){
      if(board[row][col] === cek ){
        //console.log(this.tampungBoard[row][col]);
        flag++
      }else{
        flag += 0
      }
    }
    if(flag > 0){
      return false
    }else{
      return true
    }
  }

  board() {
    for(var i=0;i<9;i++)
    {
      this.tampungBoard[i] =  []
      for(var j=0;j<9;j++)
      {
        this.tampungBoard[i].push(Number(this.board_string[9*i+j]))
      }
    }
    return this.tampungBoard
  }

  printBoard(){
    console.log(`Before :\n`);
    for(var i = 0 ; i < 9 ; i++){
      let kolom1 = String(this.tampungBoard[i]).replace(/,/g, ' ').slice(0, 5)
      let kolom2 = String(this.tampungBoard[i]).replace(/,/g, ' ').slice(6, 11)
      let kolom3 = String(this.tampungBoard[i]).replace(/,/g, ' ').slice(12, 17)

      console.log(` ${kolom1} | ${kolom2} | ${kolom3}`);
      if(i === 2 || i === 5){
        console.log(`----------------------`);
      }
    }
  }
}

var fs = require('fs')
var board_string_test = '700000400020070080003008079900500300060020090001097006000300900030040060009001035'
var board_string = fs.readFileSync('set-04_peter-norvig_11-hardest-puzzles.txt')
  .toString()
  .split("\n")[10]

var game = new Sudoku(board_string)


// Remember: this will just fill out what it can and not "guess"
// game.solve()
let board = game.board()
let empty = game.emptyArr()
game.printBoard()
console.log('\n');
//console.log(game.board_random());
game.solve(board, empty, 0)
console.log('\n')
