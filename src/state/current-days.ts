const generateDays = () => {
    const amountOfDays = 5;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1)
    return Array(amountOfDays).fill(null).map(() => {
        currentDate.setDate(currentDate.getDate() + 1);
        return currentDate.toISOString();
    });
}

export const CurrentDays = generateDays();

