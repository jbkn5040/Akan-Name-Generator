
document.getElementById('birthForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;




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
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}
