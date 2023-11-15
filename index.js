function changeEven(numbers, value) {
    // Change code below this line
      const newArray = [];
  
    numbers.forEach(element => {
      if(element % 2 === 0){
        newArray.push(element + value);
      }
      
    });
  
    return newArray;
    // Change code above this line
  }

  console.log(changeEven([1, 2, 3, 4, 5], 10));