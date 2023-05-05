'use strict';

void  function () {
  const generateRandomNum = () => {
      const  arrNum = [];

      const numGenerator = () => {
          if (arrNum.length === 100) return NaN;
          const randomNum = Math.floor(Math.random() * 100) + 1;

          if(arrNum.includes(randomNum)){
              return numGenerator()
          }
          arrNum.push(randomNum);
          return randomNum;
      }
      return numGenerator;
  }

  const numGenerator = generateRandomNum();
    let res = true;
    while (res) {
        const genNum = numGenerator();
        if(isNaN(genNum)) res = false;
        console.log(genNum)
    }
}()
