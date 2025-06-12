
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contactForm');
//     const submitBtn = document.getElementById('submitBtn');

//     if (contactForm) {
//         contactForm.addEventListener('submit', function(event) {
//             event.preventDefault();
            
//             const nameInput = contactForm.querySelector('input[name="name"]');
//             const emailInput = contactForm.querySelector('input[name="email"]');
//             const messageInput = contactForm.querySelector('textarea[name="message"]');
//             let isValid = true;
//             let firstErrorField = null;

//             clearErrors();

//             // Name validation
//             if (nameInput.value.trim() === '') {
//                 isValid = false;
//                 showError(nameInput, 'Name is required.');
//                 if (!firstErrorField) firstErrorField = nameInput;
//             }

//             // Email validation
//             if (emailInput.value.trim() === '') {
//                 isValid = false;
//                 showError(emailInput, 'Email is required.');
//                 if (!firstErrorField) firstErrorField = emailInput;
//             } else if (!isValidEmail(emailInput.value.trim())) {
//                 isValid = false;
//                 showError(emailInput, 'Please enter a valid email address.');
//                 if (!firstErrorField) firstErrorField = emailInput;
//             }

//             // Message validation
//             if (messageInput.value.trim() === '') {
//                 isValid = false;
//                 showError(messageInput, 'Message is required.');
//                 if (!firstErrorField) firstErrorField = messageInput;
//             }

//             if (!isValid) {
//                 if (firstErrorField) {
//                     firstErrorField.focus();
//                 }
//             } else {
//                 // Show loading state
//                 submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
//                 submitBtn.disabled = true;

//                 // Simulate AJAX submission (replace with actual fetch call)
//                 setTimeout(() => {
//                     // On success
//                     contactForm.innerHTML = `
//                         <div class="success-message">
//                             <h3>Thank you for your message!</h3>
//                             <p>We'll get back to you soon.</p>
//                         </div>
//                     `;
//                 }, 1500);

//                 // Actual fetch implementation would look like:
//                 /*
//                 const formData = new FormData(contactForm);
                
//                 fetch('your-server-endpoint', {
//                     method: 'POST',
//                     body: formData
//                 })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.success) {
//                         contactForm.innerHTML = `
//                             <div class="success-message">
//                                 <h3>Thank you for your message!</h3>
//                                 <p>We'll get back to you soon.</p>
//                             </div>
//                         `;
//                     } else {
//                         submitBtn.innerHTML = 'Submit';
//                         submitBtn.disabled = false;
//                         showError(contactForm, data.message || 'Submission failed');
//                     }
//                 })
//                 .catch(error => {
//                     submitBtn.innerHTML = 'Submit';
//                     submitBtn.disabled = false;
//                     showError(contactForm, 'Network error. Please try again.');
//                 });
//                 */
//             }
//         });
//     }

//     function isValidEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     function showError(inputElement, message) {
//         inputElement.classList.add('error');
//         const errorElement = document.createElement('span');
//         errorElement.className = 'error-message';
//         errorElement.textContent = message;
//         inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
//     }

//     function clearErrors() {
//         // Remove error messages
//         const errorMessages = document.querySelectorAll('.error-message');
//         errorMessages.forEach(msg => msg.remove());
        
//         // Remove error classes
//         const errorInputs = document.querySelectorAll('.error');
//         errorInputs.forEach(input => input.classList.remove('error'));
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Contact form validation
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values
//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const message = document.getElementById('message').value.trim();
            
//             // Simple validation
//             if (!name || !email || !message) {
//                 alert('Please fill in all required fields');
//                 return;
//             }
            
//             // Email validation
//             if (!validateEmail(email)) {
//                 alert('Please enter a valid email address');
//                 return;
//             }
            
//             // Form submission (in a real app, you would send this to a server)
//             // alert('Thank you for your message! We will contact you soon.');
//             // contactForm.reset();
             

//             setTimeout(() => {
//                     // On success
//                     contactForm.innerHTML = `
//                         <div class="success-message">
//                             <h3>Thank you for your message!</h3>
//                             <p>We'll get back to you soon.</p>
//                         </div>
//                     `;
//                 }, 1500);


//         });
//     }
    
//     // Email validation function
//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }
// });













// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');

//     if (contactForm) {
//         contactForm.addEventListener('submit', function (e) {
//             e.preventDefault();

//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const service = document.getElementById('service').value;
//             const message = document.getElementById('message').value.trim();

//             if (!name || !email || !message) {
//                 alert('Please fill in all required fields.');
//                 return;
//             }

//             if (!validateEmail(email)) {
//                 alert('Please enter a valid email address.');
//                 return;
//             }

//             // Store form data in localStorage
//             const formData = {
//                 name,
//                 email,
//                 service,
//                 message
//             };

//             const entryKey = "contact_" + new Date().getTime();
//             localStorage.setItem(entryKey, JSON.stringify(formData));

//             // Show thank you message
//             contactForm.innerHTML = `
//                 <div class="success-message">
//                     <h3>Thank you for your message!</h3>
//                     <p>Your data has been saved in the browser.</p>
//                     <button onclick="viewStoredContacts()">View Saved Messages</button>
//                     <div id="savedContacts"></div>
//                 </div>
//             `;
//         });
//     }

//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }
// });

// // Function to display saved contacts
// function viewStoredContacts() {
//     const container = document.getElementById('savedContacts');
//     container.innerHTML = "<h3>Saved Messages:</h3>";

//     let found = false;

//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);

//         if (key.startsWith("contact_")) {
//             const data = JSON.parse(localStorage.getItem(key));
//             found = true;

//             const entry = document.createElement('div');
//             entry.style = "margin:10px 0; padding:10px; border:1px solid #ccc;";
//             entry.innerHTML = `
//                 <strong>Name:</strong> ${data.name}<br>
//                 <strong>Email:</strong> ${data.email}<br>
//                 <strong>Service:</strong> ${data.service}<br>
//                 <strong>Message:</strong> ${data.message}
//             `;
//             container.appendChild(entry);
//         }
//     }

//     if (!found) {
//         container.innerHTML += "<p>No saved messages found.</p>";
//     }
// }







// function clearEmail() {
//     document.getElementById('email').value = ''; // Clears the email field
// }














document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            // Only validate email if it's provided
            if (email && !validateEmail(email)) {
                alert('Please enter a valid email address or leave the field empty.');
                return;
            }

            if (!name || !message) {
                alert('Please fill in all required fields (Name and Message).');
                return;
            }

            // Store form data in localStorage
            const formData = {
                name,
                email: email || "Not provided", // Store "Not provided" if email is empty
                service,
                message
            };

            const entryKey = "contact_" + new Date().getTime();
            localStorage.setItem(entryKey, JSON.stringify(formData));

            // Show thank you message
            // contactForm.innerHTML = `
            //     <div class="success-message">
            //         <h3>Thank you for your message!</h3>
            //         <p>Your data has been saved in the browser.</p>
            //         <button onclick="viewStoredContacts()">View Saved Messages</button>
            //         <div id="savedContacts"></div>
            //     </div>


            contactForm.innerHTML = `
    <div class="success-message">
        <h3>Thank you for your message!</h3>
        <p>Your data has been saved in the browser.</p>
        <button onclick="viewStoredContacts()">View Saved Messages</button>
        <button onclick='downloadFormData(${JSON.stringify(JSON.stringify(formData))})'>Download as File</button>
        <div id="savedContacts"></div>
    </div>








                
            `;
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Function to display saved contacts
function viewStoredContacts() {
    const container = document.getElementById('savedContacts');
    container.innerHTML = "<h3>Saved Messages:</h3>";

    let found = false;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("contact_")) {
            const data = JSON.parse(localStorage.getItem(key));
            found = true;

            const entry = document.createElement('div');
            entry.style = "margin:10px 0; padding:10px; border:1px solid #ccc;";
            entry.innerHTML = `
                <strong>Name:</strong> ${data.name}<br>
                <strong>Email:</strong> ${data.email}<br>
                <strong>Service:</strong> ${data.service}<br>
                <strong>Message:</strong> ${data.message}
            `;
            container.appendChild(entry);
        }
    }

    if (!found) {
        container.innerHTML += "<p>No saved messages found.</p>";
    }
}

function clearEmail() {
    document.getElementById('email').value = ''; // Clears the email field
}


// Live Chat Button Functionality
document.querySelector('.chat-btn').addEventListener('click', function() {
    // Replace with actual chat implementation
    alert('Connecting you to our support team...');
    
    // For actual implementation you might use:
    // - A chat widget (LiveChat, Intercom, etc.)
    // - A modal popup
    // - Direct link to WhatsApp/other messaging
});








// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease';
    observer.observe(item);
});








function downloadFormData(dataString) {
    const data = JSON.parse(dataString);
    const text = `Name: ${data.name}
Email: ${data.email}
Service: ${data.service}
Message: ${data.message}
-------------------------`;

    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "contactData.txt";
    a.click();
    URL.revokeObjectURL(a.href);
}