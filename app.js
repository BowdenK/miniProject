let keySlot = document.getElementById("key")
let codeSlot = document.getElementById("code")
let valueSlot = document.getElementById("value")
let whichSlot = document.getElementById("which")


document.addEventListener('keyup', (event) => {
    let name = event.key;
    let code = event.code;
    let value = event.key.charCodeAt(0)
    let which = event.which;

    keySlot.textContent = name;
    codeSlot.textContent = code;
    valueSlot.textContent = value;
    whichSlot.textContent = which;

    console.log(`Key pressed: ${name} \r\n Key code value: ${code}`);
}, false)


