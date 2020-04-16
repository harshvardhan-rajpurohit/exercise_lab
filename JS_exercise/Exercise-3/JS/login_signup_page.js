// ---------------------------------------SIGNUP FUNCTION ---------------
function signupUser(){
    let usrname = document.getElementById("username").value;
    let pswd = document.getElementById("password").value;
    let rePswd = document.getElementById("reenterPassword").value;
    let role ;
    let arr=[];
    let uregExp = /[\w\d]/ig;

    if(uregExp.test(usrname) && uregExp.test(pswd)){
        if(pswd === rePswd){
            if(document.getElementById("adminRadioBtn").checked){
                role = "admin";
            }
            else if (document.getElementById("studentRadioBtn").checked){
                role = "student";
            }
            else {
                alert("No role selected!!");
            }
        }   
        else {
            alert("Incorrect Password! Please try again.");
        }     

    }    
    else {
        alert("Please enter characters not blank spaces.");
        return;
    }

    let condition=true;
    // console.log(usrname+"|"+pswd+"|"+rePswd+"|"+role);
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
        continue;            
        }
        else {
            if(key == 'username'+usrname){
              alert("User already exists!");
                condition=false;
                break;
            }
            
        }
    }
    if(condition){
        arr.push(usrname);
        arr.push(pswd);
        arr.push(role);
        localStorage.setItem('username'+usrname,arr);
        localStorage.setItem("currentUser",usrname+"("+role+")");            
        if(arr.length > 0 ){
            document.getElementById("signupForm").submit();
        }
    }

}


// ---------------------------------------LOGIN FUNCTION ---------------
function loginUser(){
    let usrnameLogin = document.getElementById("usernameLogin").value;
    let pswdLogin= document.getElementById("passwordLogin").value;
    let roleLogin;
    let uregExp = /[\w\d]/ig;
    let currentUser=[];

    if(uregExp.test(usrnameLogin) && uregExp.test(pswdLogin)){
        usr = 'username'+usrnameLogin;
        if(document.getElementById("adminRadioBtnLogin").checked){
            roleLogin = "admin";
        }
        else if (document.getElementById("studentRadioBtnLogin").checked){
            roleLogin = "student";
        }
        else {
            alert("No role selected!!");
        }
    }    
    else {
        alert("Please enter characters not blank spaces.");
    }

    for (let obj in localStorage) {
        if(obj == usr ){
            currentUser = (localStorage[obj]).split(',');
            if(currentUser[0] === usrnameLogin && currentUser[1]=== pswdLogin && currentUser[2]=== roleLogin){
                alert("Login Successfull!");
                localStorage.setItem("currentUser",usrnameLogin+"("+roleLogin+")");
                document.getElementById("loginForm").submit();
            }
            else {
                alert("Incorrect Details! Try again :'(");
            }
        }
    }
    console.log(JSON.stringify(localStorage,null,5));
    }

