// Dependencies - Data.
import headcountForCalendarYear from '@/sampleData/headcountForCalendarYear.json';

// Types
type MonthData = Record<string, number>;

// Composables - Use sample data.
export function useSampleData() {
    // Exposures
    return { getMeasureValues };
}

// Operations - Get measure values.
function getMeasureValues(ids: string[]): number[][] {
    const monthData: MonthData[] = headcountForCalendarYear.months;
    return monthData.map((month) => ids.map((id) => getMeasureValue(id, month)));
}

// Utilities - Get measure value.
function getMeasureValue(id: string, month: MonthData): number {
    switch (id) {
        case 'startingHeadcount':
            return (month['openingHeadcount'] || 0) + (month['startingHires'] || 0);
        case 'endingHeadcount':
            return (month['closingHeadcount'] || 0) + (month['endingTerminations'] || 0);
        default:
            return month[id] ?? 0;
    }
}
