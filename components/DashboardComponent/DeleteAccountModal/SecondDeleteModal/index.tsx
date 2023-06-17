import { useContext, useState } from "react";
import { SecondModalContext } from "@/context/UserDashboardLayout";
import { useRouter } from "next/router";

interface SecondDeleteModalDataType {
  handleDeleteUser: () => void;
}

export function SecondDeleteModal({handleDeleteUser}: SecondDeleteModalDataType) {
  const { showSecondModal, setShowSecondModal } =
    useContext(SecondModalContext);
  const [deleteText, setDeleteText] = useState("");
  const router = useRouter();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDeleteText(value);
  };

  const handleDelete = () => {
    if (deleteText === "Delete My Account") {
      handleDeleteUser();
      setShowSecondModal(false);
      router.push("/");
    }
  };

  return (
    <div
      style={{ display: showSecondModal ? "block" : "none" }}
      className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]"
    >
      <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] md:w-[400px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-[30px] font-poppins ">
        <h1 className="text-center text-[20px] text-[#AC0108] font-[500] lg:text-[24px] mb-[10px] ">
          Are Absolutely You Sure?
        </h1>

        <p className="text-center text-[16px] mb-[30px]">
          To delete your account, please type &quot;
          <span className="font-[700]">Delete My Account</span>&quot; to
          confirm.
        </p>

        <div className=" ">
          <input
            type="text"
            placeholder="Enter Text"
            value={deleteText}
            onChange={handleTextChange}
            className="p-[15px] border-[2px] border-[#F3F3F3] w-[100%] outline-none "
          />

          <div className="flex gap-x-[20px] mt-[30px] ">
            <button
              onClick={() => setShowSecondModal(false)}
              className="bg-[#9C9C9C] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%] "
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              type="submit"
              className="bg-[#AC0108] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
