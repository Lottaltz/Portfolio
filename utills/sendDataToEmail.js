function sendEmail(){
const contactForm = document.querySelector('#form-contact')
const submitBtn = document.querySelector('.submit-btn')
const fullname = document.querySelector('#fullname')
const emailInput = document.querySelector('#email')
const message = document.querySelector('#message')

// const publicKey = 'SaZ-Z93sbl8o83lLC'
const serviceID = 'service_kgpwb8e'
const templateID = 'template_ney9ohn'

// emailjs.init(publicKey);

    contactForm.addEventListener('submit' , e => {
        e.preventDefault();
        submitBtn.innerText = "Just A Moment..."
        const inputFields = {
            fullname: fullname.value ,
            email: emailInput.value,
            message: message.value
        }
        emailjs.send(serviceID, templateID, inputFields,publicKey).then(() => {
        submitBtn.innerText = "Message Sent Successfully!"
        fullname.value = "";
        emailInput.value = "";
        message.value = "";
        }, (error) => {
        console.log(error)
        submitBtn.innerText = "Something qwent wrong!"
        })
    })
}