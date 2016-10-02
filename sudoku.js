"use strict"

class Sudoku {
  constructor(board_string) {
      this.board_string = board_string
      this.tampungBoard = []
      this.cornerRow = -1
      this.cornerCol = -1
  }

  solveFinal(){
    for(var i = 0 ; i < this.tampungBoard.length; i++){
      for(var j = 0 ; j < this.tampungBoard.length; j++){
        if(this.tampungBoard[i][j] === '0'){
          console.log(i + " " + j)
          // if(this.checkNumCol(j, numberCek) === false && this.checkNumSquare(0, j, numberCek) === false){
          //   console.log(this.tampungBoard[0][j])
          //   // break
          // }
        }
      }
    }
    return this.tampungBoard
  }

  emptyArr(row, numberCek){
    var emptyArr = []
    for(var i = 0 ; i < this.tampungBoard.length; i++){
      for(var j = 0 ; j < this.tampungBoard.length; j++){
        if(this.tampungBoard[i][j] === '0'){
          emptyArr.push([i,j])
        }
      }
    }
    return emptyArr
  }

  solve() {
    var row, col
    var temp = 0
    for(var i = 0 ; i < this.emptyArr().length ; i++){
      row = this.emptyArr()[i][0]
      col = this.emptyArr()[i][1]
      for(var cek = 9 ; cek > 0 ; cek--){
        cek = cek.toString()
        if(this.checkAll(row, col, cek) === true){
          this.tampungBoard[row][col] = cek
        }else{
          // this.tampungBoard[row][col] = 'a'
        }
      }
    }

    return this.tampungBoard;
  }

  checkAll(row, col, cek){
    if(this.checkNumRow(row, cek) === true &&
    this.checkNumCol(col, cek) === true &&
    this.checkNumSquare(row, col, cek) === true){
      return true
    }else{
      return false
    }
  }

  substitue(cornerRow, cornerCol,cek)//untuk checkNumSquare(3x3)
  {
    var flag = 0;
    cek = cek.toString()
    for(var i = cornerRow ; i < cornerRow+3 ; i++){
      for(var j = cornerCol ; j < cornerCol+3 ; j++){
        if(this.tampungBoard[i][j] === cek){
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

  checkNumSquare(row, col, cek){
    if(row >= 0 && row < 3){
      if(col >= 0 && col < 3){
      return this.substitue(0, 0, cek)
      }else if(col >= 3 && col < 6){
        return this.substitue(0,3, cek)
      }else{
        return this.substitue(0,6, cek)
      }
    }else if(row >= 3 && row < 6){
      if(col >= 0 && col < 3){
        return this.substitue(3,0, cek)
      }else if(col >= 3 && col < 6){

        return this.substitue(3,3, cek)
      }else{
        return this.substitue(3,6, cek)
      }
    }else{
      if(col >= 0 && col < 3){
        return this.substitue(6,0, cek)
      }else if(col >= 3 && col < 6){
        return this.substitue(6,3, cek)
      }else{
        return this.substitue(6,6, cek)
      }
    }
}

  checkNumCol(col, cek){
    var flag = 0;
    for(var row = 0 ; row < 9 ; row++){
      if(this.tampungBoard[row][col] === cek ){
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

  checkNumRow(row, cek){
    var flag = 0;
    for(var col = 0 ; col < 9 ; col++){
      if(this.tampungBoard[row][col] === cek ){
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
        this.tampungBoard[i].push(this.board_string[9*i+j])
      }
    }
    return this.tampungBoard
  }

  board_random()
  {
    for(var i=0;i<this.tampungBoard.length;i++)
    {
      for(var j=0;j<this.tampungBoard.length;j++)
      {
        if(this.tampungBoard[i][j] === '0')
        {
          this.tampungBoard[i][j] = random_number()
        }
      }
    }
    return this.tampungBoard
  }
}

var fs = require('fs')
var board_string_test = '609238745274561398853947621486352179792614583531879264945723816328196457167485932'
var board_string = fs.readFileSync('set-03_peter-norvig_95-hard-puzzles.txt')
  .toString()
  .split("\n")[0]
//test : set-04_peter-norvig_11-hardest-puzzles.txt
// test : set-03_peter-norvig_95-hard-puzzles.txt
//test : set-02_project_euler_50-easy-puzzles.txt
var game = new Sudoku(board_string)

function random_number()
{
  return (Math.floor(Math.random()*9)+1).toString()
}

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
console.log('\n');
console.log(game.solve());
console.log('\n');
