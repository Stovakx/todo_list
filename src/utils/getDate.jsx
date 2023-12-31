import dayjs from 'dayjs';
//todo change to first day will be monday(dayjs.weekday(-7))
export function getMonth(month = dayjs().month()){
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, -7)).day();
    let currentMonthCount = 1 - firstDayOfTheMonth;

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            const currentDate = dayjs(new Date(year, month, currentMonthCount));
            currentMonthCount++;
            return currentDate;
        });
    });
    return daysMatrix;
}
//přidání class pro dnešek a vybraný den 
export const getCurrentDayClass= (day, selectedDay) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const slcDay = selectedDay && selectedDay.format(format)
    if(nowDay === currentDay){
        return 'currentDay';
    }else if(currentDay === slcDay){
        return 'selectedDay'
    }else{
        return "";
    }
    
}