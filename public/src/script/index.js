
const button1=document.getElementById('buttonJoke');
button1.addEventListener('click',()=>{
    fetch('/noris').then((response)=>{
        response.json().then((data)=>{
            let paragraph=document.querySelector('p');
            paragraph.innerText=data.joke
        })
        
        
        });
        
        
    
})



