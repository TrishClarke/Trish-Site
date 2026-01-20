// Autofill contact form subject from URL parameters
// Used when "Enquire" buttons on Sales page link to Contact page

document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');

    // If subject parameter exists, autofill the subject field
    if (subject) {
        const subjectField = document.getElementById('subject');
        if (subjectField) {
            subjectField.value = decodeURIComponent(subject);
            // Optionally scroll to the form
            subjectField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});
