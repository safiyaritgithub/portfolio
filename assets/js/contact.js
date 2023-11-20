const form = document.querySelector('.contact__form');

const sendMail = (mail) => {
    //1.
    fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
      method: "post", //2.
      body: mail, //3.
    }).then((response) => {
      return response.json();
    });
};
  

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let mail = new FormData(form);
    sendMail(mail);
})