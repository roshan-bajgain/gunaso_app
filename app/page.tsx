"use client";
import { Button, TextArea, TextInput } from "@carbon/react";
import { use } from "react";

export default function Home() {
  return (
    <main>
      <h1>Citizen Dashboard</h1>
      <p>Welcome Text</p>
      <p>गुनासो सजिलै दर्ता र ट्र्याक गर्नुहोस्</p>
      <div>
        <Button className="btn" kind="primary">Submit Grivance</Button>
        <Button className="btn" kind="secondary">My Grievance</Button>
      </div>
    </main>
  );
}
