export class DateRangeManager {
    constructor() {
        this.dateRanges = [];
        this.daysUntil = null; // To store the calculated days until the next range
    }

    calculateDaysUntilNextRange(newRange = null) {
        const currentDate = new Date();

        // Add the new range if provided
        if (newRange) { //TODO value in this.dateRanges keeps getting overwritten
            const { start, end } = newRange;
            this.dateRanges.push({
                start: new Date(start),
                end: new Date(end)
            });      
        }

        // Filter for ranges starting after the current date
        const filteredRanges = this.dateRanges.filter(range => range.start < currentDate);
        console.log("Filtered dateRanges (future):", JSON.stringify(filteredRanges, null, 2));

        // Sort the ranges to maintain chronological order
        const sortedRanges = filteredRanges.sort((a, b) => a.start - b.start);

        console.log("Updated dateRanges:", JSON.stringify(this.dateRanges, null, 2));
        // Find the next upcoming range
        const nextRange = sortedRanges[0];

        if (!nextRange) {
            this.daysUntil = null; // No upcoming ranges
            return "No upcoming date ranges.";
        }

        // Calculate the difference in days
        const timeDiff = currentDate - nextRange.start; // Difference in milliseconds
        this.daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

        return this.daysUntil;
    }

    // Add a new date range manually
    addDateRange(start, end) {
        this.dateRanges.push({
            start: new Date(start),
            end: new Date(end)
        });
        this.dateRanges.sort((a, b) => a.start - b.start);
    }
}
