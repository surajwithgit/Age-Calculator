function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    
    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "#e0e5ec", 500);
        return;
    }
    
    let dobDate = new Date(year, month - 1, day);
    let today = new Date();
    
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById("years-box").innerText = `${years} \nYear`;
    document.getElementById("months-box").innerText = `${months} \nMonth`;
    document.getElementById("days-box").innerText = `${days} \n Days`;
    
    setTimeout(() => {
        document.getElementById("day").value = "";
        document.getElementById("month").value = "";
        document.getElementById("year").value = "";
    }, 500);
}