import * as React from "react";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  date: Dayjs;
  setDate: (date: Dayjs) => void;
};

const NUM_OF_DAYS = 10;
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DateList({ date, setDate }: Props) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));

  React.useEffect(() => {
    setValue(date);
  }, [date])

  const handleChange = (e: any) => {
    setValue(dayjs(e?.target?.dataset?.day));
    setDate(dayjs(e?.target?.dataset?.day));
  };

  const now = dayjs(Date.now());
  const daysToDisplay = [];

  // Get a list of the days we want to display
  for (let i = 0; i < NUM_OF_DAYS; i++) {
    const newDay = now.add(i, "day");
    daysToDisplay.push(newDay);
  }

  return (
    <div className="flex overflow-scroll">
      {daysToDisplay.map((dayToDisplay) => (
        <div
          key={dayToDisplay.toString()}
          className={`w-16 rounded-lg border-cyan-500 border-2 mr-2 ${
            dayToDisplay.isSame(value, "d") ? "bg-cyan-500 text-[#ffffff]" : ""
          }`}
          data-day={dayToDisplay.toString()}
          onClick={handleChange}
        >
          {DAYS[dayToDisplay.day()]}
          <br />
          {MONTHS[dayToDisplay.month()]} {dayToDisplay.date()}
        </div>
      ))}
    </div>
  );
}
