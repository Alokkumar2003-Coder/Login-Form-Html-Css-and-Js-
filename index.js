function Register()
{
    const registerName = document.getElementById("registername").value.trim();
    const registerEmail = document.getElementById("registeremail").value.trim();
    const registerPass = document.getElementById("registerpassword").value.trim();

    if (!registerName || !registerEmail || !registerPass) {
        alert("All fields are required!");
        return; 
    }


    else if (registerPass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return; 
    }

    localStorage.setItem("Name",registerName);
    localStorage.setItem("Email",registerEmail);
    localStorage.setItem("Password",registerPass);

    alert("Registration successful!");
    location.reload();

    window.location.href = "index.html";
    
 
}

function login()
{
    const loginEmail = document.getElementById("loginemail").value;
    const loginPass = document.getElementById("loginpassword").value;

    const storedEmail = localStorage.getItem("Email");
    const storedPass = localStorage.getItem("Password");

    if(loginEmail === storedEmail && loginPass === storedPass)
    {
        window.location.href = "About.html";
        alert("login Successful!")
    }
    else
    {
        alert("Invalid Credentials!")
    }
}
