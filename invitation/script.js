function RSVP() {
    // You can customize this function to handle the RSVP process
    const name = prompt("Please enter your name:");
    if (name) {
        const email = prompt("Please enter your email:");
        if (email) {
            alert(`Thank you ${name}! Your RSVP has been received.\nWe'll send more details to ${email}`);
            // Here you can add code to send the RSVP data to a server
        }
    }
}