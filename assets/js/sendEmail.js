function sendMail(contactForm) {
    emailjs.send('default_service', 'template_g85537g',{
        'from_name': contactForm.name.value, 
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value
})
.then(
    function(response) {
        console.log('success', response);
    },
    function(error) {
        console.log('error', error);
    });
    return false;
}