let calc = document.querySelector(".calc")
let quad = document.querySelector(".quad")
let main = document.querySelector(".main")
let btn = document.querySelectorAll("btnn")
let quadInp = document.querySelector(".quad_inp")
quad.classList.add("none")
calc.classList.add("all")
quad.classList.add("deafult")
main.classList.add("deafult")
calc.classList.add("deafult")
btn.classList.add("deafult")
function Quad(){
  if(quad.classList.contains("none")){
    quad.classList.remove("none")
    calc.classList.remove("all")
    calc.classList.add("none")
    quad.classList.add("all")
}
else{
  quad.classList.add("none")
  quad.classList.remove("all")
  calc.classList.remove("none")
}
}
function Solve(val){
  let v = document.getElementById("res");
  // if(v.value = "0"){
    v.value += val;
  // }else{
    // v.value += val
  // }
}
function Result(){
    let i = document.getElementById("one")
    let j = document.getElementById("two")
    let k = document.getElementById("three")
    let result = document.getElementById("res")
    if(result.value != "" || quad.classList.contains("all")){
      if(quad.classList.contains("all")){
        let a = Number(i.value);
        let b = Number(j.value);
        let c = Number(k.value);
        let d = b**2;
        let e = 4*a*c;
        let f = (d - e)**0.5;
        let g = (-b + f)/2*a;
        let h = (-b - f)/2*a;
        quad.classList.remove("all");
        quad.classList.add("none");
        calc.classList.remove("none");
        calc.classList.add("all")
        result.value = `Result = ${g} or ${h}`
        // i.value = `Result`
        // j.value = `${g}`
        // k.value = `${h}`
      }
      else{
        let num1 = document.getElementById("res").value;
        let num2 = eval(num1);
        document.getElementById("res").value = num2;
      }
    }else{
      result.value = ""
    }
}
function Clear(){
  var inp = document.getElementById("res");
  inp.value = "";
}
function Back(){
  let back = document.getElementById("res");
  back.value = back.value.slice(0,-1)
}