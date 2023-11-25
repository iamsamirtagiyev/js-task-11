const container = document.querySelector(".container")
const eye = document.querySelector(".eyes")
const items = document.querySelectorAll(".item img")
const btn = document.querySelector("button")

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        container.style.background = item.className
        item.style.filter = 'saturate(1)'
        eye.innerHTML = `<img class="red" src="${item.src}">`
        btn.innerText = 'Thanks for feedback'
        items.forEach((item2, index2) => {
            if (index2 != index) {
                item2.parentElement.style.display = 'none'
            }
        })
    })
})