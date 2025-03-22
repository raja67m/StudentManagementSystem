let studentName=document.getElementById('studentName');
let studentDept=document.getElementById('studentDept');
let studentAge=document.getElementById('studentAge');
let studentEmail=document.getElementById('studentEmail');
let saveBtn=document.getElementById('save-btn');
let cancelBtn=document.getElementById('cancel');

let form=document.getElementById('form');

form.addEventListener('submit',function(e){
e.preventDefault();
formValidation();
acceptData();

});

// form validation function
let formValidation=()=>{
   if(studentName.value === ""){
  console.log("The name was'nt to be empty");
   }else{
      console.log("succesfully insert")
      console.log("The name was",studentName);
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
}
