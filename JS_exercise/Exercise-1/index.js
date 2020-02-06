// ------------------------------Clock and Stopwatch------------------------
window.onload=function(){
    document.getElementById("frst_name").value ="";
    document.getElementById("lst_name").value ="";
    let time = setInterval(() =>{
        let hrs = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        if(sec<=9){
            sec='0'+sec;
        }
        if(min<=9){
            min='0'+min;
        }
        if(hrs<=9){
            hrs='0'+hrs;
        }
    document.getElementById("time").innerHTML=""+hrs+":"+min+":"+ sec;
    }, 1000);
    let dy = new Date().getDate();
    let m_arr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let mnt =m_arr[new Date().getMonth()];
    let yr = new Date().getFullYear()
    document.getElementById("dat").innerHTML=""+dy+" "+mnt+" "+ yr;
}



let sw;
let st_btn_clicked=false;
let rsm_btn_clicked=false;

let h=00,m=00,s=00,msec=00;
    let i = 0;
    let j = 1;
var a;

function start(){
    progress_bar_start();
    h=00,m=00,s=00,msec=00,j=1;
    clearTimeout(a);
    clearTimeout(sw);
    i=0;
        sw = setTimeout(run,1); 
        st_btn_clicked=true;
    }

function run(){
    i=i+5;
    msec = Math.floor(j);
    j=j+0.5;
    if(i==1000){
        i=0;
        j=1;
        s++;
        if(s<=9){
            if(s%10<=9){
            s='0'+s;}
        }
        if(s==60){
            m++;
            s=0;
            if(m==60){
                h++;
                m=0;
            }
        }
    }
    
    document.getElementById("stopwatch").innerHTML=h+" : "+m+" : "+s+" : "+msec;
     a = setTimeout(run,1);
}

function stop(){
    clearTimeout(a);
    clearTimeout(sw);
    progress_bar_stop();
    msec=0;
}
function resume(){
    if(st_btn_clicked){
        clearTimeout(a);
        clearTimeout(sw);
        progress_bar_start();
        sw = setTimeout(run,1);
    }
}
function reset(){
    st_btn_clicked=false;
    clearTimeout(a);
    clearTimeout(sw);
    progress_bar_stop();
    h=00,m=00,s=00,msec=0;
    document.getElementById("stopwatch").innerHTML=h+" : "+m+" : "+s+" : "+msec;
}
function progress_bar_start(){
    document.getElementById("h_bar").className='stpw_bar_start';
}
function progress_bar_stop(){
    document.getElementById("h_bar").className='stpw_bar_stop';
}



// ----------------------------------------Table functionality--------------------------
let f="",l="";
function add_row(){
if(document.getElementById("add_update_btn").value == "Add"){
    let f_name = document.getElementById("frst_name").value;
    let l_name = document.getElementById("lst_name").value;
    if(f_name.length !=0 && l_name.length !=0) {
    document.getElementById("table_main").innerHTML+="<tr><td class='td_border'>"+f_name+"</td><td class='td_border'>"+l_name+"</td><td><input type='button' value='Edit' onclick='edt(this)'></input></td><td><input type='button' value='Delete' onclick='del(this)'></input></td></tr>";
    document.getElementById("frst_name").value=" ";
    document.getElementById("lst_name").value=" ";
    // render_table();
}
    else {
        alert("Please enter values in textboxes!");
    }
}
else {
    let i;
    for ( i = 0; i <= document.getElementById("table_main").rows.length; i++) {
    let a = document.getElementById("table_main").rows[i].cells[0].innerHTML;
    let b = document.getElementById("table_main").rows[i].cells[1].innerHTML;
    if(a==f && b==l) {
        break;
        }
    }
    document.getElementById("table_main").rows[i].cells[0].innerHTML=document.getElementById("frst_name").value;
    document.getElementById("table_main").rows[i].cells[1].innerHTML=document.getElementById("lst_name").value;
    alert("values updated!");
    document.getElementById("add_update_btn").value="Add";
    }
}

function edt(r){
    let rnum = r.parentNode.parentNode.rowIndex;  
    document.getElementById("frst_name").value = document.getElementById("table_main").rows[rnum].cells[0].innerHTML;
    document.getElementById("lst_name").value = document.getElementById("table_main").rows[rnum].cells[1].innerHTML;
    f = document.getElementById("frst_name").value;
    l = document.getElementById("lst_name").value;
    document.getElementById("add_update_btn").value="Update";
}
function del(r){
    let rnum = r.parentNode.parentNode.rowIndex;  
    document.getElementById("table_main").deleteRow(rnum);
    document.getElementById("frst_name").value=" ";
    document.getElementById("lst_name").value=" ";
    document.getElementById("add_update_btn").value="Add";
}


let rand_value = function () {
    let val = Math.random().toString(32).substr(2,16);
    return val;
  };

  
let render_arr = [];
let obj = {
    first_name:rand_value(),
    last_name:rand_value()
}
for (let j = 0; j < 10; j++) {
    obj ={
        first_name:rand_value(),
        last_name:rand_value()
    }
render_arr.push(obj);
}
function render_table(){
    let rows_n =  document.getElementById("table_main").rows.length;
    let val;
    for (let i = 0; i < 10; i++) {
        val = "<tr><td class='td_border'>"+render_arr[i].first_name+"</td><td class='td_border'>"+render_arr[i].last_name+"</td><td><input type='button' value='Edit' onclick='edt(this)'></input></td><td><input type='button' value='Delete' onclick='del(this)'></input></td></tr>"
        document.getElementById("table_main").innerHTML+= val;
    }
    
}