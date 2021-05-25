const password=document.getElementById("password");
const state=false;

function toggle(){
    if(state){
        password.setAttribute("type","password");
        state=false;
    }
    else{
        password.setAttribute("type","text");
        state=true;
    }
}