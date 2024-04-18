console.log("A3.3_HW_1");
console.log("---- ---- ----");
console.log("1.1");
let employee1Name="Rahul";
let employee1Grade=90;
let employee1HoursWorked =27;
let employee1Salary =45000;
let employee1VacationLeaveTaken =2;
let employee1SickLeaveTaken =1;

let employee1Bonus;

if(employee1HoursWorked>30 && employee1Grade>75 ){
employee1Bonus= 0.2;
}
else if(employee1HoursWorked>25 && employee1Grade>95 ){
  employee1Bonus= 0.15;
}
else if(employee1HoursWorked>25 && employee1Grade>85 ){
employee1Bonus= 0.1;
}

let employee1PFDeduction ;

if(employee1Salary > 35000){
  employee1PFDeduction =employee1Salary*0.125 ;
} else {
  employee1PFDeduction=2500;
}

let employee1TDSDeduction ;
if(employee1Salary>40000){
  employee1TDSDeduction = (employee1Salary*0.10);
}else{
  employee1TDSDeduction =199;
}

let employee1VacationDeduction  ;
if(employee1VacationLeaveTaken>0){
  employee1VacationDeduction = employee1VacationLeaveTaken *(employee1Salary/30);
}

let employee1SickDeduction ;
if(employee1SickLeaveTaken>0){
    employee1SickDeduction = employee1SickLeaveTaken *(employee1Salary/30);
}

const employee1NetSalary = employee1Salary + (employee1Salary * employee1Bonus) - (employee1SickDeduction + employee1VacationDeduction + employee1TDSDeduction + employee1PFDeduction);

const employee1Payslip = "Employee Name: " +  employee1Name + "\nGrade: " + employee1Grade + "\nHours Worked: " + employee1HoursWorked + "\nSalary: " + employee1Salary + "\nBonus: " + employee1Bonus +"\nPF Deduction: "+ employee1PFDeduction + "\nTDS Deduction: "+ employee1TDSDeduction + "\nVacation Deduction: " + employee1VacationDeduction +"\nSick Deduction: " + employee1SickDeduction + "\nNet Salary: "+ employee1NetSalary;

console.log(employee1Payslip);

console.log("---- ---- ----");
