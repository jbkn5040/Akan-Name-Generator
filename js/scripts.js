
document.getElementById('birthForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;



    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];



    const dayOfWeek = birthdate.getDay();



    let akanName;
    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }


    const resultMessage = `You were born on a ${getDayName(dayOfWeek)} and your Akan name is ${akanName}.`;
    document.getElementById('result').textContent = resultMessage;
});


function getDayName(dayIndex) {

    return days[dayIndex];
}
