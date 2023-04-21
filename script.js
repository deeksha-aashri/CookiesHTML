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
if(res1!=undefined){
    alert("The cookie1 is "+ res1);
}
else{
    alert("There is no defined cookie1");
}

}


//Setting cookie2 sets user age as per the input
function setCookie2(){
    let userage=prompt ("Enter your age: ");
    if(userage!=""){
        document.cookie=`cookie2=${encodeURIComponent(userage)}`
        console.log(userage)
        alert("You have successfully set cookie1 "+ `${cookie2}`);
    }
    else{
        alert("You have not set either the key or the value for cookie1");
    }
}


//Deleting cookie2 using expiration option
function deleteCookie2(){
    document.cookie="cookie2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    alert("You have successfully deleted the cookie2 which stored your age")
    
}

//To get cookie2
function getCookie2(){
    console.log(document.cookie);
    let arr2=
    document.cookie.split(";")
    .map(cookie=>cookie.split("="))
    .reduce((acc,[key,val])=>(
        {...acc,[key.trim()]:decodeURIComponent(val)}),
        {});
    console.log(arr2);
let res2=arr2["cookie2"];
if(res2!=undefined){
    alert("The cookie2 is "+ res2);
}
else{
    alert(" There is no defined cookie2")
}
}

//Display all cookies
function displayAllCookies(){
    let allCookies=document.cookie;
    if(allCookies.length!=0){
        alert(allCookies);
    }
    else{
        alert("There are no cookies to display")
    }
   
  
    
}






















