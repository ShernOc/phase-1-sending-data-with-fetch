// Add your code here
document.addEventListener('DOMContentLoaded',(event)=>{
    
function submitData(name,email){
    fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json',
            'Accept':'application/json'},
        body:JSON.stringify({
            name:name = 'sherlyne',
            email:email = 'SHERLYNE'
        })
    })
    .then(res=>res.json())
    .then(users=>{
        const div = document.createElement('div');
        div.className = 'div1';
        div.textContent = `Id:${users.id}`;
        document.body.appendChild(div);
       
    })
    .catch(error=>{
        if (users.id <= 10){
            data.remove(); 
        }else{
            const p = document.createElement('p');
            p.textContent = `Error:${error.message}`;
            document.body.appendChild(p); 
        }
            
        })

}

submitData();

})

