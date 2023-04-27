import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './FirebaseAuth.js'

const user = document.getElementById("user");
const email = document.getElementById("e-mail");
const pwd = document.getElementById("pwd");
const rpwd = document.getElementById("rpwd");
const form = document.getElementById("form");
var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;
let ready=0;
form.addEventListener("submit", async(e) => {
    if(pwd.value.match(passw)){
        ready=1;
        pwd.classList.remove("is-invalid");
    } else {
        e.preventDefault();
        ready=0;
        pwd.classList.add("is-invalid");}

    if (pwd.value !== rpwd.value) {
        rpwd.classList.add("is-invalid");
        e.preventDefault();
    } else {
        console.log(ready)
        if(ready==1){
            try{
                const userCredentials = await createUserWithEmailAndPassword(auth, email.value, pwd.value);
                alert('Bienvenido:  '+user.value,'sucess')
            } catch(error){
                console.log(error.message);
                console.log(error.code);

                if(error.code === 'auth/email-already-in-use'){
                    alert('El email ya está en uso','error')
                } else if (error.code === 'auth/invalid-email'){
                    alert('El email no es válido','error')
                }
            }
        }
    }


});
