import Image from "next/image";
import { useRef, useState } from "react";
import { TransactionType } from "..";

interface TransactionTableDataType {
  packageInfo: TransactionType[];
}

export function TransactionTable({ packageInfo }: TransactionTableDataType) {
  const [showDetails, setShowDetails] = useState(false);
  const [isPackageClick, setIsPackageClick] = useState<string | null>("");

  const handleShowDetails = (infoID: string) => {
    setShowDetails(!showDetails);
    setIsPackageClick(infoID);
  };

  // console.log(isPackageClick);

  const invoiceTab = useRef<HTMLAnchorElement>(null);

  return (
    <div className="">
      <section className="w-[100%] lg:hidden flex flex-col rounded-[8px] px-[20px] ">
        {packageInfo.map((item: any) => {
          return (
            <div
              key={item._id}
              className="mb-[20px] bg-[#FEFEFE] rounded-[8px] p-[10px] "
            >
              <div className="flex w-[100%] ">
                <input type="checkbox" />
                <div className="mr-auto ml-[10px] ">
                  <p className="text-[16px] font-[600] text-[#1E1E1E]">
                    Invoice #0456
                  </p>
                  <p className="text-[14px] font-[600] text-[#B1B1B1]">{`${item.sender.firstName} ${item.sender.lastName}`}</p>
                </div>

                <div className="flex items-center ">
                  <p className="mr-[10px] ">{item.createdAt}</p>
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
                    <p className="text-[#1E1E1E] text[14px] font-[500] ">{`${item.receiver.firstName} ${item.receiver.lastName}`}</p>
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

                  <div className="flex justify-center border-[2px] border-[#1E1E1E] rounded-[15px] p-[15px] cursor-pointer ">
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
            {packageInfo.map((item: any) => {
              const date = new Date(item.createdAt);
              const options: Intl.DateTimeFormatOptions = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              const formattedDate = date.toLocaleDateString("en-US", options);

              return (
                <tr
                  className="bg-[#FFFFFF] border-b-4 border-[#F5F5F5] text-[16px] "
                  key={item._id}
                >
                  <td className="px-[10px] py-[15px]">
                    <input type="checkbox" className="cursor-pointer" />
                  </td>
                  <td className="pr-[10px] py-[15px]">Invoice #0456</td>
                  <td className="px-[10px] py-[15px]">{`${item.sender.firstName} ${item.sender.lastName}`}</td>
                  <td className="px-[10px] py-[15px]">{`${item.receiver?.firstName} ${item.receiver?.lastName}`}</td>
                  <td className="px-[10px] py-[15px]">{formattedDate}</td>
                  <td className="px-[10px] py-[15px]">{item.packageType}</td>
                  <td className="px-[10px] py-[15px]">{item.arrival}</td>
                  <td className="px-[10px] py-[15px]">{item.price}</td>
                  <td className="px-[10px] py-[15px]">
                    <div
                      className="flex justify-center items-center  cursor-pointer border-[1px] border-[#1E1E1E] rounded-[8px] px-[15px] py-[8px] "
                      onClick={() => {
                        invoiceTab?.current?.click();
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
                      <a
                        href={item?.invoiceURL}
                        download={"myfile.pdf"}
                        ref={invoiceTab}
                        className="hidden"
                      ></a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
