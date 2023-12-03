function updateDateTime() {
    const currentDateTime = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Jakarta'
    };
    const formattedDateTime = currentDateTime.toLocaleDateString('id-ID', options);
    document.getElementById('dateTime').textContent = formattedDateTime + ' WIB';
}

updateDateTime();
setInterval(updateDateTime, 1000);