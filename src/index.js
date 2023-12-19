// write your code here

fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
    for(let ramen of data) {
    renderRamen(ramen)
    }

})
let renderRamen = (ramenObject) => {

    let menu = document.getElementById('ramen-menu')
    
    let ramenImage = document.createElement('img')
    ramenImage.src = ramenObject.image

menu.append(ramenImage)

ramenImage.addEventListener('click', () => {
    ramenDetail(ramenObject)
})


}

let ramenDetail = (ramenObject) => {
    
    let menu = document.getElementById('ramen-detail')
    console.log(menu)

    let name = document.querySelector('.name')
    name.textContent = ramenObject.name

    let restaurant = document.querySelector('.restaurant')
    restaurant.textContent = ramenObject.restaurant

    let rating = document.getElementById('rating-display')
    rating.textContent = ramenObject.rating

    let comment = document.getElementById('comment-display')
    comment.textContent = ramenObject.comment
    
}


let form = document.getElementById('new-ramen')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let create = document.getElementsByTagName('new-comment')
    create.type = "Edit"
    // let menu = document.getElementById('ramen-menu')
    // console.log(menu)
    
    let newRamen = {
    
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: e.target["rating"].value,
        comment: e.target["new-comment"].value,
    
    }
    renderRamen(newRamen)
})

