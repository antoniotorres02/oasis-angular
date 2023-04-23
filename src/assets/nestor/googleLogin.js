import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './FirebaseAuth.js'
import { showToast } from './Toastify.js'


const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async(e) => {

    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));

        showToast('Bienvenido:  '+credentials.user.displayName ,'sucess')

    } catch(error) {
        console.log(error)
    }
});