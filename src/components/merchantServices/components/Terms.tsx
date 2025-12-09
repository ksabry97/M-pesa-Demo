import React from 'react'

function Terms() {
  return (
    <>
<div className="bg-white rounded-2xl shadow p-6">
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Terms & Cancellation Policy
  </h3>

  <ul className="space-y-3 text-gray-700">
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
      Free cancellation up to 24 hours before the appointment
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
      Rescheduling allowed at no extra cost
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
      Full refund for cancellations within policy
    </li>
  </ul>
</div>

    </>
  )
}

export default Terms
