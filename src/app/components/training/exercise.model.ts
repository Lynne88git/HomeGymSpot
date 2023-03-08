export interface Exercise {
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: DataTransfer;
    state?: 'complete' | 'cancelled' | null; 
}