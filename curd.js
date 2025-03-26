
let saveBtn=document.getElementById('save-btn').value;
let cancelBtn=document.getElementById('cancel').value;
let studentData=document.getElementById('studentData');
var studentName=document.getElementById('studentName');
var studentDept=document.getElementById('studentDept');
var studentAge=document.getElementById('studentAge');
var studentEmail=document.getElementById('studentEmail');

let data=[
   {id:1,studentName:"Rajalingam",studentDept:"IT",studentAge:23,studentEmail:"raj12@gmail.com"},
   {id:2,studentName:"Raja",studentDept:"IT",studentAge:23,studentEmail:"rajeh12@gmail.com"},

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
   <button type="button" class="delete-btn"><i class='bx bxs-trash'></i>Delete</button>
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
   var addData={id:3,studentName:studentName,studentAge:studentAge,studentDept:studentDept,studentEmail:studentEmail};

data.push(addData);
console.log(addData)
readAll();
resetForm();
}

// edit function

function edit(id){
document.querySelector('.cancel').style.display="block";
document.querySelector('.save-btn').style.display="none";

}

// reset form
function resetForm(){
   studentName.value="",
   studentAge.value="",
   studentDept.value="",
   studentEmail.value=""
}