const alpha   = [...'abcdefghijklmnopqrstuvwxyz'];
const alpha_upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const digits  = [...'0123456789'];
const symbols = [...'!@#$%&*-_=+[]{}.<>/?'];

const generate = document.getElementById("generate");
const senha = document.getElementById("senha");
const del = document.getElementById("close");
const popup = document.getElementById("pop-up");


function generator(length, has_upper, has_nums, has_symbols){
    let source = [];
    let senha = '';

    source.push(...alpha)

    if(has_upper){
        source.push(...alpha_upper)
    }
    if(has_nums){
        source.push(...digits)
    }
    if(has_symbols){
        source.push(...symbols)
    }

    for(let i = 0; i<length;i++){
        let c = source[Math.floor(Math.random() * source.length)];
        senha += c
    }

    return senha;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

senha.onclick = function e (){
  copyText(senha.textContent);
  popup.classList.add("visible");
  popup.classList.remove("invisible");

}
''
del.onclick = function f (){
  popup.classList.remove("visible");
  popup.classList.add("invisible");
}

generate.onclick = function e(){

    
    const length = document.getElementById("length");
    const upper = document.getElementById("upper");
    const nums = document.getElementById("nums");
    const symb = document.getElementById("symb");

    aux = generator(length.value, upper.checked, nums.checked, symb.checked);

    senha.textContent = aux;

    
}