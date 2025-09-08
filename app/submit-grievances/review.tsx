"use client";

import { Button, Tile } from "@carbon/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReviewGrievance() {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = sessionStorage.getItem("grievanceData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  if (!data) return <p>Loading...</p>;

  const handleConfirm = () => {
    // Save to DB via API later
    sessionStorage.setItem(
      "submittedTicket",
      JSON.stringify({
        ...data,
        id: Date.now().toString(),
        status: "Pending",
        submittedDate: new Date().toISOString(),
      })
    );
    router.push("/submit-grievance/confirmation");
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Review Your Grievance</h1>
      <Tile className="space-y-2">
        <p>
          <strong>Category:</strong> {data.category}
        </p>
        <p>
          <strong>District:</strong> {data.district}
        </p>
        <p>
          <strong>Address:</strong> {data.address}
        </p>
        <p>
          <strong>Ward:</strong> {data.ward}
        </p>
        <p>
          <strong>Date:</strong> {data.date}
        </p>
        <p>
          <strong>Description:</strong> {data.description}
        </p>
      </Tile>
      <div className="mt-6 flex gap-4">
        <Button onClick={handleConfirm} kind="primary">
          Confirm & Submit
        </Button>
        <Button kind="secondary" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </main>
  );
}
