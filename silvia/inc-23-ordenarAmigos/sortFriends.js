//CREACIÓN DE FUNCIÓN SWAP QUE MUEVE valores entre los índices del array que queremos ordenar
    //NECESITAMOS ESTA FUNCIÓN PARA IMPLEMENTAR FUNCIÓN BURBUJA
    function swap(myArr, indexOne, indexTwo){ 
      var tmpVal = myArr[indexOne]; 
      myArr[indexOne] = myArr[indexTwo]; 
      myArr[indexTwo] = tmpVal; 
      
      return myArr; 
  } 
  ​
  var myArr = ['a', 'b', 'c', 'd']; 
  console.log( swap( myArr, 0, 1) ); // ["b", "a", "c", "d"] 
  ​
  //CREACIÓN FUNCIÓN BURBUJA
  function burbuja(myArr){
      var size=myArr.length;
  ​
      for(var pass=1;pass<size;pass++){//LOOP EXTERNO
          for(var left=0;left < (size - pass);left++){//LOOP INTERNO
              var right = left + 1;
              if (myArr[left] > myArr[right]) {
                  swap (myArr,left,right);
              }
          }   
      }
      return myArr;
  }
  ​
  var myArr = ['d', 'f', 'd', 'c', 'a', 'e', 'b']; 
  console.log( burbuja(myArr) ); // ["a", "b", "c", "d", "d", "e", "f"] 