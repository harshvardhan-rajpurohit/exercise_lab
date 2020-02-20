// let arrOfNames=["Harshvardhan Rajpurohit","Vedant Rajpurohit","Krishna Rajpurohit"
// ,"Tanvi Rajpurohit","Siddhi Rajpurohit","Shivay Rajpurohit","Kamex Sevalia","Mustafa Dudhiyawala",
// "Dilip Mailapalli","Anirudh Kela","Utsav Gadhiya","Soham Parekh","Sarthak Shah","Vishal Vyas",
// "Zuber Shekh","Rushi Bhagat","Gurucharan Chhabara","Antorip Chaudhary","Rishabh Khare","Dev Sukhadiya"
// ,"Yashasvee Sisodhiya","Hariom Yadav"];
let arrOfNames=["Ashish Shah","Rashmin Chhatrala","Yash Dubey","Prakash Jain",
"Yashraj Singh","Viraj Sinha","Rajesh Kumar","Mahesh Marwadi","Suresh Sahni",
"Amar Vilas","Virdas Singhania","Rajeshwari Bindra","Birendra Bhalerao",
"Virendra Bhupati","Bhupendra Singh","Bhuvam Bam","Shri Raj","Prashant Kamle",
"Kamlesh Tomar","Risabh Khare","Rishi Kohli","Kunwar Kharwanda","Kartik Koli",
"Komal Jain","Kartikey Pandey"];

window.onload = function(){
let ul = document.createElement('ul');
ul.id = "listOfNames";
                    for (let i = 0; i < arrOfNames.length; i++) {
                        let li = document.createElement('li');
                        li.className="list-group-item list-group-item-action";
                        li.id = 'name_'+i;
                        li.appendChild(document.createTextNode(arrOfNames[i]));
                        li.role="tab";
                        ul.classList.add("col");
                        ul.appendChild(li);
                    }
document.getElementById("listView").appendChild(ul);
alert("This webpage contains 2 tasks. Task2 - filter box and Task3 - Squares \n (P.S: The BOX2 will start changing its color once this alert window is closed.)");
changeBox2Color();
}

// -----------------------------------------Select Item Func---------------------
function selectItem(){
    let inp = document.getElementById("textEntered").value;
    let lst = document.getElementById("listOfNames");
    let li = lst.getElementsByTagName('li');
    let txt,indx;

    for (let i = 0; i < li.length; i++) {
        txt = li[i].innerText;
        indx = txt.indexOf(inp)
        if(txt.includes(inp)){
            li[i].innerHTML = txt.substring(0,indx) + "<span class='highlight'>" + txt.substring(indx,indx+inp.length) + "</span>" + txt.substring(indx + inp.length)
            li[i].style.display="";
        }
        else {
            li[i].style.display="none";
        }
    }
}

// --------------------------------------------Box1 Func---------------------
function box1Func(){
    bx3 = document.getElementById("box3");
    bx3.firstElementChild.innerHTML="Oops! Somethings wrong.";
}

// --------------------------------------------Box2 Func---------------------
function changeBox2Color(){
    let a=0;
    changeCol2();
}

function changeCol2(){
    let colors = ['red','green','blue'];
    let a=0;
    let tm=3000;
    let i =0;
setTimeout(function run() {
    if(i%4 != 0){
        tm=3000;
        let bx2=document.getElementById("box2");
        bx2.style.transitionProperty='background-color';
        bx2.style.transitionDuration='1s';
        bx2.style.backgroundColor=colors[a];
        a++;
        if(a==3){
            a=0;
        }
    }
    else {
        tm=1;
    }
    (i++)
  setTimeout(run, tm);
}, 1);
}

// --------------------------------------------Box4 Func---------------------
document.onkeydown = function(event){ 
    let reverse=false;
    if(event.keyCode == 38 || event.keyCode == 39){
        console.log(event.key)
        changeCol4(5000,reverse);
    }
    else if(event.keyCode == 37 || event.keyCode == 40){
        console.log(event.key)
        reverse=true;
        changeCol4(5000,reverse);
    }
    else{

    }
}
let t1,t2;
function changeCol4(tm,rev){
    if(t1!=null && t2!=null){
    clearTimeout(t1);
    clearTimeout(t2);
    }
    
    let colors = ['rebeccapurple','indigo','blue','green','yellow','orangered','red'];
    let a=0;
    let i =0;
    if (rev==true){
        colors=colors.reverse();
    }
 t1 = setTimeout(function run() {
    if(i%6 != 0){
        tm=5000;
        let bx4=document.getElementById("box4");
        bx4.style.transitionProperty='background-color';
        bx4.style.transitionDuration='1s';
        bx4.style.backgroundColor=colors[a];
        a++;
        if(a==7){
            a=0;
        }
    }
    else {
        tm=1;
    }
    (i++)
 t2=setTimeout(run, tm);
}, 1);
}