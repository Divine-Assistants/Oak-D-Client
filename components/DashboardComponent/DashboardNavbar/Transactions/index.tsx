import Image from "next/image";
import { useState } from "react";
import { TransactionType } from "../../TransactionNavbar";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface DashboardTransactionType {
  packageInfo: TransactionType[];
}

export function Transactions({ packageInfo }: DashboardTransactionType) {
  const [showDetails, setShowDetails] = useState(false);
  const [isPackageClick, setIsPackageClick] = useState<string | null>("");

  const handleShowDetails = (infoID: string) => {
    setShowDetails(!showDetails);
    setIsPackageClick(infoID);
  };

  if (packageInfo?.length === 0) {
    return <div></div>;
  }
  // console.log(packageInfo);

  function downloadPDF(PDFURL: string) {
    const pdfUrl = PDFURL;

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice${Math.random()}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log("Error downloading PDF:", error);
      });
  }

  return (
    <div>
      <div className="flex justify-between mt-[20px] lg:mt-[50px] lg:mb-[25px] ">
        <p className="text-[20px] lg:text-[24px] font-[600] text-[#1E1E1E]">
          Transactions
        </p>
        <button className="text-[#0A089A] text-[13px] lg:text-[16px] font-[500]">
          View All
        </button>
      </div>

      <section className="w-[100%] lg:hidden flex flex-col rounded-[8px] px-[20px] ">
        {packageInfo.map((item: TransactionType) => {
          const date = new Date(item.createdAt);
          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
            day: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-US", options);

          if(item.isVerified === true) {
            return (
              <div
                key={item._id}
                className="mb-[20px] bg-[#FEFEFE] rounded-[8px] p-[10px] "
              >
                <div className="flex w-[100%] ">
                  <input type="checkbox" />
                  <div className="mr-auto ml-[10px] ">
                    <p className="text-[16px] font-[600] text-[#1E1E1E]">
                      {item.invoiceNumber}
                    </p>
                    <p className="text-[14px] font-[600] text-[#B1B1B1]">{`${item.sender.firstName} ${item.sender.lastName}`}</p>
                  </div>
  
                  <div className="flex items-center ">
                    <p className="mr-[10px] ">{formattedDate}</p>
                    <Image
                      src={
                        showDetails && isPackageClick === item._id
                          ? `../img/arrow-up-icon.svg`
                          : `../img/arrow-down-icon.svg`
                      }
                      alt="Arrow Down"
                      width={15}
                      height={15}
                      onClick={() => handleShowDetails(item._id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
  
                {isPackageClick === item._id && showDetails && (
                  <div>
                    <div className="flex justify-between my-[15px] px-[20px] ">
                      <p className="text-[#B1B1B1] text[14px] font-[500] ">
                        Recipient
                      </p>
                      <p className="text-[#1E1E1E] text[14px] font-[500] ">{`${item.receiver.firstName} ${item?.receiver.lastName}`}</p>
                    </div>
                    <div className="flex justify-between my-[15px] px-[20px] ">
                      <p className="text-[#B1B1B1] text[14px] font-[500] ">
                        Services
                      </p>
                      <p className="text-[#1E1E1E] text[14px] font-[500] ">
                        {item.packageType}
                      </p>
                    </div>
                    <div className="flex justify-between my-[15px] px-[20px] ">
                      <p className="text-[#B1B1B1] text[14px] font-[500] ">
                        Arrival
                      </p>
                      <p className="text-[#1E1E1E] text[14px] font-[500] ">
                        {item.arrival}
                      </p>
                    </div>
                    <div className="flex justify-between my-[15px] px-[20px] ">
                      <p className="text-[#B1B1B1] text[14px] font-[500] ">
                        Amount
                      </p>
                      <p className="text-[#1E1E1E] text[14px] font-[500] ">
                        {item.price}
                      </p>
                    </div>
  
                    <div className="flex justify-center border-[2px] border-[#1E1E1E] rounded-[15px] p-[15px] cursor-pointer "
                      onClick={() => {
                        downloadPDF(item?.invoiceURL);
                      }}
                    >
                      <Image
                        src="../img/download-icon.svg"
                        alt=""
                        width={25}
                        height={25}
                        className="mr-[10px] "
                      />
                      <p className="text-[16px] font-[500] ">Download</p>
                    </div>
                  </div>
                )}
              </div>
            );
          }

        })}
      </section>

      <section className="hidden lg:block">
        <table className="w-full font-[400]">
          <thead className="bg-[#FFFFFF] rounded-[10px] border-b-[10px] border-[#F5F5F5] text-[18px] ">
            <tr className="text-left ">
              <th className="px-[10px] py-[10px] "></th>
              <th className="pr-[10px] py-[10px]">Invoice</th>
              <th className="px-[10px] py-[10px]">Sender</th>
              <th className="px-[10px] py-[10px]">Receipient</th>
              <th className="px-[10px] py-[10px]">Billing Date</th>
              <th className="px-[10px] py-[10px]">Service</th>
              <th className="px-[10px] py-[10px]">Arrival</th>
              <th className="px-[10px] py-[10px]">Amount</th>
              <th className="px-[10px]"></th>
            </tr>
          </thead>

          <tbody className="my-[20px] py-[20px] ">
            {packageInfo.map((item: TransactionType) => {
              const date = new Date(item.createdAt);
              const options: Intl.DateTimeFormatOptions = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              const formattedDate = date.toLocaleDateString("en-US", options);

              if(item.isVerified === true) {
                return (
                  <tr
                    className="bg-[#FFFFFF] border-b-4 border-[#F5F5F5] text-[16px] "
                    key={item._id}
                  >
                    <td className="px-[10px] py-[15px]">
                      <input type="checkbox" className="cursor-pointer" />
                    </td>
                    <td className="pr-[10px] py-[15px]">{item.invoiceNumber}</td>
                    <td className="px-[10px] py-[15px]">{`${item.sender.firstName} ${item.sender.lastName}`}</td>
                    <td className="px-[10px] py-[15px]">{`${item.receiver?.firstName} ${item.receiver?.lastName}`}</td>
                    <td className="px-[10px] py-[15px]">{formattedDate}</td>
                    <td className="px-[10px] py-[15px]">{item.packageType}</td>
                    <td className="px-[10px] py-[15px]">{item.arrival}</td>
                    <td className="px-[10px] py-[15px]">${item.price}</td>
                    <td className="px-[10px] py-[15px]">
                      <div
                        className="flex justify-center items-center  cursor-pointer border-[1px] border-[#1E1E1E] rounded-[8px] px-[15px] py-[8px]"
                        onClick={() => {
                          downloadPDF(item?.invoiceURL);
                        }}
                      >
                        <Image
                          src="../img/download-icon.svg"
                          alt=""
                          width={15}
                          height={15}
                          className="mr-[2px] "
                        />
                        <p className="text-[14px] font-[500] ">Download</p>
                      </div>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </section>

      <div className="flex justify-center mt-[48px] relative">
          <button className="px-[23px] py-[18px] bg-[#F3F3F3] rounded-[15px] text-[18px] font-medium flex items-center gap-x-[20px] absolute left-0 top-[-50%]" >
            <FaArrowLeft />
            Previous
          </button>

          <div className="flex gap-x-[28px] w-[30%] justify-center">
            <p className="cursor-pointer"></p>
          </div>

          <button className="px-[23px] py-[18px] bg-[#F3F3F3] rounded-[15px] text-[18px] font-medium flex items-center gap-x-[20px] absolute right-0 top-[-50%]">
            Next
            <FaArrowRight />
          </button>
      </div>
    </div>
  );
}
