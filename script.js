const scriptURL = 'https://script.google.com/macros/s/AKfycbyxmTMExSgCq_ca3mZTBpVDmwDTGc7xNN5tibZQleGEnwEyJNdZMUC1nevZ0lpIwpZc/exec';
const btn = document.getElementById('submit');

// This will tell us if the file is connected
console.log("Script connected to button:", btn);

btn.addEventListener('click', async () => {

    const payload = {
        fullName: document.getElementById('name').value,
        email: document.getElementById('email').value,
        insta: document.getElementById('insta').value,
        age: document.getElementById('age').value,
        yourGender: document.getElementById('genders').value,
        prefGender: document.getElementById('gender2').value,
        relationship: document.getElementById('relation').value,
        freeTime: document.getElementById('freetime').value,
        artists: document.getElementById('artists').value
    };

    if (!payload.fullName || !payload.email) {
        alert("Please fill out your name and email!");
        return;
    }

    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', 
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        alert("Success! Your match info has been sent.");
        btn.innerText = "Submit";
        btn.disabled = false;
        
    } catch (error) {
        console.error('Error!', error.message);
        alert("Something went wrong. Check the console.");
        btn.innerText = "Submit";
        btn.disabled = false;
    }
}); // End of event listener

