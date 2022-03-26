var date = new Date();
const day = date.getDay()
const week = ["Monday", "Tuesday","Wednesday","Thurday","Friday","Saturday","Sunday"]

const dayp = document.querySelector('.day')
dayp.innerHTML = week[day-1]

let dat = date.toDateString()
const datep = document.querySelector('.date')
dat = dat.slice(3,dat.length);
datep.innerHTML = dat

const newtask = document.getElementById('addtask')
newtask.addEventListener("keyup", function(event) {
    if (event.key == "Enter" ){
        addtask()
    }
});

const submit = document.querySelector('#submit')
submit.addEventListener('click' || 'keyup',addtask)

function addtask() {
    if(newtask.value == ""){
        return
    }

    const tasks = document.querySelector('.tasks')

    const task = document.createElement("div")
    const text = document.createElement("p")
    const done = document.createElement("i")
    const cross = document.createElement("i")

    task.setAttribute("class","task")
    text.setAttribute("class","tasktext")
    done.setAttribute("class","fa-solid fa-circle-check")
    cross.setAttribute("class","fa-solid fa-trash")

    cross.addEventListener('click',function(){
        task.remove()   
    })

    done.addEventListener('click',function(){
        task.insertAdjacentElement('afterbegin', done)
        done.style.color = "#adff2f";
        text.style.color = "#adff2f";
    })

    text.innerHTML = newtask.value

    tasks.appendChild(task)
    task.appendChild(text)
    task.appendChild(done)
    task.appendChild(cross)
    newtask.value = ""
}