const Is_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) %2;
if(empCheck == Is_ABSENT)
{
    console.log("UC1 - Employee is Absent ");
    return;
}else{
    console.log("UC1 - Employee is present");
}