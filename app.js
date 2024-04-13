const leftBox = document.getElementById('leftBox');
const rightBox = document.getElementById('rightBox');
let lists = document.getElementsByClassName('list');
const checkLeftBox = document.getElementById('checkLeft');
const checkRightBox = document.getElementById('checkRight');


for(list of lists){
    list.addEventListener('dragstart', (e)=>{
       let target = e.target;
       
        rightBox.addEventListener('dragover', (e)=>{
            e.preventDefault()
        })
        rightBox.addEventListener('drop', (e)=>{
            if(target !== null){
                rightBox.appendChild(target);
                target = null;
            }
                
        })
        leftBox.addEventListener('dragover', (e)=>{
            e.preventDefault()
        })
        leftBox.addEventListener('drop', (e)=>{
            if(target !== null){
                leftBox.appendChild(target)
                target = null;
            }
           
        })
        
    })
}
checkLeftBox.addEventListener('click', ()=>{
    console.log("=================== LEFT BOX =============== " )
    for(box of leftBox.children){
        
        console.log(box)
        
    }
    console.log("=================== LEFT BOX =============== " )
})
checkRightBox.addEventListener('click', ()=>{
    if(rightBox.children.length != 0){
        console.log("=================== RIGHT BOX =============== " )
        for(box of rightBox.children){
            
            console.log(box)
            
        }
        console.log("=================== RIGHT BOX =============== " )
    }
})