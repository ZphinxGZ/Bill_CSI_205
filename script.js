let data = {
    naemAndLastname : "นายใจดำ จริงจริงนะ",
    addresses: "20/2 ซอยหนองมะเขือ 4 แยก 3 ถนนน้ำพริกปลาทู",

}

window.addEventListener("DOMContentLoaded", () =>{
    console.log("Hello, World!");

    // หรือ
    // const p = document.getElementById("naemAndLastname")
    // p.innerText = data.naemAndLastname

    document.getElementById("name-and-lastname").innerText = data.naemAndLastname

    document.getElementById("addresses").innerText = data.addresses

    // let addrStr = ""
    // for (let i = 0; i < data.addresses.length; i++) {
    //     addrStr += data.addresses[i] + "<br>"
    // }

    // data.addresses.forEach((address) => {
    //     addrStr += address + '<br>'
    // });

    let tableStr = ''
    data.items.array.forEach((item) => {
        tableStr += `<tr><td>${item.name}</td><td>${item.price}</td></tr>`
    });
})