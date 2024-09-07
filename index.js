function btnPress() {
    var btn = document.getElementById("sendBtn")
    btn.style.opacity = 0.5;
    setTimeout(function () {
        btn.style.opacity = 1;
    }, 100);
};

function openNav() {
    const button = document.getElementById('openBtn');
    const header = document.querySelector('.main-header'); // Use querySelector to get the first element

    if (button.innerHTML === '☰') {
        button.style.transform = 'rotate(180deg)';
        button.innerHTML = '×'; // Change to "X"
        button.style.fontSize = '28pt'; // Slightly increase the size for emphasis
        header.style.width = '250px'; // Expand the header
    } else {
        button.style.transform = 'rotate(0deg)';
        button.innerHTML = '☰'; // Change back to hamburger menu
        button.style.fontSize = '25pt'; // Reset size
        header.style.width = '0'; // Collapse the header
    }
}


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone-number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_30ebsn8";
    const templateID = "template_juao5mn";

    

    if (subject.value == "") {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("subject").style.border = " 3px solid red"
    } else {
        emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone-number").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            document.getElementById("error-message").style.display = "none";
            document.getElementById("subject").style.border = " 1px solid black"
            alert("Sikeresen elküldve. További szép napot!");
        })
            .catch((err) => console.log(err));
    }
}