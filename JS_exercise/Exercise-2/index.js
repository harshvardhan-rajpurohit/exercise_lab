// -----------------------------------------------Question 1 ---------------------------
function q1(){
    let inp = prompt("Enter Array (Note: delimiter is space.):");
    let n_inp = prompt("Enter the number of elements:");
    let n = parseInt(n_inp);
    let arr = inp.split(' ');
    if(n_inp.length>0){
        document.getElementById("answers").innerHTML=(`First ${n} elements are:`+arr.slice(0,n)+`<br> Last ${n} elements are: `+arr.splice(-n));
    }
    else {
        document.getElementById("answers").innerHTML=(`First element is:`+arr[0]+`<br> Last element is: `+arr[arr.length-1]);
    }
    
}

// -----------------------------------------------Question 2 ---------------------------
function q2(){
    let f_ans="";
    let inp = prompt("Enter 2 or more digit number:");
    let inp_arr=inp.split('');
    for (let i = 0; i < inp_arr.length; i++) {
        if(parseInt(inp_arr[i])%2==0 && parseInt(inp_arr[i+1])%2==0){
            f_ans+=inp_arr[i]+'-';
        }
        else{
            f_ans+=inp_arr[i];
        } 
    }
    document.getElementById("answers").innerHTML=f_ans;
}

// -----------------------------------------------Question 3 ---------------------------

function q3(){
    let inp = prompt("Enter Array (Note: delimiter is space.):");
    let arr1 = inp.split(' ');
    let mf = 1;
    let occ = 0;
    let item;
    for (let i=0; i<arr1.length; i++)
    {
            for (let j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                    occ++;
                    if (mf<occ)
                    {
                    mf=occ; 
                    item = arr1[i];
                    }
            }
            occ=0;
    }
    document.getElementById("answers").innerHTML=("Most Frequent element: "+item+" ( " +mf +" times ) ") ; 
}


// -----------------------------------------------Question 4 ---------------------------

function q4(){
    let inp = prompt("Enter Array (Note: delimiter is space.):");
    let inp_arr = inp.split(' ');
    let n_arr = parseInt(inp_arr);
    document.getElementById("answers").innerHTML=(inp_arr.sort(()=> Math.random().toFixed(0)))
}

// -----------------------------------------------Question 5 ---------------------------\
function q5(){
    let inp1 = prompt("Enter Array1 (Note: delimiter is space.):");
    let inp_arr1 = inp1.split(' ');
    let inp2 = prompt("Enter Array2 (Note: delimiter is space.):");
    let inp_arr2 = inp2.split(' ');
    union_arr(inp_arr1,inp_arr2)
}
function union_arr(ar1 ,ar2){
    let f_arr = [];
    ar1.forEach(element => {
        f_arr.push(element);
    });
    ar2.forEach(element => {
        if(!f_arr.includes(element)){
            f_arr.push(element);
        }
    });
    document.getElementById("answers").innerHTML="<br> Array1: "+ar1+" <br> Array2:"+ar2+" <br>Union of Arrays:"+f_arr;
    diff_arr(ar1,ar2);
}
function diff_arr(ar1 ,ar2){
    let f_arr = [];
    ar1.forEach(element => {
        if(!ar2.includes(element))
        f_arr.push(element);
    });
    document.getElementById("answers").innerHTML+="<br>Difference of Arrays:"+f_arr;
}


// -----------------------------------------------Question 6 ---------------------------\
function q6(){
    let inp1 = (prompt("Enter starting bound value for array:")).charCodeAt();
    let inp2 = (prompt("Enter ending bound value for array:")).charCodeAt();
    let inp3 = prompt("Enter integer value :");
    let ans;
    document.getElementById("answers").innerHTML="Values are:<br>"
    for (let i = inp1; i <= inp2; i= i+parseInt(inp3)) {
        console.log(i)
        document.getElementById("answers").innerHTML+=String.fromCharCode(i)+",";
    }
}

// -----------------------------------------------Question 7 ---------------------------\
function q7(){
    let inp = prompt("Enter Date:");
    let mnth_arr=["January","February","March","April","May","June","July","August","September","October","November","December"]
    let inp_arr=[]
    if(inp.includes('/')){ inp_arr = inp.split('/'); }
    else if(inp.includes('-')){ inp_arr = inp.split('-'); }
    else if(inp.includes('.')) {inp_arr = inp.split('.');}
    let mnth = mnth_arr[parseInt(inp_arr[1])-1];
    if(mnth === undefined){
        alert("Invalid Date entered!");
    }
    else{
        document.getElementById("answers").innerHTML=("<br>Month is: "+mnth);
    }
}

// -----------------------------------------------Question 8 ---------------------------\
function q8(){
    let date1 = new Date(prompt("Enter Date1: (Note: Date format is MM/DD/YYYY)"));
    let date2 = new Date(prompt("Enter Date2: (Note: Date format is MM/DD/YYYY)"));
    let diff = Math.abs(date2 - date1);
    document.getElementById("answers").innerHTML="<br>Difference between dates is: "+ Math.ceil(diff/(1000*60*60*24));
}

// -----------------------------------------------Question 9 ---------------------------\
function q9(){
    let nw = new Date(Date.now() * 1000);
    let h,m,s;
    h= nw.getUTCHours();
    m=nw.getUTCMinutes();
    s=nw.getUTCSeconds();
    document.getElementById("answers").innerHTML="<br>Time since January 1, 1970 is: "+h+": "+m+": "+s;
}

// -----------------------------------------------Question 10 ---------------------------\
function q10(){
    let date1 = new Date(prompt("Enter Date1: (Note: Date format is MM/DD/YYYY)"));
    let date2 = new Date(prompt("Enter Date2: (Note: Date format is MM/DD/YYYY)"));
    let diff = Math.abs(date2 - date1);
    let yr,m,d,h,min,sec;
    yr = Math.floor(diff/(1000*60*60*24*365));
    m = Math.floor(diff/(1000*60*60*24*30));
    d = Math.floor(diff/(1000*60*60*24));
    h = Math.floor(diff/(1000*60*60));
    min = Math.floor(diff/(1000*60));
    sec = Math.floor(diff/(1000));
    document.getElementById("answers").innerHTML="<br>Difference between dates is:<br>Seconds: "+sec+" OR<br>Minutes: "+min+" OR<br>Hours: "+h+" OR<br>Days: "+d+" OR<br>Months: "+m+" OR<br>Years: "+yr;   
}

// -----------------------------------------------Question 11 ---------------------------\
function q11(){
    let inp1 = prompt("Enter Email Address:");   
    let email = inp1.split('');
    for (let i = 1; i < email.indexOf('@'); i++) {
    email[i]='*';        
    }
    email = email.join('');
    let inp2 = prompt("Reenter Email Address:\n"+email.toString())
    if(inp1 == inp2){
        document.getElementById("answers").innerHTML="<br>Email "+email+" verified."
    }
    else {
        document.getElementById("answers").innerHTML="<br>Emails didn't match."
    }
}

// -----------------------------------------------Question 12 ---------------------------\
function q12(){
    let inp1 = prompt("Enter string:");
    let inp2 = prompt("Enter the String to insert:");
    let loc = parseInt(prompt("Enter the index for insertion:"));
    if(loc>0){
        let frst_inp1= inp1.slice(loc);
        inp1 = inp1.slice(0,loc).concat(inp2).concat(frst_inp1);
        document.getElementById("answers").innerHTML="<br>The formatted String is:"+inp1;
    }
    else {
        let frst_inp1= inp1.slice(0);
        inp1 = inp2.concat(frst_inp1);
        document.getElementById("answers").innerHTML="The formatted String is: "+inp1;
    }
}


// -----------------------------------------------Question 13 ---------------------------\
function q13(){
    let inp = prompt("Enter the String:");
    let d = parseInt(prompt("Enter the chunk length:"));
    let f_arr = [];
    let a = inp;
    while(a.length >1 ){
        f_arr.push(a.slice(0,d))
        a = a.slice(d);
    }
    if(a.length==1){
        f_arr.push(a);
    }
    document.getElementById("answers").innerHTML="<br>Values are: "+f_arr;
}

// -----------------------------------------------Question 14 ---------------------------\
function q14(){
    let inp = prompt("Enter String;");
    let a =inp;
    document.getElementById("answers").innerHTML="<br>Extracted String is: ";
    while(a.includes('<')){
        if(a[0]=='<'){
            a = a.slice(a.indexOf('>')+1);
        }
        else {
            document.getElementById("answers").innerHTML+=a.slice(0,a.indexOf('<'));
            a = a.slice(a.indexOf('<'));
        }
    }
}

// -----------------------------------------------Question 15 ---------------------------\
function q15(){
    let inp = prompt("Enter Email ID:");
    let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(reg_ex.test(inp)){
        document.getElementById("answers").innerHTML="<br> Email ID registered.<br>We will contact you shortly. Thank You!";
    }
    else {
        document.getElementById("answers").innerHTML="<br> Please Check the email id again.";
    }
}

// -----------------------------------------------Question 16 ---------------------------\
function q16(){
    let inp = prompt("Enter the number:");
    let f_arr = [];
    let a = inp.split('').reverse().join('');
    while(a.length >1 ){
        f_arr.unshift(a.slice(0,3).split('').reverse().join(''))
        a = a.slice(3);
    }
    if(a.length==1){
        f_arr.unshift(a);
    }
    document.getElementById("answers").innerHTML="<br>Values are: "+f_arr;
}

// -----------------------------------------------Question 17 ---------------------------\
function q17(){
    let inp_row = parseInt(prompt("Enter number of rows:"));
    let inp_col = parseInt(prompt("Enter number of columns:"));
    let table_obj = document.getElementById('main_table');
    if(table_obj.rows.length>0){
        for (let a = 0; a < table_obj.rows.length; a++) {
            table_obj.deleteRow(a);
        }
        table_obj.deleteRow(0);
    }
    for (let i = 0; i < inp_row; i++) {
        let rw = table_obj.insertRow(i);
        for (let j = 0; j < inp_col; j++) {
            rw.insertCell(j).innerHTML = "Row-"+i+",Column-"+j;
        }
    }
}

// -----------------------------------------------Question 18 ---------------------------\
let main_arr = [];
function q18(){
    document.getElementById("answers").innerHTML="";
for (let i = 0; i < 10; i++) {
    let obj = {
        "id":i,
        "name": Math.random().toString(32).toString().substr(2,5),
        "age":(Math.random()*100).toFixed() 
    }
    main_arr.push(obj);
}
document.getElementById("answers").innerHTML="Objects in Ascending order of Age:"
document.getElementById("answers").innerHTML+="<pre><code>"+JSON.stringify(sort_age(),null,1)+"</code></pre>"    
document.getElementById("answers").innerHTML+="<br><br>Objects in Descending order of Name:"
document.getElementById("answers").innerHTML+="<pre><code>"+JSON.stringify(sort_name(),null,1)+"</code></pre>"    
}

function sort_age(){
    let swapp ;
let n = main_arr.length;
alert(n)
do {
    swapp = false;
    for (let i=0; i < n-1; i++)
    {
        if (main_arr[i].age < main_arr[i+1].age)
        {
           var temp = main_arr[i];
           main_arr[i] = main_arr[i+1];
           main_arr[i+1] = temp;
           swapp = true;
        }
    }
    n--;
} while (swapp);
return main_arr.reverse(); 
}

function sort_name(){
    return main_arr.sort(function(a,b){
        let name1 = a.name.toUpperCase();
        let name2 = b.name.toUpperCase();
        if(name1 > name2) return 1;
        else return 0;
    })
}

// -----------------------------------------------Question 19 ---------------------------\
function q19(){
    let inp = parseInt(prompt("Enter the index of object:"));
    for (let i = 0; i < 10; i++) {
        let obj = {
            "id":i,
            "name": Math.random().toString(32).toString().substr(2,5),
            "age":(Math.random()*100).toFixed() 
        }
        main_arr.push(obj);
    }
    if(inp>9){
        alert("Please enter index between range [0,9]");
    }
    else {
        let obj = {
            "id":inp,
            "name": Math.random().toString(32).toString().substr(2,5),
            "age":(Math.random()*(100-10)).toFixed() 
        }
        main_arr[inp] = obj;
        alert("New object"+JSON.stringify(obj)+" inserted!");
        document.getElementById("answers").innerHTML="";
        main_arr.forEach(element => {
            document.getElementById("answers").innerHTML+="<pre><code>"+JSON.stringify(element,null,2)+"</code></pre>"    
        });
    }
}

// -----------------------------------------------Question 20 ---------------------------\
function q20(){
    let hobb = ['Reading','Travelling','Music','Drawing']
    for (let i = 0; i < 5; i++) {
        let obj = {
            "id":i,
            "name": Math.random().toString(32).toString().substr(2,5),
            "age":(Math.random()*100).toFixed() ,
            "hobbies": [hobb[(Math.round(Math.random())).toFixed()], hobb[(Math.round(Math.random())+2).toFixed()]]
        }
        main_arr.push(obj);
    }
    console.log(JSON.stringify(main_arr,null,2))
sort_hobbies();
}
function sort_hobbies(){
let rd=[],tr=[],ms=[],dr=[];
main_arr.forEach(a => {
    a.hobbies.forEach(b => {
        if(b == "Reading"){
            rd.push(a.name);
        }
        else if (b == "Travelling"){
            tr.push(a.name)
        }
        else if (b == "Music"){
            ms.push(a.name)
        }
        else if (b == "Drawing"){
            dr.push(a.name)
        }
    });
});
document.getElementById("answers").innerHTML="Sorted Arrays are:<br>Reading: "+rd+"<br>Travelling: "+tr+"<br>Music: "+ms+"<br>Drawing: "+dr;
}
