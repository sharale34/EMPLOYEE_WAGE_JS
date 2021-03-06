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

    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        // Appends new elements to an array, and returns the new length of the array
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays, empHrs);
        // Storing day and daily wage along with total wage
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
    console.log(empDailyWageMap);
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
    console.log("UC8- Employee Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

    //UC-9A Calc total Wage and total hours worked 
    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }
    let count = 0;
    //Creates an array from an iterable object.
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("UC 9A : Wage with Arrow.: " + "Total Hours: " + totalHours + " Total Wages: " + totalSalary);
    // Show the full workings days, part working days and no working days
    let notWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value, key) => {
        if (value == 8)
            fullWorkingDays.push(key);
        else if (value == 4)
            partWorkingDays.push(key);
        else
            notWorkingDays.push(key);
    });
    console.log("Full working days: " + fullWorkingDays);
    console.log("Part working days: " + partWorkingDays);
    console.log("Non working days: " + notWorkingDays);


    // Ability to store the Day, Hours Worked and Wage Earned in a single object.

    let employeeHours = 0;
    let employeeWorkingDays = 0;
    let employeeDailyHoursAndWageArray = new Array();
    while (employeeHours <= MAX_HRS_IN_MONTH && employeeWorkingDays < NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 3;
        let employeeWorkingHours = getWorkingHours(employeeCheck);
        employeeHours += employeeWorkingHours;
        employeeDailyHoursAndWageArray.push(
            {
                dayCount: employeeWorkingDays,
                dailyHours: employeeWorkingHours,
                dailyWages: calcDailyWage(employeeWorkingHours),
                toString() {
                    return "\nDay" + this.dayCount + " => Working Hours is: " + this.dailyHours + " Wage earned = " + this.dailyWages
                },
            });
    }
    console.log("UC10 Showing daily hours worked and wage earned: " + employeeDailyHoursAndWageArray);
}