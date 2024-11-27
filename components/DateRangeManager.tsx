export class DateRangeManager {
    /*
    Doing init of dateRanges array in the ctor again
    */
    constructor(range = []) { // Accept an array of ranges
        this.dateRanges = range.map(item => ({
            start: new Date(item.start),
            end: new Date(item.end)
        })); // Populate the array using the input
        console.log(JSON.stringify(this.dateRanges, null, 2)); // Log the result
        this.daysUntil = null; // To store the calculated days until the next range
    }
    

    calculateDaysUntilNextRange() {
        const currentDate = new Date();
        console.log("range length " + this.dateRanges.length);
        for (let step = 0; step < this.dateRanges.length; step++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log(`date range ${step} ` + JSON.stringify(this.dateRanges[step], null, 2));
          }
         
        
        const filteredRanges = this.dateRanges
          .filter(range => range.start < currentDate);
          for (let step = 0; step < filteredRanges.length; step++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log(`filtered date range ${step} ` + JSON.stringify(filteredRanges[step], null, 2));
          }

          const nextRanges = filteredRanges.sort((a, b) => a.start - b.start);
          for (let step = 0; step < nextRanges.length; step++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log(`next range ${step} ` + JSON.stringify(nextRanges[step], null, 2));
          }


        // Find the next date range that starts after today
         const nextRange = nextRanges[0];
         console.log(`next range ${nextRange}`);
        //     .filter(range => range.start > currentDate) // Filter out past or ongoing ranges
        //     .sort((a, b) => a.start - b.start)[0]; // Sort and take the earliest

        if (!nextRange) {
            this.daysUntil = null; // No upcoming ranges
            return "No upcoming date ranges.";
        }

        // Calculate the difference in days
        const timeDiff = currentDate - nextRange.start ; // Difference in milliseconds
        this.daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

        return this.daysUntil;
    }

    // Add a new date range
    addDateRange(start, end) {
        this.dateRanges.push({
            start: new Date(start),
            end: new Date(end)
        });
        // Sort the ranges for consistency
        this.dateRanges.sort((a, b) => a.start - b.start);
    }
}

