function findUserAge() {
    const date = new Date();
    const getUserdob = document.getElementById('userdob').value;

    const userSetDate = new Date(getUserdob);

    if(getUserdob === '') {
        document.getElementById('warning').innerHTML = 'Please select your date of birth';
        document.getElementById('warning').style.color = 'red';
    }
    else {
        document.getElementById('warning').style.display = 'none';

        let userAgeYear = date.getFullYear() - userSetDate.getFullYear();
        let userAgeMonth = date.getMonth() - userSetDate.getMonth();
        let userAgeDate = date.getDate() - userSetDate.getDate();

        if (userAgeDate < 0) {
            userAgeMonth--;
            userAgeDate += new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        }

        if (userAgeMonth < 0) {
            userAgeYear--;
            userAgeMonth += 12;
        }

        document.getElementById('para').innerHTML = 
        `Your age is ${userAgeYear} years, ${userAgeMonth} months, and ${userAgeDate} days.`
    
        if(userAgeYear >= 0 && userAgeYear <= 3) {
            document.getElementById('para2').innerHTML = 'You are a baby!';
        }
        else if (userAgeYear >= 4 && userAgeYear <= 6) {
            document.getElementById('para2').innerHTML = 'You are a toddler!';
        }
        else if (userAgeYear >= 7 && userAgeYear <= 9) {
            document.getElementById('para2').innerHTML = 'You are a preschooler!';
        }
        else if (userAgeYear >= 10 && userAgeYear <= 14) {
            document.getElementById('para2').innerHTML = 'You are a school boy!';
        }
        else if (userAgeYear >= 15 && userAgeYear <= 20) {
            document.getElementById('para2').innerHTML = 'You are a teenager!';
        }
        else if (userAgeYear >= 21 && userAgeYear <= 35) {
            document.getElementById('para2').innerHTML = 'You are a adult!';
        }
        else if (userAgeYear >= 36 && userAgeYear <= 55) {
            document.getElementById('para2').innerHTML = 'You are a middle adulthood!';
        }
        else if (userAgeYear >= 56 && userAgeYear <= 100) {
            document.getElementById('para2').innerHTML = 'You are a old person!';
        }
    }
}

