
const button1=document.getElementById('buttonJoke');
button1.addEventListener('click',()=>{
    fetch('http://localhost:3000/noris').then((response)=>{
        response.json().then((data)=>{
            let paragraph=document.querySelector('p');
            paragraph.innerText=data.joke
        })
        
        
        });
        
        
    
})



