//Setting cookie1 as the name input by the user
function setCookie1(){

    let username=prompt ("Enter your name: ");
    if(username!=""){
        document.cookie=`cookie1=${encodeURIComponent(username)}`
        console.log(username)
        alert("You have successfully set cookie1 "+ `${cookie1}`);
    }
    else{
        alert("You have not set either the key or the value for cookie1");
    }
    }
   
//Deleting cookie1 using expiration option
    function deleteCookie1(){
       
        document.cookie="cookie1=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
       alert("You have successfully deleted the cookie1 which stored your name")
        
    }


    
//To get cookie1
function getCookie1(){
    console.log(document.cookie);
    let arr1=
    document.cookie.split(";")
    .map(cookie=>cookie.split("="))
    .reduce((acc,[key,val])=>(
        {...acc,[key.trim()]:decodeURIComponent(val)}),
        {});
    console.log(arr1);
let res1=arr1["cookie1"];
if(res!=undefined){
    alert("The cookie1 is "+ res1);
}
else{
    alert("There is no defined cookie1");
}

}























