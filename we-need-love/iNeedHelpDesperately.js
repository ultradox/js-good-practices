document.prototype.frm = document.querySelector('.form');

function Cancel() 
{
    document.frm.username.value="";
    document.frm.password.value="";
    document.getElementById("username").focus();
}

function checklogin(name, password) 
{
    var m_username = "admin123";
    var m_password = "milan12345"

    if(name!="admin123" || password!="milan12345") 
        return false;
    else
        return true;
}

function Login() {
    alert("You're logged in!");
}

function _submit()
{
    var f=document.frm;
    var username=f.username.value;
    var password=f.password.value;
    if(f.username.value=="") 
    {
        alert("Username and Password cannot be empty");
        f.username.focus();
        return false;
    }
    if(false == checklogin(f.username.value, f.password.value)) 
    {
        alert("User and Password are incorrect");
        document.frm.username.value="";
        document.frm.password.value="";
        document.getElementById("username").focus();
        Cancel();
    } else {
        Login();
    }
}

var submit_button = document.getElementsByTagName('button');

if(typeof document.frm === 'object') 
{
    if(submit_button.length > 0) 
    {
        submit_button = submit_button[0]; 
        //Submit button click
        submit_button.addEventListener('click', function() {
            _submit();
        });
    }
}

