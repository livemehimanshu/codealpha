function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;

    if (birthdate) {
        var birthDateObj = new Date(birthdate);

        var currentDate = new Date();

        var age = currentDate.getFullYear() - birthDateObj.getFullYear();

        if (
            currentDate.getMonth() < birthDateObj.getMonth() ||
            (currentDate.getMonth() === birthDateObj.getMonth() &&
                currentDate.getDate() < birthDateObj.getDate())
        ) {
            age--;
        }

        document.getElementById("result").innerHTML =
            "<p>Your age is: " + age + " years</p>";
    } else {
        document.getElementById("result").innerHTML =
            "<p>Please enter a valid birthdate</p>";
    }
}