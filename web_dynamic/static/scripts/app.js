const form = document.querySelector(".loginForm");
// if the form exists, run the class
console.log(form);
if (form) {
    // setup the fields we want to validate, we only have two but you can add others
    const fields = ["username", "password"];
    // run the class
    const validator = new Login(form, fields);
}