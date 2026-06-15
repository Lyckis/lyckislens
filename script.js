// Enkel JavaScript för mobilmeny och framtida mätning.
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('active');menuToggle.setAttribute('aria-expanded',isOpen?'true':'false');});}
const forms=document.querySelectorAll('form[data-form-type]');
forms.forEach((form)=>{form.addEventListener('submit',()=>{const formType=form.getAttribute('data-form-type');console.log('Formulär skickat:',formType);/* Framtida GA4: gtag('event','generate_lead',{form_type:formType}); */});});
