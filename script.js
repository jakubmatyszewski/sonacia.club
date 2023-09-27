document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const film = document.getElementById('film').value;
            const kto = document.getElementById('kto').value;
            
            // Send the data to Google Apps Script
            sendDataToGoogleSheet(film, kto);
        });
    });
    
    function sendDataToGoogleSheet(film, kto) {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyvwRsVaj2QqGRAGYOGnjtcsIZD8n28Y4unGG2MKKycu8sztEP6QTjBBJxvclTeN-3X/exec';
        
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `film=${encodeURIComponent(film)}&kto=${encodeURIComponent(kto)}`
        })
        .then(response => {
            // Display the success modal
            $('#successModal').modal('show');
            
            // Hide the success modal after 1 second (1000 milliseconds)
            setTimeout(function () {
                $('#successModal').modal('hide');
            }, 2000);
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    }
    