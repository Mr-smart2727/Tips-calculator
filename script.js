let btnclear = document.getElementById("clear");

let totalbox = document.getElementById("total-bill")


function calculate() {
    let bill = (document.getElementById)("bill").value;
    let tip = (document.getElementById)("tip").value;
    let numofpeople =(document.getElementById)("numofpeople").value;


    let billPerPerson = bill / numofpeople;

    let tipPerPerson = ((tip/100)*bill)/numofpeople;


    console.log(billPerPerson + tipPerPerson);
    

     document.getElementById("total"). innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD',
     }).format(billPerPerson + tipPerPerson);


    //  document.getElementById("reset"). innerHTMl = "";
}


 let resetbtn = () => {
    bill.value = ""
    tip.value = "" 
    numofpeople.value = ""
    total.textContent = ""  
    
}
    btnclear.addEventListener('click', resetbtn );
    
    // document.getElementById("reset").innerHTMl = ("") 


    
     
    
    
