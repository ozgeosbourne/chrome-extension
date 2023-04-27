// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //console.log(tabs[0].url)
    myLeads.push(tabs[0],url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
    })

})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

deleteBtn.addEventListener("dbclick", function () {
    //console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})


