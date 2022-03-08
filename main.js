const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");

let value = [];
let num1 ;
let num2;
let operator;
let exec = true;
let dec = true;

function dis(){
    const keys = document.querySelectorAll(".num");
            keys.forEach(item => {
                item.addEventListener("click", ()=>{
                    const display2 = document.querySelector("#display2");
                    let preDis = display2.innerHTML;
                    display2.innerHTML = preDis + item.textContent;
                    return parseFloat(display2.innerHTML);
                })
            })


    }

function deci(){
    const point = document.querySelector(".decimal");
    point.addEventListener("click", () => {
        if(dec === true){
        const display2 = document.querySelector("#display2");
        display2.innerHTML = display2.innerHTML+".";
        dec = false;
        return parseFloat(display2.innerHTML);

        }
        
    })
}

function add(a, b){
    return a + b
  };


function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    if(num2 === 0){
        alert("cannot divide a number with 0")
    }else{
        return a / b;
    }
}


function operate(){
    switch(operator){
      case "+": 
          return add(num1, num2);
          break;
      
      case "-":
          return sub(num1, num2);
          break;
      case "*":
          return mul(num1, num2);
          break;

      case "/":
          return div(num1,  num2);
          break
    }
  }

  function calc(){
    const sign = document.querySelectorAll(".sign");
    sign.forEach(element => {
              const display1 = document.querySelector("#display1");
              const display2 = document.querySelector("#display2");
        element.addEventListener("click", () => {
          if(element.textContent === "+" || element.textContent === "-" || element.textContent === "*" || element.textContent === "/"){
              exec = true;
              dec = true;
              if(value.length === 2 && display2.innerHTML === ""){
                  value[1] = element.textContent;
                  display1.innerHTML = value[0] + " " + element.textContent;
                  return;
              }

              if(display1.innerHTML === "" && display2.innerHTML === ""){
                  return;
              }
              if(value.length <= 1){
                  value.push(display2.innerHTML);
                  value.push(element.textContent);
                  display1.innerHTML = value[0] + " " + element.textContent;
                  display2.innerHTML = "";
              }else if(value.length < 3){
                  value.push(display2.innerHTML);
                  display1.innerHTML = value[0] + value[1] + value[2];
                  display2.innerHTML = ""
              }
      
              if(value.length === 3){
                  for(let i = 0; i <= value.length; i++){
                      num2 = parseFloat(value.pop());
                      operator = value.pop();
                      num1 = parseFloat(value.pop());
                  }
          
                  if(value.length === 0){
                      display2.innerHTML = operate(num1, num2);
                      value.push(display2.innerHTML);
                      value.push(element.textContent)
                      display1.innerHTML = value[0] + value[1];
                      display2.innerHTML = ""
                      return
      
          
                  }
              }
            }
        })

    })

}


function clear(){
    let clear = document.querySelector(".clear")
    clear.addEventListener("click", () => {
        display2.innerHTML = ""
        display1.innerHTML = ""
    })
    
}

function del(){
    const remove = document.querySelector(".delete");
    const display2 = document.querySelector("#display2");
    remove.addEventListener("click", () => {
        if(display2.innerHTML === "" || display2.innerHTML.length === 1){
            display2.innerHTML = ""
            return
        }
        let text = display2.innerHTML;
        let newText = text.slice(0, -1);
        display2.innerHTML = parseFloat(newText);

        
    })
}

function equal(){
    const ans = document.querySelector(".ans");
    const display1 = document.querySelector("#display1");
    const display2 = document.querySelector("#display2");
    ans.addEventListener("click", () => {
        if(display2.innerHTML === ""){
            return
        }
        if(value.length === 0 && display1.innerHTML === ""){
            return;
        }
        
        if(value.length < 3 && exec === true){
            value.push(display2.innerHTML);
            display1.innerHTML = value[0] + " " + value[1] + value[2];
            display2.innerHTML = ""
        }
        
        for(let i = 0; i <= value.length; i++){
            num2 = parseFloat(value.pop());
            operator = value.pop();
            num1 = parseFloat(value.pop());
        }

        if(value.length === 0 && exec === true){
            display2.innerHTML = operate(num1, num2);
            exec = false;

        }

    })
    
}

/*keyboard support*/

function key(){
    const display2 = document.querySelector("#display2");
    document.addEventListener("keydown", function(event){
        if(!isNaN(event.key)|| event.key === "."){
            const display2 = document.querySelector("#display2")
            let preDis = display2.innerHTML;
            display2.innerHTML = preDis + event.key;
            return parseFloat(display2.innerHTML)
        }else{
            return
        }

    })

}



function calc1(){
        
       
    document.addEventListener("keydown", (event) => {
    const display1 = document.querySelector("#display1");
    const display2 = document.querySelector("#display2");
      if(event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/"){
          exec = true;
          dec = true;
          if(value.length === 2 && display2.innerHTML === ""){
            value[1] = event.key;
            display1.innerHTML = value[0] + " " + event.key;
            return;
        }
          if(value.length === 2 && display2.innerHTML === ""){
              return;
          }
          if(value.length <= 1){
              value.push(display2.innerHTML);
              value.push(event.key);
              display1.innerHTML = value[0] + " " + value[1];
              display2.innerHTML = "";
          }else if(value.length < 3){
              value.push(display2.innerHTML);
              display1.innerHTML = value[0] + value[1] + value[2];
              display2.innerHTML = ""
          }
  
          if(value.length === 3){
              for(let i = 0; i <= value.length; i++){
                  num2 = parseFloat(value.pop());
                  operator = value.pop();
                  num1 = parseFloat(value.pop());
              }
      
              if(value.length === 0){
                  display2.innerHTML = operate(num1, num2);
                  value.push(display2.innerHTML);
                  value.push(event.key)
                  display1.innerHTML = value[0] + value[1];
                  display2.innerHTML = ""
                  return
  
      
              }
          }
        }
    })

}


function equal1(){
    document.addEventListener("keydown", (event) => {
        if(event.key === "Enter" || event.key === "="){ 

            if(display2.innerHTML === ""){
                return;
            }

            if(value.length === 0 && display1.innerHTML === ""){
                return;
            }
            
            if(value.length < 3 && exec === true){
                value.push(display2.innerHTML);
                display1.innerHTML = value[0] + " " + value[1] + value[2];
                display2.innerHTML = ""
            }
            
            for(let i = 0; i <= value.length; i++){
                num2 = parseFloat(value.pop());
                operator = value.pop();
                num1 = parseFloat(value.pop());
            }
    
            if(value.length === 0 && exec === true){
                display2.innerHTML = operate(num1, num2);
                exec = false;
    
            }
        }
      

    })
    
}


function del1(){
    const display2 = document.querySelector("#display2");
    document.addEventListener("keydown", (event) => {

        if(event.key === "Backspace"){
            if(display2.innerHTML === "" || display2.innerHTML.length === 1){
                display2.innerHTML = ""
                return
            }
            let text = display2.innerHTML;
            let newText = text.slice(0, -1);
            display2.innerHTML = parseFloat(newText);
        }

    })
}

dis();
deci();
calc();
clear();
del();
equal();
key();
calc1();
equal1()
del1();
