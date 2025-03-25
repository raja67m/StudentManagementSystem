let studentName=document.getElementById('studentName');
let studentDept=document.getElementById('studentDept');
let studentAge=document.getElementById('studentAge');
let studentEmail=document.getElementById('studentEmail');
let saveBtn=document.getElementById('save-btn');
let cancelBtn=document.getElementById('cancel');
let studentData=document.getElementById('studentData');

let form=document.getElementById('form');

form.addEventListener('submit',function(e){
e.preventDefault();
formValidation();

});

// form validation function
let formValidation=()=>{
   if(studentName.value === ""){
  console.log("The name was'nt to be empty");
   }else{
      console.log("succesfully insert")
      console.log("The name was",studentName);
      acceptData();
 
   }
}

// store the data local storage

let data=[];

let acceptData=()=>{
   data.push({
stdName:studentName.value,
stdDept:studentDept.value,
stdAge:studentAge.value,
stdEmail:studentEmail.value,

   });

  localStorage.setItem("data",JSON.stringify(data));
      console.log(data);
        
addNewStudent();
}

//create a new reacord

let addNewStudent=()=>{
   studentData.innerHTML="";
   data.map((x,y)=>{
      return( studentData.innerHTML +=`
     
      <tr id=${y}>
      <td>${x.stdName}</td>
      <td>${x.stdDept}</td>
      <td>${x.stdAge}</td>
      <td>${x.stdEmail}</td>
    <td>
   <button class="edit-btn" onClick="editRecord(this)"><i class='bx bxs-edit'></i>Edit</button>
   <button class="delete-btn" onClick="deleteRecord(this)"><i class='bx bxs-trash'></i>Delete</button>
               </td>
      </tr>
      `
  );
 });
  resetForm(); 
}

// reset form
let resetForm=()=>{
 studentName.value="";
 studentDept.value="";
 studentEmail.value="";
 studentAge.value="";
 }

 // delete record
 let deleteRecord=(e)=>{
   e.parentElement.parentElement.remove();
   data.splice(e.parentElement.parentElement.id,1);
   localStorage.setItem("data",JSON.stringify(data));

   console.log(data);
}

//edit record
 let editRecord=(e)=>{
   let selectRecord=e.parentElement.parentElement;
   studentName.value=selectRecord.children[0].innerHTML;
   studentDept.value=selectRecord.children[1].innerHTML;
   studentAge.value=selectRecord.children[2].innerHTML;
   studentEmail.value=selectRecord.children[3].innerHTML;
   deleteRecord(e);
 }