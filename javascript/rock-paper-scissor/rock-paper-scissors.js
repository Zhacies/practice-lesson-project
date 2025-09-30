

/* Scissor functions */
document.getElementById("scissors").onclick =function(){
      
      let compmove2='';
      const random_number2= Math.random();
      if(random_number2 >= 0 && random_number2 < 1/3){
      compmove2='rock';
      }else if (random_number2 >= 1/3 && random_number2<2/3){ 
      compmove2 = 'paper';
      }else if (random_number2 >= 2/3 && random_number2< 1){
        compmove2 ='scissors';
      }
        let result2 = '' ;

      if(compmove2 === 'rock'){
        result2= 'you lose';
      } else if (compmove2 === 'paper'){
        result2 = 'you win';
      }else if (compmove2 === 'scissors'){
        result2 = ' tie';
      }
      alert(`you picked scissors.computer picked ${compmove2}.${result2}`);
      
}
    /* paper functions */
  document.getElementById("paper").onclick=function(){
        let compmove1='';
        const random_number1= Math.random();
        if(random_number1 >= 0 && random_number1 < 1/3){
        compmove1='rock';
        }else if (random_number1 >= 1/3 && random_number1<2/3){ 
        compmove1 = 'paper';
        }else if (random_number1 >= 2/3 && random_number1< 1){
        compmove1 ='scissors';
        }
        let result1 = '' ;

        if(compmove1 === 'paper'){
        result1= 'tie';
        } else if (compmove1 === 'rock'){
        result1 = 'you win';
        }else if (compmove1 ==='scissors'){
        result1 = ' you lose';
        }
        alert(`you picked paper.computer picked ${compmove1}.${result1}`);
        }

      /*rock functions */
  document.getElementById("rock").onclick=function(){
      let compmove='';
      const random_number= Math.random();
      if(random_number >= 0 && random_number < 1/3){
      compmove='rock';
      }else if (random_number >= 1/3 && random_number<2/3){ 
      compmove = 'paper';
      }else if (random_number >= 2/3 && random_number< 1){
        compmove ='scissors';
      }
        let result = '' ;

      if(compmove === 'rock'){
        result= 'tie';
      } else if (compmove === 'paper'){
        result = 'you lose pweh';
      }else if (compmove === 'scissors'){
        result = ' you won';
      }
      alert(`you picked rock.computer picked ${compmove}.${result}`);
      }