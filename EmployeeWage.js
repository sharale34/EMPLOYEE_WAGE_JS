//Welcome to the Employee Wage Computation Program

//checking whether employee is PRESENT or ABSENT
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("Employee is Absent. Exiting the program");
        return;
    } else {
        console.log("Employee is PRESENT");
    }
}

//Calculate daily employee wage based on part time or full time work
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }

    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee Wage :" + empWage);
}

//Refactor the code to write a function to get work hours
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee Wage(using function) :" + empWage);
}

//Calculating wages for a month assuming 20 working days
{
    const NO_OF_WORKING_DAYS = 20;
    const WAGE_PER_HOUR = 20;
    let totalEmpHrs = 0;
    for (let day = 0; day < NO_OF_WORKING_DAYS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total hours worked in a month " + totalEmpHrs + " Employee Wage for month " + empWage);
}

//Calculating wages till a condition 
{
    const MAX_HRS_IN_MONTH = 160;
    const NO_OF_WORKING_DAYS = 20;
    const WAGE_PER_HOUR = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total days worked "+totalWorkingDays+ " Total hours worked " + totalEmpHrs + " Employee Wage " + empWage);
}