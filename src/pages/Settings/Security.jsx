import { useState } from "react";
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
    <div className="flex min-h-screen bg-[#F5F6F6]">
      <div className="flex-1 p-8">
        <div className="mt-6 flex w-full flex-col justify-start gap-2 space-y-4 rounded-lg bg-[#FCFDFD] p-6 shadow">
          <button
            className="h-[60px] max-w-[271px] rounded-md bg-[#389294] px-6 py-3 text-start text-[15px] text-[#fff] shadow hover:bg-teal-500"
            onClick={openPasswordModal}
          >
            Change Password
          </button>

          <button
            className="h-[60px] max-w-[271px] rounded-md bg-[#389294] px-6 py-3 text-start text-[15px] text-[#fff] shadow hover:bg-teal-500"
            onClick={openPinModal}
          >
            Change Withdrawal PIN
          </button>
        </div>

        {/* Change Password Modal */}
        <Modal
          isOpen={isPasswordModalOpen}
          onRequestClose={closePasswordModal}
          className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50 p-4"
          ariaHideApp={false}
        >
          <div className="w-full max-w-md rounded-md bg-[#fff] p-6">
            <h2 className="mb-4 text-xl font-semibold">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-[#4a5568]">Current Password</label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border border-[#dee2e6] p-2"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-[#4a5568]">New Password</label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border border-[#dee2e6] p-2"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-[#4a5568]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border border-[#dee2e6] p-2"
                  placeholder="Confirm new password"
                />
              </div>
              <div className="mt-6">
                <button className="rounded-md bg-[#389294] px-6 py-2 text-[#fff] shadow hover:bg-teal-500">
                  Save Password
                </button>
                <button
                  className="ml-4 rounded-md bg-[#F44336] px-6 py-2 text-[#fff] shadow hover:bg-red-400"
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
          className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50 p-4"
          ariaHideApp={false}
        >
          <div className="w-full max-w-md rounded-md bg-[#fff] p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Change Withdrawal PIN
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-[#4a5568]">Current PIN</label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border border-[#dee2e6] p-2"
                  placeholder="Enter current PIN"
                />
              </div>
              <div>
                <label className="block text-[#4a5568]">New PIN</label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border border-[#dee2e6] p-2"
                  placeholder="Enter new PIN"
                />
              </div>
              <div>
                <label className="block text-[#4a5568]">Confirm New PIN</label>
                <input
                  type="password"
                  className="mt-2 w-full rounded-md border border-[#dee2e6] p-2"
                  placeholder="Confirm new PIN"
                />
              </div>
              <div className="mt-6">
                <button className="rounded-md bg-[#389294] px-6 py-2 text-[#fff] shadow hover:bg-teal-500">
                  Save PIN
                </button>
                <button
                  className="ml-4 rounded-md bg-[#F44336] px-6 py-2 text-[#fff] shadow hover:bg-red-400"
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
  );
};

export default Security;
