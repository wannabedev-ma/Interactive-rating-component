let rating1 = document.querySelector('#one')
let rating2 = document.querySelector('#two')
let rating3 = document.querySelector('#three')
let rating4 = document.querySelector('#four')
let rating5 = document.querySelector('#five')

let ratings = [rating1,rating2,rating3,rating4,rating5]

function getRating (){
    for (let rating of ratings) {
        rating.addEventListener('focus',()=>{
            document.querySelector('.num').textContent = rating.value
    
        })
    }
}

document.querySelector('#submit').addEventListener('click',()=>{
    document.querySelector('.back').classList.add('not-active')
    document.querySelector('.front').classList.remove('not-active')
    
})

getRating()




