//ACCORDION

var width = window.innerWidth
 
if(width < 900){
    var panel = document.getElementById('panel').addEventListener('click',()=>{
        var lista = document.getElementById('list')
        var arrow = document.getElementById('arrow')
        if(lista.style.display === 'block'){
            lista.style.display = 'none'
            arrow.style.transform = 'rotate(0deg)'
        }else{
            lista.style.display = 'block'
            arrow.style.transform = 'rotate(180deg)'
        }
    })
    var panel1 = document.getElementById('panel1').addEventListener('click',()=>{
        var lista1 = document.getElementById('list1')
        var arrow1 = document.getElementById('arrow1')
        if(lista1.style.display === 'block'){
            lista1.style.display = 'none'
            arrow1.style.transform = 'rotate(0deg)'
        }else{
            lista1.style.display = 'block'
            arrow1.style.transform = 'rotate(180deg)'
        }
    })
    var panel2 = document.getElementById('panel2').addEventListener('click',()=>{
        var lista2 = document.getElementById('list2')
        var arrow2 = document.getElementById('arrow2')
        if(lista2.style.display === 'block'){
            lista2.style.display = 'none'
            arrow2.style.transform = 'rotate(0deg)'
        }else{
            lista2.style.display = 'block'
            arrow2.style.transform = 'rotate(180deg)'
        }
    })
    var panel3 = document.getElementById('panel3').addEventListener('click',()=>{
        var lista3 = document.getElementById('list3')
        var arrow3 = document.getElementById('arrow3')
        if(lista3.style.display === 'block'){
            lista3.style.display = 'none'
            arrow3.style.transform = 'rotate(0deg)'
        }else{
            lista3.style.display = 'block'
            arrow3.style.transform = 'rotate(180deg)'
        }
    })
}else{
    panel.addEventListener('click',()=>{})
    panel1.addEventListener('click',()=>{})
    panel2.addEventListener('click',()=>{})
    panel3.addEventListener('click',()=>{})
}


    

