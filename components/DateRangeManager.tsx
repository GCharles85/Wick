export class DateRangeManager {
    constructor(dateRanges = []) {
        this.dateRanges = dateRanges.map(range => ({
            start: new Date(range.start),
            end: new Date(range.end)
        }));
        this.daysUntil = null; // To store the calculated days until the next range
    }

    calculateDaysUntilNextRange() {
        const currentDate = new Date();

        // Find the next date range that starts after today
        const nextRange = this.dateRanges
            .filter(range => range.start > currentDate) // Filter out past or ongoing ranges
            .sort((a, b) => a.start - b.start)[0]; // Sort and take the earliest

        if (!nextRange) {
            this.daysUntil = null; // No upcoming ranges
            return "No upcoming date ranges.";
        }

        // Calculate the difference in days
        const timeDiff = nextRange.start - currentDate; // Difference in milliseconds
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

// Example usage
const dateRanges = [
    { start: "2024-12-01", end: "2024-12-10" },
    { start: "2025-01-15", end: "2025-01-20" },
    { start: "2024-11-30", end: "2024-12-05" }
];

const manager = new DateRangeManager(dateRanges);

// Calculate days until the next range
console.log(manager.calculateDaysUntilNextRange()); // Outputs the number of days until the next range
console.log(manager.daysUntil); // Access the stored `daysUntil` value

// Add a new date range
manager.addDateRange("2024-11-28", "2024-11-29");

// Recalculate with the new range
console.log(manager.calculateDaysUntilNextRange()); // Updates with the new closest range
console.log(manager.daysUntil); // Access the updated `daysUntil` value
