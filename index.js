// let myLeads = `["Pankaj"]`
// myLeads=JSON.parse(myLeads) //string to array
// myLeads.push("Patil")
// console.log(myLeads)

// let myLeads = ["Pankaj"]
// myLeads=JSON.stringify(myLeads) //conversion into string
// console.log(typeof myLeads)

let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsfromLocalStorage) {
    myLeads = leadsfromLocalStorage
    renderlead()
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderlead()
    })
})



deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderlead()
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderlead()
})

function renderlead() {
    let listitem = "";

    // for (let i = 0; i < myLeads.length; ++i) {
    //         ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //     }
    for (let i = 0; i < myLeads.length; ++i) {
        // listitem += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] + "</a></li>"
        listitem += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listitem
}
