function UpdateTotalPrice(){
    const price = document.getElementsByClassName('full-price')
    let sum =0;
    for (let i = 0; i < price.length; i++) {
        sum += parseInt(price[i].innerHTML)
    }
    let PRIX_Total = document.getElementsByClassName('total')[0]
    PRIX_Total.innerHTML = sum
}

//plus btn
let btnPlus = document.getElementsByClassName('qt-plus')
for (let i =0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(e){
        let qt = e.target.previousElementSibling
        //console.log(qte)
        qt.innerHTML = +(qt.innerHTML) +1
        //console.log(qte.innerHTML);
        const PRIX_UNITAIRE = e.target.nextElementSibling.nextElementSibling
        let prix = e.target.nextElementSibling
        prix.innerHTML = parseInt(PRIX_UNITAIRE.innerHTML) * parseInt(qt.innerHTML) 
        UpdateTotalPrice()
        
    })
}

//minus btn
let sustractionbtn = document.getElementsByClassName('qt-minus')
for (let i =0;i<sustractionbtn.length;i++){
    sustractionbtn[i].addEventListener('click',function(e){
        let qt = e.target.nextElementSibling
        //console.log(qte)
        if (qt.innerHTML>0){
            qt.innerHTML = +(qt.innerHTML) -1
        }
        //console.log(qte.innerHTML);
        const PRIX_UNITAIRE = e.target.nextElementSibling
        let prix = e.target.nextElementSibling.nextElementSibling.nextElementSibling
        prix.innerHTML = +(PRIX_UNITAIRE.innerHTML) * parseInt(qt.innerHTML) 
        UpdateTotalPrice()
        
    })
}

//like btn -- toggle
var heartBtn = document.getElementsByClassName('fa-heart')
for (let el of heartBtn ) {
    el.addEventListener('click',function(e){
        e.target.classList.toggle('red')
    })
}

//remove Item
let deleteBtn = document.getElementsByClassName('delete-btn')
for (let heart of deleteBtn) {
    heart.addEventListener('click',function(e){
       e.target.parentElement.remove()
       UpdateTotalPrice()
    })
   
}

//like btn -- toggle
var heartBtn = document.getElementsByClassName('fa-heart')
for (let el of heartBtn ) {
    el.addEventListener('click',function(e){
        //e.target.classList.toggle("red")
        if(e.target.style.color==='black'){
            return e.target.style.color = 'red'
        }
        else {
            e.target.style.color = 'red' 
        }
        
    })
}