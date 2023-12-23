document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://4gasq9c7r7.execute-api.us-east-1.amazonaws.com/Beta/carDefault';

    document.getElementById('submitIcon').addEventListener('click', function(event) {
        event.preventDefault();

        const email = document.getElementById('emailInput').value;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => {
            if (response.ok) {
                console.log('Subscription successful!');
                // Add success message or redirect the user
            } else {
                console.error('Subscription failed!');
                // Handle error - display error message, etc.
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any network-related errors
        });
    });
});
