"use client";
import { Button, TextArea, TextInput, Tile } from "@carbon/react";
import Link from "next/link";
import Toggle from "@/components/toggle";

export default function Home() {
  return (
    <main>
      <h1 className="heading">Citizen Dashboard</h1>
      <Toggle />
      <div className="container">
        <p>Welcome Text</p>
        <p>गुनासो सजिलै दर्ता र ट्र्याक गर्नुहोस्</p>
        <div>
          <Button className="btn" kind="primary">
            Submit Grivance
          </Button>
          <Button className="btn" kind="secondary">
            My Grievance
          </Button>
        </div>
      </div>

      <div className="box-container grid grid-cols-4 gap-4">
        <Tile className="box text-center font-semibold">
          500+ Gunaso submitted
        </Tile>
        <Tile className="box text-centerfont-semibold">300+ Resolved</Tile>
        <Tile className="box text-center font-semibold">100 Pending</Tile>
        <Tile className="box text-center font-semibold">20 Escalated</Tile>
      </div>
      <footer className="footer">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/my-grievances">
          My Grievances
        </Link>
        <Link className="link" href="/submit-grievances">
          Submit Grievances
        </Link>
        <Link className="link" href="/notifications">
          Notification
        </Link>
      </footer>
    </main>
  );
}
