//Welcome to the Employee Wage Computation Program

//checking whether employee is PRESENT or ABSENT
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT)
    {
        console.log("Employee is Absent. Exiting the program");
        return;
    }else
    {
        console.log("Employee is PRESENT");
    }
}