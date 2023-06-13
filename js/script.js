// كل المنتجات
var products=document.querySelectorAll(".card-body h3") 
// المشتريات
var purchases=document.querySelector("#num")
var num=0
// السعر الكلي
var total=document.querySelector("#total")
var total1=0


products.forEach(function(btn){
    btn.onclick =function(){
        purchases.innerHTML = ++num
        total1 += +(btn.getAttribute("price"))
        total.innerHTML = total1+" $"
    
    }  
})








