"use strict"

var board=[], array=[], angka=0

class Sudoku {
  constructor(board_string) {
    this.board_string = board_string
  }

  solve() {

    if(this.cekBaris() == false) {
      return "tidak bisa di solve"
    }

    else if(this.cekKolom() == false) {
      return "tidak bisa di solve"
    }
    else {
      // return board

      // console.log(RegExp(/[0]+/g).test(this.inputAngka()))

      // while (RegExp(/[0]+/g).test(this.inputAngka()) == true) {
      //   this.inputAngka()
      // }

      this.inputAngka()
      this.inputAngka()
      this.inputAngka()
      this.inputAngka()
      this.inputAngka()
      this.inputAngka()



    }




    return board

  }

  cekBaris() {
    for(var l =1;l<=9;l++) {

      for(var i=0;i<9;i++) {
        var flag=0
        // console.log(board[i][j]);
        for(var j=0;j<9;j++) {
          // console.log("atas: "+l);
          // console.log("bawah: "+board[i][j]);
          if(flag>1) {
            // console.log("keluar");
            return false;
          }
          if(l == board[i][j]) {
            flag++
            // console.log(flag);
          }

        }

      }
    }
  }

  cekKolom() {
    for(var l =1;l<=9;l++) {

      for(var i=0;i<9;i++) {
        var flag=0
        // console.log(board[i][j]);
        for(var j=0;j<9;j++) {
          // console.log("atas: "+l);
          // console.log("bawah: "+board[j][i]);
          if(flag>1) {
            // console.log("keluar");
            return false;
          }
          if(l == board[j][i]) {
            flag++
            // console.log(flag);
          }

        }

      }
    }
  }

  isiPerBaris(baris) {
    var flag=0
    for(var i=baris;i<=baris;i++) {
      for(var j=0;j<9;j++) {
        if(board[i][j] == '0') {
          flag++
        }
      }
    }
    if(flag>1) {
      return false
    }
    else {
      return true
    }
  }

  isiYangKosong(baris, kolom) {
    var ab0=0, ak0=0, a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0,a8=0,a9=0


    for(var i=baris;i<=baris;i++) {
      for(var j=0;j<9;j++) {
        if(board[i][j] == '0') {
          ab0++
        }
        if(board[i][j] == '1') {
          a1++
        }
        if(board[i][j] == '2') {
          a2++
        }
        if(board[i][j] == '3') {
          a3++
        }
        if(board[i][j] == '4') {
          a4++
        }
        if(board[i][j] == '5') {
          a5++
        }
        if(board[i][j] == '6') {
          a6++
        }
        if(board[i][j] == '7') {
          a7++
        }
        if(board[i][j] == '8') {
          a8++
        }
        if(board[i][j] == '9') {
          a9++
        }
      }
    }

    if(ab0 == 1) {
      for(var i=baris;i<=baris;i++) {
        for(var j=0;j<9;j++) {
          if(board[i][j] == '0') {


            for(var l=1;l<=9;l++) {
              if(l==1) {
                if(a1 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==2) {
                if(a2 == 0) {
                  board[i][j] = String(l)

                }
              }
              if(l==3) {
                if(a3 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==4) {
                if(a4 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==5) {
                if(a5 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==6) {
                if(a6 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==7) {
                if(a7 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==8) {
                if(a8 == 0) {
                  board[i][j] = String(l)
                }
              }
              if(l==9) {
                if(a9 == 0) {
                  board[i][j] = String(l)
                }
              }
            }


          }
        }
      }
    }

    for(var i=kolom;i<=kolom;i++) {
      for(var j=0;j<9;j++) {
        if(board[j][i] == '0') {
          ak0++
        }
        if(board[j][i] == '1') {
          a1++
        }
        if(board[j][i] == '2') {
          a2++
        }
        if(board[j][i] == '3') {
          a3++
        }
        if(board[j][i] == '4') {
          a4++
        }
        if(board[j][i] == '5') {
          a5++
        }
        if(board[j][i] == '6') {
          a6++
        }
        if(board[j][i] == '7') {
          a7++
        }
        if(board[j][i] == '8') {
          a8++
        }
        if(board[j][i] == '9') {
          a9++
        }
      }
    }



    if(ak0 == 1) {
      for(var i=kolom;i<=kolom;i++) {
        for(var j=0;j<9;j++) {
          if(board[j][i] == '0') {


            for(var l=1;l<=9;l++) {
              if(l==1) {
                if(a1 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==2) {
                if(a2 == 0) {
                  board[j][i] = String(l)

                }
              }
              if(l==3) {
                if(a3 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==4) {
                if(a4 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==5) {
                if(a5 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==6) {
                if(a6 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==7) {
                if(a7 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==8) {
                if(a8 == 0) {
                  board[j][i] = String(l)
                }
              }
              if(l==9) {
                if(a9 == 0) {
                  board[j][i] = String(l)
                }
              }
            }


          }
        }
      }
    }


    array = []
    var temp = []
    var temp2 = []
    for(var l=1;l<=9;l++) {
      if(l==1) {
        if(a1 == 0) {
          array.push(l)
        }
      }
      if(l==2) {
        if(a2 == 0) {
          array.push(l)

        }
      }
      if(l==3) {
        if(a3 == 0) {
          array.push(l)
        }
      }
      if(l==4) {
        if(a4 == 0) {
          array.push(l)
        }
      }
      if(l==5) {
        if(a5 == 0) {
          array.push(l)
        }
      }
      if(l==6) {
        if(a6 == 0) {
          array.push(l)
        }
      }
      if(l==7) {
        if(a7 == 0) {
          array.push(l)
        }
      }
      if(l==8) {
        if(a8 == 0) {
          array.push(l)
        }
      }
      if(l==9) {
        if(a9 == 0) {
          array.push(l)
        }
      }
    }

    temp.push(array)
    // console.log("te")
    // console.log(temp)
    for(var i=0;i<=temp.length;i++) {
      // console.log(test[0][i])
      // console.log(this.cekKotak2(i))
      // console.log(this.cekKotak3(i))

      if(baris<=2 && kolom<=2) {
        if(this.cekKotak2(temp[0][i]) == true && this.cekKotak3(temp[0][i]) == true && this.cekKosongKolom1(kolom) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          // temp2.push(String(temp[0][i]))
          board[baris][kolom] = String(temp[0][i])
          // board[baris][kolom] = temp2
        }
      }


      else if(baris<=2 && (kolom>=3 && kolom<=5)) {
        // console.log("masuk else")
        // console.log(this.cekKotak1(temp[0][i]))
        if(this.cekKotak1(temp[0][i]) == true && this.cekKotak3(temp[0][i]) == true && this.cekKosongKolom1(kolom) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          board[baris][kolom] = String(temp[0][i])
        }
      }

      else if(baris<=2 && (kolom>=6 && kolom<=8)) {
        // console.log("masuk else")
        // console.log(this.cekKotak1(temp[0][i]))
        if(this.cekKotak1(temp[0][i]) == true && this.cekKotak2(temp[0][i]) == true && this.cekKosongKolom1(kolom) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          board[baris][kolom] = String(temp[0][i])
        }
      }

      if((baris>=3 && baris<=5) && kolom<=2) {
        if(this.cekKotak1(temp[0][i]) == true && this.cekKotak7(temp[0][i]) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          // temp2.push(String(temp[0][i]))
          board[baris][kolom] = String(temp[0][i])
          // board[baris][kolom] = temp2
        }
      }

      else if((baris>=3 && baris<=5) && (kolom>=3 && kolom<=5)) {
        // console.log("masuk else")
        // console.log(this.cekKotak1(temp[0][i]))
        if(this.cekKotak2(temp[0][i]) == true && this.cekKotak8(temp[0][i]) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          board[baris][kolom] = String(temp[0][i])
        }
      }

      else if((baris>=3 && baris<=5) && (kolom>=6 && kolom<=8)) {
        // console.log("masuk else")
        // console.log(this.cekKotak1(temp[0][i]))
        if(this.cekKotak3(temp[0][i]) == true && this.cekKotak9(temp[0][i]) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          board[baris][kolom] = String(temp[0][i])
        }
      }


      if((baris>=6 && baris<=8) && kolom<=2) {
        if(this.cekKotak1(temp[0][i]) == true && this.cekKotak4(temp[0][i]) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          // temp2.push(String(temp[0][i]))
          board[baris][kolom] = String(temp[0][i])
          // board[baris][kolom] = temp2
        }
      }

      else if((baris>=6 && baris<=8) && (kolom>=3 && kolom<=5)) {
        // console.log("masuk else")
        // console.log(this.cekKotak1(temp[0][i]))
        if(this.cekKotak2(temp[0][i]) == true && this.cekKotak5(temp[0][i]) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          board[baris][kolom] = String(temp[0][i])
        }
      }

      else if((baris>=6 && baris<=8) && (kolom>=6 && kolom<=8)) {
        // console.log("masuk else")
        // console.log(this.cekKotak1(temp[0][i]))
        if(this.cekKotak3(temp[0][i]) == true && this.cekKotak6(temp[0][i]) == true && this.cekKosongBaris(baris,kolom) == true) {
          // console.log("masuk")
          board[baris][kolom] = String(temp[0][i])
        }
      }
    }

    if(Number(board[baris][kolom]) === 0) {
      // console.log("kosong")
      for(var i=0;i<=temp.length;i++) {
        // console.log(test[0][i])
        // console.log(this.cekKotak2(i))
        // console.log(this.cekKotak3(i))

        if(baris<=2 && kolom<=2) {
          if(this.cekKotak4(temp[0][i]) == true && this.cekKotak7(temp[0][i]) == true) {
            // console.log("masuk")
            // temp2.push(String(temp[0][i]))
            board[baris][kolom] = String(temp[0][i])
            // board[baris][kolom] = temp2
          }
        }

        else if(baris<=2 && (kolom>=3 && kolom<=5)) {
          // console.log("masuk else")
          // console.log(this.cekKotak1(temp[0][i]))
          if(this.cekKotak5(temp[0][i]) == true && this.cekKotak8(temp[0][i]) == true) {
            // console.log("masuk")
            board[baris]...