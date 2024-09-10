"use client";

import React, { MouseEventHandler } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Calendar from "./components/calendar";
import dayjs from "dayjs";
import Switch from "@mui/material/Switch";
import DateList from "./components/dateList";

export default function Home() {
  const [date, setDate] = React.useState(dayjs(Date.now()));
  const [timeZone, setTimeZone] = React.useState("Member");
  const [showSpecialists, setShowSpecialists] = React.useState(false);

  const handleChange = (e: SelectChangeEvent) => {
    if (e?.target?.value) {
      setTimeZone(e.target.value as string);
    }
  };

  const handleSpecialistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSpecialists(e.target.checked);
  };

  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-10 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex">
            <div>
              <h1 className="text-3xl">Schedule a visit</h1>
              <p>Choose a date to see available times.</p>
              <p className="mb-6">
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
              <Calendar date={date} setDate={setDate} />
            </div>
            <div className="w-56">
              <div>
                <Switch
                  checked={showSpecialists}
                  onChange={handleSpecialistChange}
                  inputProps={{ "aria-label": "Show only my specialists" }}
                />{" "}
                Show only my specialists
              </div>
              <div>
                <DateList date={date} setDate={setDate} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
