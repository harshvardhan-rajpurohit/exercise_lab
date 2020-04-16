var htmlArray=[],cssArray=[],jsArray=[],gitArray=[],linuxArray=[],webArray=[];
var arrOfArr = ["HTML","CSS","JS","Git","Linux","Web"];
let arrOfArr2=[];
let arrOfArr2Images=[];
let arr3=[];

document.onfocus = function(){
let userRole = localStorage.getItem("currentUser");
if(userRole==""){
    window.location.replace("/login_signup_page.html");
}

document.getElementById("userText").innerHTML = userRole;
if(userRole.includes('student')){
    document.getElementById("cModalBtn").hidden=true;
    let anchors = document.getElementsByTagName('a');
    for (let i = 1; i < anchors.length; i++) {
    anchors[i].hidden = true; 
       }
    var cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let ar = localStorage.getItem(arrOfArr[i]);
        if(ar.includes((localStorage.getItem("currentUser").split("("))[0])){
            cards[i].hidden = false; 
        }
        else {
            cards[i].hidden = true; 
               }
        }
    }

else {
    document.getElementById("cModalBtn").hidden=false;
    assignCourse();
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue; 
              }
            if(!localStorage[key].includes('student') && arrOfArr.includes(key) && localStorage[key]!=""){
                if(key.toLocaleLowerCase() === "html"){htmlArray = (localStorage.getItem(key)).split(',');}
                else if(key.toLocaleLowerCase() === "css"){cssArray = localStorage.getItem(key).split(',');}
                else if(key.toLocaleLowerCase() === "js"){jsArray = localStorage.getItem(key).split(',');}
                else if(key.toLocaleLowerCase() === "git"){gitArray = localStorage.getItem(key).split(',');}
                else if(key.toLocaleLowerCase() === "linux"){linuxArray = localStorage.getItem(key).split(',');}
                else if(key.toLocaleLowerCase() === "web"){webArray = localStorage.getItem(key).split(',');}
                let names = localStorage[key].split(',');

                names.forEach(element => {
                let bt = document.getElementById("btn-"+key+"-list-"+element+"-list");
                if( bt !=null && bt.value =="Add"){
                    bt.value = "remove";
                    bt.className="btn-danger";
                    bt.setAttribute("onclick","updateArrays(this)");
                    }    
                });
            }    
                if(key === "Web"){
                    break;
                }
        }
            arrOfArr2=(localStorage.getItem("arrayOfCourses")).split(',');
            arrOfArr2Images=(localStorage.getItem("arrayOfCoursesImages")).split(',');
        if(arrOfArr2.length!=0){
            if(arrOfArr2!=null){
                for (let i = 0; i < arrOfArr2.length; i++) {
                    addCourse(arrOfArr2[i],arrOfArr2Images[i]);
                }
            }    
        }
        
    }
}
// -------------------------------------------LOGOUT func----------------------------
function logout(){
    localStorage.setItem("currentUser","");
}

// -------------------------------------------ASSIGN COURSE func---------------------
let counter=0;
function assignCourse(){
    let lstTab = document.getElementById('list-tab');
    let tabPane = document.getElementById('nav-tabContent');
    

    for (let key in localStorage) {
            if(localStorage[key].includes('student') && counter==0){
                    let litem = document.createElement('a');
                    litem.className = "list-group-item list-group-item-action";
                    litem.appendChild(document.createTextNode(((localStorage[key]).split(','))[0]));
                    litem.id="list-"+((localStorage[key]).split(','))[0]+"-list";
                    litem.setAttribute("data-toggle","list");
                    litem.setAttribute("aria-controls",((localStorage[key]).split(','))[0])
                    litem.href="#list-"+((localStorage[key]).split(','))[0];
                    litem.role="tab";
                    lstTab.appendChild(litem);

                    let ul = document.createElement('ul');
                    for (let i = 0; i < arrOfArr.length; i++) {
                        let li = document.createElement('div');
                        li.className="row";
                        li.id = arrOfArr[i];
                        li.appendChild(document.createTextNode(arrOfArr[i]));
                        var btn = document.createElement("input");
                        btn.id="btn-"+arrOfArr[i]+"-"+litem.id;
                        btn.type="button";
                        btn.value="Add";
                        btn.setAttribute("onclick","updateArrays(this)");
                        btn.className="btn-outline-primary btn-sm";
                        btn.setAttribute("style","margin:0 auto;");
                        li.appendChild(btn)
                        ul.classList.add("col");
                        ul.appendChild(li);
                    }
                    arrOfArr2=(localStorage.getItem("arrayOfCourses")).split(',');
                    if(arrOfArr2.length!=0){
                        for (let i = 0; i < arrOfArr2.length; i++) {
                            let li = document.createElement('div');
                            li.className="row";
                            li.id = arrOfArr2[i];
                            li.appendChild(document.createTextNode(arrOfArr2[i]));
                            var btn = document.createElement("input");
                            btn.id="btn-"+arrOfArr2[i]+"-"+litem.id;
                            btn.type="button";
                            btn.value="Add";
                            btn.setAttribute("onclick","updateArrays(this)");
                            btn.className="btn-outline-primary btn-sm";
                            btn.setAttribute("style","margin:0 auto;");
                            li.appendChild(btn)
                            ul.classList.add("col");
                            ul.appendChild(li);
                        }
                    }

                    let tabitem = document.createElement('div');
                    tabitem.className="tab-pane fade"
                    tabitem.role = "tabpanel";
                    tabitem.id = "list-"+((localStorage[key]).split(','))[0];
                    tabitem.setAttribute("aria-labelledby",litem.id);
                    tabitem.appendChild(ul)
                    tabPane.appendChild(tabitem);

            }
            
            if(key === "currentUser"){
                counter++;
                break;
            }
        
    }
}


// -------------------------------------------UPDATE ARRAYS func---------------------
function updateArrays(i){
    let userAssign = (((i.parentNode.parentNode.parentNode).id).split('-'))[1];
    let courseToBeAssigned = (i.parentNode).id;

    if(courseToBeAssigned === "HTML"){
        if(htmlArray.includes(userAssign) && i.value==="remove"){
            htmlArray.splice(htmlArray.indexOf(userAssign),1);
            i.value ="Add";
            i.className="btn-outline-primary";
        }
        else {
            htmlArray.push(userAssign);
            i.value ="remove";
            i.className="btn-danger";    
        }
        
    }
    else if(courseToBeAssigned === "CSS"){
        if(cssArray.includes(userAssign) && i.value ==="remove"){
            cssArray.splice(cssArray.indexOf(userAssign),1);
            i.value ="Add";
            i.className="btn-outline-primary";
        }
        else {
            cssArray.push(userAssign);
            i.value ="remove";
            i.className="btn-danger";    
        }
        
    }
    else if(courseToBeAssigned === "JS"){
        if(jsArray.includes(userAssign) && i.value ==="remove"){
            jsArray.splice(jsArray.indexOf(userAssign),1);            
            i.value ="Add";
            i.className="btn-outline-primary";
        }
        else {
            jsArray.push(userAssign);
            i.value ="remove";
            i.className="btn-danger";    
        }
    }
    else if(courseToBeAssigned === "Git"){
        if(gitArray.includes(userAssign) && i.value ==="remove"){
            gitArray.splice(gitArray.indexOf(userAssign),1);
            i.value ="Add";
            i.className="btn-outline-primary";
        }
        else {
            gitArray.push(userAssign);
            i.value ="remove";
            i.className="btn-danger";    
        }
    }
    else if(courseToBeAssigned === "Linux"){
        if(linuxArray.includes(userAssign) && i.value ==="remove"){
            linuxArray.splice(linuxArray.indexOf(userAssign),1);
            i.value ="Add";
            i.className="btn-outline-primary";
        }
        else {
            linuxArray.push(userAssign);
            i.value ="remove";
            i.className="btn-danger";    
        }
    }
  
    else if(courseToBeAssigned === "Web"){
        if(webArray.includes(userAssign) && i.value ==="remove"){
            webArray.splice(webArray.indexOf(userAssign),1);
            i.value ="Add";        
            i.className="btn-outline-primary";    
        }
        else {
            webArray.push(userAssign);  
            i.value ="remove";
            i.className="btn-danger";    
        }
    }
}

function saveChanges(){
localStorage.setItem(arrOfArr[0],htmlArray);
localStorage.setItem(arrOfArr[1],cssArray);
localStorage.setItem(arrOfArr[2],jsArray);
localStorage.setItem(arrOfArr[3],gitArray);
localStorage.setItem(arrOfArr[4],linuxArray);
localStorage.setItem(arrOfArr[5],webArray);
}

// ------------------------------------------- ADD  COURSES func---------------------------
function addCourse(coursename, courseimage){
    let cname,cimg;
    let imgSrc="";
    var base64img='';
    var blobURL;    

    if(coursename.length!=0 && courseimage!=0){
        cname=coursename;
        imgSrc=courseimage;    
    }
    else {
        cname = document.getElementById("newCourseName").value;
        cimg = document.getElementById("newCourseImage");
        if(cname.length==0 && cimg.value.length==0){
            // alert("Please Enter Values!");
            return;
        }
    }
    let ccards=document.getElementById("courseCards");
    for ( i = 0; i < ccards.childElementCount; i++) {
        if(ccards.children[i].childElementCount != 3){
            let pleft = 3 - ccards.children[i].childElementCount;
            // console.log("places Left:"+pleft);
            break;
        }
    }

    let divRow = document.createElement('div');
    divRow.className="row padding";

    let divCol = document.createElement('div');
    divCol.className="col-md-4";

    let divCard = document.createElement('div');
    divCard.className="card";
    divCard.id = cname.toLowerCase();

    let cardImg = document.createElement('img');
    let fReader = new FileReader();
    if(imgSrc.length!=0){
        cardImg.src=imgSrc;
    }
    else {
        imgSrc = cimg.files[0];
        fReader.readAsDataURL(cimg.files[0]);
        fReader.onloadend= function(event){ base64img=event.target.result;
            
            if ( /(jpe?g|png)$/i.test(imgSrc.type) ){
                var binaryImg = convertDataURIToBinary(base64img);
                var blob = new Blob([binaryImg], {type: imgSrc.type});
                blobURL = window.URL.createObjectURL(blob);
                if(!arr3.includes(blobURL)){
                    arr3.push(blobURL);
                }
            }
            cardImg.src = base64img;
        }
        
    }
    
    cardImg.className="card-img-top";
    cardImg.alt=cname.toLowerCase()+' course';

    let divCardBody = document.createElement('div');
    divCardBody.className="card-body";
    
    let divHr = document.createElement('hr');

    let divTitle = document.createElement('h4');
    divTitle.className="card-title";
    divTitle.innerHTML=cname;

    let divA = document.createElement('a');
    divA.href="#";
    divA.className="btn btn-outline-secondary";
    divA.setAttribute("data-toggle","modal");
    divA.setAttribute("data-target","#coursesModal");
    divA.onclick="assignCourse(this)"
    divA.innerText="Assign Course";

    divCardBody.appendChild(divHr);
    divCardBody.appendChild(divTitle);
    divCardBody.appendChild(divA);

    divCard.appendChild(cardImg);
    divCard.appendChild(divCardBody);

    divCol.appendChild(divCard);
    divRow.appendChild(divCol);

    if(document.getElementById(cname.toLowerCase())==null){
        if(i==ccards.childElementCount){
            ccards.appendChild(divRow);
        }
        else {
            ccards.lastElementChild.appendChild(divCol);
        }
    }

    if(arrOfArr2.length==0){
        arrOfArr2.push(cname);
        arrOfArr2Images.push(cimg.value);
        localStorage.setItem("arrayOfCourses",arrOfArr2);
        localStorage.setItem("arrayOfCoursesImages",arrOfArr2Images);
        document.getElementById("newCourseName").value='';
        document.getElementById("newCourseImage").value='';
        location.reload();
    }
    else if( !arrOfArr2.includes(cname)){
        arrOfArr2.push(cname);
        arrOfArr2Images.push(cimg.value);
        localStorage.setItem("arrayOfCourses",arrOfArr2);
        localStorage.setItem("arrayOfCoursesImages",arrOfArr2Images);
        document.getElementById("newCourseName").value='';
        document.getElementById("newCourseImage").value='';
        location.reload();
    }
    
}


// -------------------------------------------UPDATE COURSES func---------------------------
function updateCourses(caller){
    let lstTab = document.getElementById('listCourses');
    document.getElementById("newCourseName").value='';
    document.getElementById("newCourseImage").value='';

    if(caller.firstChild.nodeValue =="Courses Allotment" && lstTab.childElementCount==0){
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key) || localStorage[key].includes('student')|| localStorage[key].includes('admin')) {
                continue; 
              }
              if(!arrOfArr.includes(key)){
                if(key === "arrayOfCourses"){
                    let tmpArr = localStorage[key].split(',');
                    tmpArr.forEach(elem => {
                        let litem = document.createElement('a');
                        litem.className = "list-group-item list-group-item-action";
                        litem.appendChild(document.createTextNode(elem));
                        litem.id="list-course-"+elem+"-list";
                        litem.setAttribute("onclick","removeCourse(this)");
                        litem.setAttribute("data-toggle","list");
                        litem.role="tab";
                        lstTab.appendChild(litem);            
                    });
                }
              }
        }    
    }
    
else {
    let ccards=document.getElementById("courseCards");
    // console.log(ccards.children[0].children);
    }

}

function removeCourse(caller){
    let courseName = caller.id.split('-')[2]
    let ans = confirm("Are you sure you want to delete the course: "+courseName);
    if(ans){
        let indx = arrOfArr2.indexOf(courseName);
        arrOfArr2.splice(indx,1);
        arrOfArr2Images.splice(indx,1);
        localStorage.setItem("arrayOfCourses",arrOfArr2);
        localStorage.setItem("arrayOfCoursesImages",arrOfArr2Images);
        alert("Course deleted successfully!");
        document.getElementById("closeBtn").click();
        location.reload();
    }
}


function convertDataURIToBinary(dataURI) {
	var BASE64_MARKER = ';base64,';
	var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
	var base64 = dataURI.substring(base64Index);
	var raw = window.atob(base64);
	var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

	for(i = 0; i < rawLength; i++) {
		array[i] = raw.charCodeAt(i);
    }
    console.log(arr3);
    
	return array;
}