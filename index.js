function btnPress() {
    var btn = document.getElementById("sendBtn")
    btn.style.opacity = 0.5;
    setTimeout(function() {
        btn.style.opacity = 1;
    }, 100);
};

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_30ebsn8";
    const templateID = "template_juao5mn";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        alert("Sikeresen elküldve. További szép napot!");
    })
    .catch((err) => console.log(err));
}