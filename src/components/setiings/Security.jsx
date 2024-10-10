import  { useState } from "react";
import Modal from "react-modal";



const Security = () => {
   // State for modals
   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
   const [isPinModalOpen, setIsPinModalOpen] = useState(false);
 
   // Functions to open/close modals
   const openPasswordModal = () => setIsPasswordModalOpen(true);
   const closePasswordModal = () => setIsPasswordModalOpen(false);
 
   const openPinModal = () => setIsPinModalOpen(true);
   const closePinModal = () => setIsPinModalOpen(false);
  return (
    <div className="min-h-screen flex bg-[#F5F6F6]">
    <div className="flex-1 p-8">
      <div className="flex flex-col justify-start gap-2 mt-6 space-y-4 bg-[#FCFDFD] p-6 rounded-lg shadow w-full">
        <button
          className="max-w-[271px] h-[60px] text-[15px] text-start bg-[#389294] text-[#fff] px-6 py-3 rounded-md shadow hover:bg-teal-500"
          onClick={openPasswordModal}
        >
          Change Password
        </button>

        <button
          className="max-w-[271px] text-[15px] h-[60px] text-start bg-[#389294] text-[#fff] px-6 py-3 rounded-md shadow hover:bg-teal-500"
          onClick={openPinModal}
        >
          Change Withdrawal PIN
        </button>
      </div>

      {/* Change Password Modal */}
      <Modal
        isOpen={isPasswordModalOpen}
        onRequestClose={closePasswordModal}
        className="fixed inset-0 bg-[#000] bg-opacity-50 flex items-center justify-center p-4"
        ariaHideApp={false}
      >
        <div className="bg-[#fff] p-6 rounded-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-[#4a5568]">Current Password</label>
              <input
                type="password"
                className="mt-2 w-full border border-[#dee2e6] rounded-md p-2"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-[#4a5568]">New Password</label>
              <input
                type="password"
                className="mt-2 w-full border border-[#dee2e6] rounded-md p-2"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-[#4a5568]">
                Confirm New Password
              </label>
              <input
                type="password"
                className="mt-2 w-full border border-[#dee2e6] rounded-md p-2"
                placeholder="Confirm new password"
              />
            </div>
            <div className="mt-6">
              <button className="bg-[#389294] text-[#fff] px-6 py-2 rounded-md shadow hover:bg-teal-500">
                Save Password
              </button>
              <button
                className="ml-4 bg-[#F44336] text-[#fff] px-6 py-2 rounded-md shadow hover:bg-red-400"
                onClick={closePasswordModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Change Withdrawal PIN Modal */}
      <Modal
        isOpen={isPinModalOpen}
        onRequestClose={closePinModal}
        className="fixed inset-0 bg-[#000] bg-opacity-50 flex items-center justify-center p-4"
        ariaHideApp={false}
      >
        <div className="bg-[#fff] p-6 rounded-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">
            Change Withdrawal PIN
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-[#4a5568]">Current PIN</label>
              <input
                type="password"
                className="mt-2 w-full border border-[#dee2e6] rounded-md p-2"
                placeholder="Enter current PIN"
              />
            </div>
            <div>
              <label className="block text-[#4a5568]">New PIN</label>
              <input
                type="password"
                className="mt-2 w-full border border-[#dee2e6] rounded-md p-2"
                placeholder="Enter new PIN"
              />
            </div>
            <div>
              <label className="block text-[#4a5568]">Confirm New PIN</label>
              <input
                type="password"
                className="mt-2 w-full border border-[#dee2e6] rounded-md p-2"
                placeholder="Confirm new PIN"
              />
            </div>
            <div className="mt-6">
              <button className="bg-[#389294] text-[#fff] px-6 py-2 rounded-md shadow hover:bg-teal-500">
                Save PIN
              </button>
              <button
                className="ml-4 bg-[#F44336] text-[#fff] px-6 py-2 rounded-md shadow hover:bg-red-400"
                onClick={closePinModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  </div>
  )
}

export default Security