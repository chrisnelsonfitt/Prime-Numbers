
//On key up check for number
document.getElementById("number").onkeyup = function(){
   
    //Convert to Integer
    var testNumber = parseInt(document.getElementById("number").value);
    
    //Test for Prime Number
    function primenumber(test){
        for(i=2; i < test; i++){
            //Is not prime
            if (test%i===0){
               document.getElementById("isresult").style.color ="#FF404C";
                 document.getElementById("isresult").innerHTML = testNumber + " Is <u>Not</u> A Prime Number"; 
                 return false;  
            }
            //Is Prime
            else{
                document.getElementById("isresult").innerHTML = testNumber + " Is A Prime Number!"; 
                 
                document.getElementById("isresult").style.color ="#0B877D";
                return true;
            }
        }
    }
     console.log(primenumber(testNumber));
};
//Set Default Value of start input
document.getElementById("start").value = 1;
//Listen for keyup
document.getElementById("listNumbers").onkeyup = function(){
    
    //Convert Values to Integer
    min = parseInt(document.getElementById("start").value);
    max =  parseInt(document.getElementById("end").value);
    //Convert Integer to String and Print to Screen
    document.getElementById("result").innerHTML = getP(min,max).join();
   
    
};
//Check for all prims between Start(min) and End(max) 
function getP(min, max) {
    var s = [], i, j, prime = [];
    for (i = 2; i <= max; ++i) {
        if (!s[i]) {
            // i has not been marked -- it is prime
            if (i >= min) {
                prime.push(i);
            }
            for (j = i << 1; j <= max; j += i) {
                s[j] = true;
            }
        }
    }
    return prime;
}

