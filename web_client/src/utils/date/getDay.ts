import dayjs from "dayjs";

interface GetDay {
    (date: string): dayjs.Dayjs
}

export const getDay: GetDay = (date) => {
    return dayjs(date).startOf('day');
}
