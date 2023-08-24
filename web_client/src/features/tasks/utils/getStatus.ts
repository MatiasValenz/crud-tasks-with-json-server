import {diffDays} from "./diffDays";
import {alertDayConfig} from "../../../config/alertDayConfig";

type statusTypes = "Completed" | "Overdue" | "Pendiente" | "Underway" | "AlmostLate";

interface IGetStatus {
    dueDate: string,
    isComplete: boolean
}

// This function returns the status and color of the task
export const getStatus: (props: IGetStatus) => statusTypes = ({dueDate, isComplete}) => {
    if (isComplete) return "Completed";

    let status: statusTypes = "Underway";
    const days = diffDays(dueDate); // get the difference between dueDate and today

    if (days < 0) {
        status = "Overdue";
    } else if (days <= alertDayConfig.alertDay) {
        status = "AlmostLate";
    }

    return status
}
