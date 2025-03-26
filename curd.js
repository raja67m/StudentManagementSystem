
let saveBtn=document.getElementById('save-btn').value;
let cancelBtn=document.getElementById('cancel').value;
let studentData=document.getElementById('studentData');
var studentName=document.getElementById('studentName');
var studentDept=document.getElementById('studentDept');
var studentAge=document.getElementById('studentAge');
var studentEmail=document.getElementById('studentEmail');

let data=[
   {id:1,studentName:"Suresh",studentDept:"IT",studentAge:23,studentEmail:"suresh@gmail.com"},
   {id:2,studentName:"Raj",studentDept:"IT",studentAge:23,studentEmail:"raj123@gmail.com"},

];

// display data to table
function readAll(){
   localStorage.setItem('object',JSON.stringify(data));
   let object=localStorage.getItem('object');
   let objectData=JSON.parse(object);
   let elements='';

   objectData.map(record=>(
      elements +=`
      <tr>
      <td>${record.studentName}</td>
      <td>${record.studentDept}</td>
      <td>${record.studentAge}</td>
      <td>${record.studentEmail}</td>
    <td>
   <button type="button" class="edit-btn" onclick={edit(${record.id})}><i class='bx bxs-edit'></i>Edit</button>
   <button type="button" class="delete-btn" onclick={deleteRecord(${record.id})}><i class='bx bxs-trash'></i>Delete</button>
               </td>
      </tr>
      `
   ));

   studentData.innerHTML=elements;


}
// create a  new record

function createRecord(){
   var studentName=document.querySelector('.studentName').value;
   var studentDept=document.querySelector('.studentDept').value;
   var studentAge=document.querySelector('.studentAge').value;
   var studentEmail=document.querySelector('.studentEmail').value;
   if(studentAge<18 || studentAge>26){
   alert("Above 18 to 26 only eligible");
   }
   else{
      var addData={id:3,studentName:studentName,studentAge:studentAge,studentDept:studentDept,studentEmail:studentEmail};

      data.push(addData);
      console.log(addData)
      readAll();
      resetForm();
   }

  
}

// edit function

function edit(id){
document.querySelector('.cancel').style.display="block";
document.querySelector('.save-btn').style.display="none";
 
var obj=data.find(rec=>rec.id === id);
document.querySelector('.studentName').value=obj.studentName;
document.querySelector('.studentDept').value=obj.studentDept;
document.querySelector('.studentAge').value=obj.studentAge;
document.querySelector('.studentEmail').value=obj.studentEmail;
document.querySelector('.id').value=obj.id;
}

// update the function
function update(){
   // change the block style
   document.querySelector('.cancel').style.display="none";
document.querySelector('.save-btn').style.display="block";
   var id =parseInt(document.querySelector('.id').value);
   var studentName=document.querySelector('.studentName').value;
   var studentDept=document.querySelector('.studentDept').value;
   var studentAge=document.querySelector('.studentAge').value;
   var studentEmail=document.querySelector('.studentEmail').value;
   var index=data.findIndex(rec=>rec.id===id);
   data[index]={studentName,studentAge,studentDept,studentAge,studentEmail};
   readAll();
  resetForm();

}
// delete function
function deleteRecord(id){
data=data.filter(rec=>rec.id!==id);
readAll();
}


// reset form
function resetForm(){
   studentName.value="",
   studentAge.value="",
   studentDept.value="",
   studentEmail.value=""
}