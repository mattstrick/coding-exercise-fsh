"use client";

import Button from "@mui/material/Button/Button";
import Footer from "../components/footer";
import Header from "../components/header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

function WithSearchParams() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("image");
  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-10 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mx-10">
          <div className="text-center w-full">
            <CheckCircleIcon />
          </div>
          <div className="text-center w-full">
            <h2 className="text-2xl">
              Your registered dietitian visit is booked!
            </h2>
          </div>
          <div className="border-2 rounded p-2 m-auto flex">
            <div className="mr-4">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Physician Image"
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div>
              <b>Specialist:</b> {name}
              <br />
              <b>Date:</b> {date}
              <br />
              <b>Time:</b> {time}
              <br />
              <b>Visit Type:</b> 40-minute Video Visit
            </div>
          </div>
          <p>
            <b>Here's what's next:</b>
          </p>
          <p>
            At the time of your visit, click the link in your email, text, or
            app to join the video visit.
          </p>
          <div className="w-full bg-blue-100 border rounded p-4">
            <p>
              <b>Get Ready for Your Zoom Video Visit</b>
            </p>
            <ol>
              <li>
                <b>Install Zoom:</b> If you haven't yet, download Zoom on your
                mobile device. Otherwise, if you're using a computer, you can
                simply join through your web browser.
              </li>
              <li>
                <b>Test Ahead:</b> Check your audio and video with Zoom's Test
                Meeting.
              </li>
              <li>
                <b>Join Your Visit:</b> Click the link from your email, text or
                app to join.
              </li>
            </ol>
            <p>
              <b>Need Help?</b>
              Contact us here or call us at 888-691-7867
            </p>
          </div>
          <div className="text-center w-full">
            <Button variant="contained" className="mr-10">
              Back to Dashboard
            </Button>
            <Button variant="outlined">Add to Calendar</Button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default function Confirmation() {
  return (
    <Suspense>
      <WithSearchParams />
    </Suspense>
  );
}
