let studentName=document.getElementById('studentName');
let studentDept=document.getElementById('studentDept');
let studentAge=document.getElementById('studentAge');
let studentEmail=document.getElementById('studentEmail');
let saveBtn=document.getElementById('save-btn');
let cancelBtn=document.getElementById('cancel');
let studentData=document.getElementById('studentData');


let data=[
   {id:1,stdName:"Rajalingam",stdDept:"IT",stdAge:23,stdEmail:"raj12@gmail.com"},
   {id:2,stdName:"Raja",stdDept:"IT",stdAge:23,stdEmail:"rajeh12@gmail.com"},

];

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
      <td>${x.stdEmail}</td>
    <td>
   <button class="edit-btn"><i class='bx bxs-edit'></i>Edit</button>
   <button class="delete-btn"><i class='bx bxs-trash'></i>Delete</button>
               </td>
      </tr>
      `
   ))

}