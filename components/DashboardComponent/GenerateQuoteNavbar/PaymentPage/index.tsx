import { useState, useContext } from "react";
import { ShowPaymentPageContext } from "@/context/UserDashboardGenerateQuote";
import Image from "next/image";
import { DataType } from "..";
import { DomesticBreadcrumb } from "../DomesticBreadcrumb";

interface PaymentPageType {
  registerPackage: (arg: DataType) => void;
  data: DataType;
}
export function PaymentPage({ registerPackage, data }: PaymentPageType) {
  const { showPaymentPage } = useContext(ShowPaymentPageContext);

  return (
    <section
      style={{ display: showPaymentPage ? "block" : "none" }}
      className="px-[20px] py-[50px]"
    >
      <DomesticBreadcrumb />
      <div className="lg:bg-[#FEFEFE] lg:p-[20px] lg:w-[80%] lg:mx-auto lg:rounded-[8px] ">
        <div className="flex flex-col items-center mb-[30px] ">
          <p className="text-[#1E1E1E] text-[18px] lg:text-[20px] font-[600] ">
            Express checkout
          </p>

          <button
            className="p-[15px] bg-[#6772E5] rounded-[8px] text-[#FEFEFE] w-[100%] text-[20px] lg:text-[24px] font-[700] my-[10px] "
            onClick={() => {
              registerPackage(data);
            }}
          >
            Stripe
          </button>

          {/* <p className='text-[#1E1E1E] text-[18px] lg:text-[20px] font-[500] '>or</p> */}
        </div>

        {/* <form className='text-[#1E1E1E]'>
                    <p className='text-[18px] font-[600] text-center mb-[20px] '>Pay with Card</p>
                    <div className='mb-[20px] text-[#1E1E1E] text-[16px] text-[18px] font-[500] '>
                        <label htmlFor="cardName">Card Holder’s Name</label>
                        <input 
                            id='cardName' 
                            type="text" 
                            placeholder='Card name' 
                            className='p-[15px] rounded-[8px] border-[2px] border-[#DEDEDE] outline-none w-[100%] text-[16px] text-[#1E1E1E] font-[500] mt-[8px] ' 
                        />
                    </div>

                    <div className='mb-[20px] text-[#1E1E1E] text-[16px] text-[18px] font-[500] '>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input 
                            id='cardNumber' 
                            type="number" 
                            placeholder='0000 - 0000 - 0000 - 000' 
                            className='p-[15px] rounded-[8px] border-[2px] border-[#DEDEDE] outline-none w-[100%] text-[16px] text-[#1E1E1E] font-[500] mt-[8px] ' 
                        />
                    </div>

                    <div className='flex flex-col lg:flex-row lg:gap-x-[15px] lg:justify-between mb-[20px] '>
                        <div className='flex gap-x-[15px] mb-[20px] lg:mb-0 '>
                            <div className='text-[#1E1E1E] text-[16px] text-[18px] font-[500]'>
                                <label htmlFor="cvv">CVV</label>
                                <input 
                                    id='cvv' 
                                    type="number"
                                    className='p-[15px] rounded-[8px] border-[2px] border-[#DEDEDE] outline-none w-[100%] text-[16px] text-[#1E1E1E] font-[500] mt-[8px] '
                                />
                            </div>

                            <div className='text-[#1E1E1E] text-[16px] lg:text-[18px] font-[500]'>
                                <label htmlFor="expiryDate">Expiry Date</label>
                                <input 
                                    id='expiryDate' 
                                    type="number"
                                    className='p-[15px] rounded-[8px] border-[2px] border-[#DEDEDE] outline-none w-[100%] text-[16px] text-[#1E1E1E] font-[500] mt-[8px] '
                                />
                            </div>
                        </div>

                        <div className='text-[#1E1E1E] text-[16px] lg:text-[18px] font-[500]'>
                            <label htmlFor="password">Enter Password</label>
                            <input 
                                id='password' 
                                type="password"
                                className='p-[15px] rounded-[8px] border-[2px] border-[#DEDEDE] outline-none w-[100%] text-[16px] text-[#1E1E1E] font-[500] mt-[8px] '
                            />
                        </div>
                    </div>

                    <button className='bg-[#0A089A] p-[15px] flex gap-x-[10px] items-center justify-center w-[100%] text-[#FEFEFE] text-[16px] rounded-[8px] lg:text-[18px] '>
                            Process Payment
                            <Image 
                                src="../img/next-arrow-white-icon.svg" 
                                alt='Next Icon' 
                                width={20} 
                                height={20} 
                            />
                        </button>
                </form> */}
      </div>
    </section>
  );
}
