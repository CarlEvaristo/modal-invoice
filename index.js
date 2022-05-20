const tasks = {
    "wash-car": {
        name:"Wash Car",
        price:10
        },
    "mow-lawn": {
        name:"Mow Lawn",
        price:20
        },
    "pull-weeds": {
        name:"Pull Weeds",
        price:30
        }
}

let tasksDone = []
let priceList = []

const taskListEl = document.getElementById("task-list")
const priceListEl = document.getElementById("price-list")
const customBtns = document.getElementsByClassName("task-btn")

const acceptText = document.getElementById("we-accept-text")
const totalAmount = document.getElementById("total-amount")
const invoiceBtn = document.getElementById("invoice-btn")

invoiceBtn.addEventListener("click", function(){
    console.log(invoiceBtn.id)
    location.reload();
})

for (let i=0; i<customBtns.length; i++) {
    customBtns[i].addEventListener("click", function(){
        let taskId = customBtns[i].id
        if (!tasksDone.includes(taskId)) {
            tasksDone.push(taskId)
            priceList.push(tasks[taskId].price)
            acceptText.style.visibility = "visible"
            customBtns[i].style.display = "none"
            renderTaskList()
        }
    })
}

function renderTaskList() {
    taskListEl.textContent = ""
    priceListEl.textContent = ""
    console.log(tasksDone)
    for (let i = 0; i < tasksDone.length;i++) {
        let listItem = document.createElement("li")
        let newTask = document.createElement("p")
        let taskId = tasksDone[i]
        let taskName = tasks[taskId].name
        newTask.textContent = taskName 
        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove"
        removeBtn.setAttribute("class", "remove-btn")
        removeBtn.onclick = function() {
            tasksDone.splice(i, 1)
            priceList.splice(i, 1)
            let addButton = document.getElementById(taskId)
            addButton.style.display = "inline"
            renderTaskList()}
        
        taskListEl.append(listItem)
        listItem.append(newTask)
        listItem.append(removeBtn)

        let newPrice = document.createElement("li")
        newPrice.innerHTML = `<p><span class="dollar-sign">$ </span>${priceList[i]}</p>`
        priceListEl.append(newPrice)
    }

    let totalPrice = 0

    if (priceList.length >= 1) {
        totalPrice = priceList.reduce(function(previousVal, currentVal) {return previousVal + currentVal})
    } else {
        location.reload()
    }

    totalAmount.textContent = "$ " + totalPrice
    totalAmount.style.color = "#4A4E74"
}


// MODAL CODE!!!!!!!!
const overlay = document.getElementById("overlay") 
const openButton = document.getElementById("open-modal")


openButton.addEventListener("click", function() {  
    overlay.style.display = "inline" 
})
