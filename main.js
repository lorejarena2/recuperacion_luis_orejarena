let ingresar=document.getElementById('ingresar')
const usuario=document.getElementById('usuario')
const pass=document.getElementById('pass')
const msg=document.getElementById('msg')
let personas=''


 async function obtener(){
    let url=await fetch("https://jsonplaceholder.typicode.com/users")
    const respuesta=await url.json()
    console.log(respuesta)
    localStorage.setItem('usuarios',JSON.stringify(respuesta))
    ingresar.addEventListener('click',(e)=>{
        e.preventDefault()
        if(respuesta.find(respuesta=>respuesta.username==usuario.value)){
            indice=respuesta.findIndex(respuesta=>respuesta.username==usuario.value)
         if(respuesta[indice].email==pass.value){
            usuario.value=""
            pass.value=""
            location.href="./welcome.html"
        }
         else{
             mostrar_error()
         }
        }else{
            mostrar_error()
        }
        })
     
 }

 obtener()

 function mostrar_error(){
    msg.style.display="block";
    setTimeout(()=>{
    msg.style.display="none";
    },1000)
}


