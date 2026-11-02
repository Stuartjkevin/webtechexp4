// Name: Stuart J | Reg No: URK24CS1020

// Show a message when the Download Now link is clicked.
const downloadButton = document.getElementById("downloadBtn");

downloadButton.addEventListener("click", function () {
    alert("Thanks for your interest in AppX! The app download will be available soon.");
});

// Handle the early-access waitlist form.
const waitlistForm = document.getElementById("waitlistForm");
const formMessage = document.getElementById("formMessage");

waitlistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!waitlistForm.checkValidity()) {
        waitlistForm.reportValidity();
        return;
    }

    const name = document.getElementById("userName").value.trim();
    formMessage.textContent = `Thank you, ${name}! You have joined the AppX waitlist.`;
    waitlistForm.reset();
});
