import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

type Props = {
    date: Dayjs,
    setDate: (date: Dayjs) => void
}

export default function Calendar({date, setDate}: Props) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));

  const handleChange = (newValue: Dayjs) => {
    setValue(newValue);
    setDate(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={value} onChange={handleChange} />
    </LocalizationProvider>
  );
}
