const calculator = document.querySelector(".calculator")
const keys = [["1","2","3","+"],["4","5","6","-"],["7","8","9","x"],["C","0","=","/"]]
const operator = ["+","-","x","/"]
let output;



document.addEventListener('DOMContentLoaded',()=>{
    output = document.createElement('div')
    output.innerHTML = "0";
    output.classList.add('output')
    calculator.appendChild(output)
    for(let x=0; x<keys.length;x++){
        let row = document.createElement('div')
        row.classList.add('row')
        for(let y=0; y<keys[x].length; y++){
            let btn = document.createElement('div')
            btn.classList.add('btn')
            btn.innerHTML = keys[x][y];
            btn.addEventListener('click',buttonHit)
            row.appendChild(btn)
        }
        calculator.appendChild(row)
    }

    function buttonHit(e){
        let value = this.innerText
        let cal = output.innerText
        if(cal=='0'){
            cal=''
        }
        if(value=='C'){
            cal = 0
        }else
        if(value=='='){
            cal=eval(cal)
        }else{
            let lastValue = cal.substring(cal.length-1)
            if(operator.includes(value)){
                if(operator.includes(lastValue)){
                    cal = cal.substring(0,cal.length-1)
                }else{
                    cal = eval(cal)
                }
            }
            console.log(lastValue)
            cal= cal + value;
        }
        output.innerText = cal
    }
        
})