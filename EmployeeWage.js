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

// Store the Daily Wage along with the Total Wage 
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const MAX_HRS_IN_MONTH = 160;
    const NO_OF_WORKING_DAYS = 20;

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

    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        // Appends new elements to an array, and returns the new length of the array
        empDailyWageArr.push(calcDailyWage(empHrs));
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC-6 Total days worked " + totalWorkingDays + " Total hours worked " + totalEmpHrs + " Employee Wage " + empWage);

    //Array Helper Functions
    //UC 7A - Calculate total wage using Array forEach traversal 
    let totEmpWage = 0;
    function sum(dailyWage) {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum); //forEach calls the function sum one time for each element in the array
    console.log("UC-7A Total Days Worked: " + totalWorkingDays + " Total Hrs Worked " + totalEmpHrs + " Emp Wage " + totEmpWage);

    //UC 7A - Calculate total wage using Array reduce method
    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    //The return value of the function is the accumulated result, and is provided as an argument in the next call to the function.
    console.log("UC-7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

    // UC-7B Show the Day along with Daily Wage using Array Map helper function
    let dailyCounter = 0;
    function mapDayWithWage(dailyWage) {
        dailyCounter++;
        return "Day-" + dailyCounter + " = " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("UC-8 Daily Wage Map");
    console.log(mapDayWithWageArr);

    // UC-7C Show days when Full time wage of 160 were earned
    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC-7C Daily Wage Filter When Fulltime Wage Earned");
    console.log(fullDayWageArr);

    // UC-7D Find the first occurrence when Fulltime Wage was earned using find function
    function findFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC-7D First tiem Fulltime wage was earned on Day: " + fullDayWageArr.find(findFulltimeWage));

    // UC-7E Check if Every elemnet of Fulltime wage is truely holding Full time wage
    function isAllFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC-7E Check All elements have Full Time wage: " + fullDayWageArr.every(isAllFulltimeWage));

    // UC-7F Check if there is any Part Time Wage
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("UC-7F Check if there is any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

    // UC-7G Find the no.of days the Employee Worked
    function totalDaysWorked(numOfDays, dailyWage) {
        if (dailyWage > 0)
            return numOfDays + 1;
        return numOfDays;
    }
    console.log("UC-7G Find the no.of days the Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));
}
