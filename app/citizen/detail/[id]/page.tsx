"use client";
import { useParams } from "next/navigation";
export default function CitizenDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>Grievance Detail</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}
