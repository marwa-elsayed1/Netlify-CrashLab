
const form = document.getElementById('contact-form');


function emailSend() {
    fetch("https://ksalab.runasp.net/SendMail", {
        // fetch("http://localhost:3000/sendEmail", {
        // fetch("https://ksa-crashlab-mailer-new-production.up.railway.app/sendEmail", {


        method: "GET",
        body: JSON.stringify({
            "name": document.getElementById('username').value,
            "email": document.getElementById('useremail').value,
            "subject": document.getElementById('usersub').value,
            "message": document.getElementById('usermsg').value,
        }),

        headers: {
            "Content-type": "application/json",
        },
        // mode: 'no-cors',
        // headers: {
        // 'Access-Control-Allow-Origin': '*'
        // }
    })
        .then(response => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log("hello")
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
