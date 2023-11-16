/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WorkDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

enum Weekend {
    Saturday,
    Sunday
}

const isWeekend = (day: WorkDay | Weekend): day is WorkDay => {
    return day in WorkDay;
}
