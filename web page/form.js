const form = document.querySelectorById("form");
const FullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){

const bodyMessage =`Full Name: ${FullName.value}<br> Email: ${email.value}<br> phone: ${phone.value}<br> message: ${mess.value}`;
    Email.send({
      SecureToken :"" ,
        Host : "",
        Username : "",
        Password : "",
        To : '',                  //smtpjs.com
        From : "",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!", //sweetAlert2.com
                icon: "success"
              });  
        }
        
      }
    );
}


form.addEventListener("submit", (e) => {
     e.preventDefault();
  
if (!FullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error"));
   { sendEmail();


    form.reset();
     return false;
   }
});