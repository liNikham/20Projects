const panels=document.querySelectorAll('.images')
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveclasses();
        panel.classList.add('active');
    })
})
function removeActiveclasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active'); 
    })
}