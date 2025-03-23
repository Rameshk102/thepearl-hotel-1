import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Room Enquiries (Unread)",
  description: "View all unread room enquiries",
}

export default function RoomEnquiriesUnreadPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Room Enquiries (Unread)</h1>
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <p className="text-yellow-700">This feature is coming soon. Check back later for updates.</p>
      </div>
    </div>
  )
}

