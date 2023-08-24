import dayjs from "dayjs";
export const diffDays = (date: string) => {
    const getCurrentDay = dayjs().startOf('day');
    const getDay = dayjs(date).startOf('day');
    return getDay.diff(getCurrentDay, 'day');
}

