const user=document.getElementById("user")

// edit
const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const phoneInput = document.getElementById("phone")
const emailInput = document.getElementById("email")

let cards = []

fetch("https://dummyjson.com/users")
.then(res => res.json())
.then(data => {

    cards = data.users.slice(0,6)

    cards.forEach((item,i) =>{
        createCard(item,i)
    })
})

function createCard(item,i){

    const div = document.createElement("div")
    div.className="divs"

    div.innerHTML=`
        <img src="${item.image}" alt="img">
        <div class="flex">
            <h3 class="user__name">${item.lastName}</h3>
            <abbr class="user__age">${item.age}</abbr>
        </div>
        <p class="user__phone">${item.phone}</p>
        <p class="user__email">${item.email}</p>

        <div class="btn__box">
            <button class="edit" onclick="editCard(${i})">Edit</button>
            <button class="delete" onclick="deleteCard(this)">Delete</button>
        </div>
    `

    user.appendChild(div)
}




// edit 

function editCard(indexx){

    editIndex = indexx

    data = cards[indexx]

    nameInput.value = data.lastName
    ageInput.value = data.age
    phoneInput.value = data.phone
    emailInput.value = data.email
}



// edit save

function saveEdit(){

    if(editIndex == -1) return 

    cards[editIndex].lastName = nameInput.value
    cards[editIndex].age = ageInput.value
    cards[editIndex].phone = phoneInput.value
    cards[editIndex].email = emailInput.value

    user.innerHTML = ""

    cards.forEach((item,i) =>{
        createCard(item,i)
    })

    nameInput.value = ""
    ageInput.value = ""
    phoneInput.value = ""
    emailInput.value = ""

    editIndex = -1
}



function deleteCard(btn){
    const card = btn.closest(".divs")
    card.remove()
}