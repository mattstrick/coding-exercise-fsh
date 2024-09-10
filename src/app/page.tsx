"use client";

import React, { MouseEventHandler } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Calendar from "./components/calendar";
import dayjs, { Dayjs } from "dayjs";

export default function Home() {
  const [date, setDate] = React.useState(dayjs(Date.now()));
  const [timeZone, setTimeZone] = React.useState("Member");

  const handleChange = (e: SelectChangeEvent) => {
    if (e?.target?.value) {
        setTimeZone(e.target.value as string);
    }
  };

  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div>
            <h1>Schedule a visit</h1>
            <p>Choose a date to see available times.</p>
            <p>
              Health coach visits are <b>20 minutes</b>.
            </p>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={timeZone}
                label="TimeZone"
                onChange={handleChange}
              >
                <MenuItem value={"Member"}>Member Time Zone</MenuItem>
                <MenuItem value={"Coach"}>Coach Time Zone</MenuItem>
              </Select>
            </FormControl>
            <Calendar date={date} setDate={setDate}/>
          </div>
          <div></div>
        </main>
      </div>
      <Footer />
    </>
  );
}
