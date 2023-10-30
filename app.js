let keySlot = document.getElementById("key")
let codeSlot = document.getElementById("code")
let valueSlot = document.getElementById("value")


document.addEventListener('keyup', (event) => {
    let name = event.key;
    let code = event.code;
    let value = event.key.charCodeAt(0)

    keySlot.textContent = name;
    codeSlot.textContent = code;
    valueSlot.textContent = value;

    console.log(`Key pressed: ${name} \r\n Key code value: ${code}`);
}, false)


