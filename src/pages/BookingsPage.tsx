import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Layout } from "../components/Layout";
import { BookingCard } from "../components/BookingCard";
import { useProductStore } from "../store/useProductStore";
import type { BookingStatus } from "../types";

const BookingsPage = () => {
  const getUserBookings = useProductStore((state) => state.getUserBookings);
  const cancelBooking = useProductStore((state) => state.cancelBooking);
  const bookings = getUserBookings();

  const [selectedStatus, setSelectedStatus] =
    useState<BookingStatus>("pending");
  const [showCancelModal, setShowCancelModal] = useState<string | null>(null);
  const [cancellationReason, setCancellationReason] = useState("");

  // Filter bookings by status
  const filteredBookings = bookings.filter(
    (booking) => booking.status === selectedStatus
  );

  // Group bookings by status for tabs
  const statusCounts = {
    pending: bookings.filter((b) => b.status === "pending").length,
    ready: bookings.filter((b) => b.status === "ready").length,
    active: bookings.filter((b) => b.status === "active").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
    completed: bookings.filter((b) => b.status === "completed").length,
  };

  const statusTabs: Array<{ value: BookingStatus; label: string }> = [
    { value: "pending", label: "Pending" },
    { value: "ready", label: "Ready" },
    { value: "active", label: "Active" },
    { value: "cancelled", label: "Canceled" },
    { value: "completed", label: "Finished" },
  ];

  const handleCancelBooking = () => {
    if (showCancelModal) {
      cancelBooking(showCancelModal, cancellationReason || undefined);
      setShowCancelModal(null);
      setCancellationReason("");
    }
  };

  return (
    <Layout>
      <div className="w-full bg-background-primary min-h-screen">
        {/* Page Header Section - Back Button + Title */}
        <div className="w-full h-[80px] flex items-center px-8 py-2 bg-background-primary">
          <div className="w-full max-w-[1440px] mx-auto flex items-center gap-2">
            <button
              onClick={() => window.history.back()}
              className="
                bg-button-outline-bg
                border
                border-button-outline-border
                h-10
                px-4
                py-2
                rounded-xl
                flex
                items-center
                gap-2
                text-body-3
                font-medium
                text-button-outline-fg
                hover:opacity-90
                transition-opacity
              "
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <h1 className="flex-1 text-h5 font-semibold text-text-highContrast">
              My bookings
            </h1>
          </div>
        </div>

        {/* Status Tabs Section */}
        <div className="w-full h-[56px] bg-background-primary  border-[rgba(0,17,238,0.06)]">
          <div className="w-full max-w-[1440px] mx-auto h-full flex items-center px-8">
            <div className="w-full flex items-center h-[40px]">
              {statusTabs.map((tab) => {
                const isActive = selectedStatus === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedStatus(tab.value)}
                    className={`
                      flex-1
                      h-10
                      px-2
                      flex
                      items-center
                      justify-center
                      text-body-3
                      font-medium
                      border-b-2
                      transition-colors
                      ${
                        isActive
                          ? "border-[#5151cd] text-accent"
                          : "border-[rgba(0,17,238,0.06)] text-button-outline-fg"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full px-8 py-8">
          <div className="w-full max-w-[1440px] mx-auto">
            {/* Section Title */}
            <div className="mb-6">
              <h2 className="text-h5 font-semibold text-text-highContrast">
                <span>{statusTabs.find((tab) => tab.value === selectedStatus)?.label} </span>
                <span className="text-[20px] font-medium text-text-primary leading-6">
                  ({filteredBookings.length} Service
                  {filteredBookings.length !== 1 ? "s" : ""})
                </span>
              </h2>
            </div>

            {/* Bookings Grid - 2 columns on desktop, 1 column on mobile */}
            {/* Gap is 24px (700px - 676px = 24px) as per Figma design */}
            {filteredBookings.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
                {filteredBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    showCancelButton={
                      booking.status === "pending" || booking.status === "ready"
                    }
                    onCancel={(bookingId) => setShowCancelModal(bookingId)}
                    onClick={() => {
                      // Navigate to booking details
                      console.log("Navigate to booking:", booking.id);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-primary text-lg mb-2">
                  No bookings found
                </p>
                <p className="text-text-secondary text-sm">
                  You don't have any {selectedStatus} bookings.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Cancel Booking Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background-primary rounded-[12px] p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold text-text-highContrast mb-4">
                Cancel Booking
              </h2>
              <p className="text-text-primary mb-4">
                Are you sure you want to cancel this booking? This action cannot
                be undone.
              </p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-highContrast mb-2">
                  Reason for cancellation (optional)
                </label>
                <textarea
                  value={cancellationReason}
                  onChange={(e) => setCancellationReason(e.target.value)}
                  className="
                    w-full
                    px-4
                    py-2
                    border
                    border-border-primary
                    rounded-[8px]
                    text-sm
                    text-text-highContrast
                    bg-background-surface
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-accent
                  "
                  rows={3}
                  placeholder="Please provide a reason..."
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => {
                    setShowCancelModal(null);
                    setCancellationReason("");
                  }}
                  className="
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-text-primary
                    bg-background-surface
                    border
                    border-border-primary
                    rounded-[8px]
                    hover:bg-background-panel
                    transition-colors
                  "
                >
                  Keep Booking
                </button>
                <button
                  onClick={handleCancelBooking}
                  className="
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    bg-red-600
                    rounded-[8px]
                    hover:bg-red-700
                    transition-colors
                  "
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingsPage;
