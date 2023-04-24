import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './FirebaseAuth.js'

signInForm.addEventListener("submit", async e => {
    console.log("asdhashdashd")
    e.preventDefault()

    const email = document.getElementById("e-mail");
    const password = document.getElementById("pwd");

    try {
        const credentials = await signInWithEmailAndPassword(auth, email.value, password.value)
      alert('Bienvenido:  '+email.value,'sucess')
        console.log(credentials)
    } catch (error) {
        console.log("test")
        if (error.code === "auth/wrong-password") {
          alert('La contraseña no coincide', 'error')
        } else if (error.code === 'auth/user-not-found') {
          alert('No se encuentra el usuario', 'error')
        } else if (error.code === 'auth/too-many-requests') {
          alert('Demasiados intentos, intentelo más tarde', 'error')
        }
    }

});

