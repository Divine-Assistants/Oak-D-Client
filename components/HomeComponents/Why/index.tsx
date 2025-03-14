import React from "react";

export function Why() {
  return (
    <div className="lg:w-[90%] mb-[30px]  lg:m-auto lg:mb-[80px] ">
      <h2 className="text-[#AC0108] text-[32px] lg:text-[55px] font-[600] w-fit m-auto mb-[20px] hidden lg:block  ">
        Why Choose Us{" "}
      </h2>

      <div className="py-[30px] px-[20px] lg:pb-[0px] lg:pt-[100px] lg:flex lg:items-center lg:gap-[50px] ">
        <h2 className="text-[#AC0108] text-[32px] font-[600] w-fit m-auto mb-[20px] block lg:hidden  ">
          Why Choose Us{" "}
        </h2>
        <div className="w-[100%] lg:w-[30%] m-auto bg-[#F5F5F5] rounded-[10px] text-[#1E1E1E] py-[20px] lg:py-[30px] mb-[20px] lg:mb-0 lg:h-[450px]">
          <div className="w-[80%] m-auto flex flex-col gap-[10px]">
            <div>
              <img src="/img/safe-packaging.svg" alt="Safe Packaging" />
            </div>
            <h3 className="font-semibold text-[20px] md:text-[24px] ">
              Safe Packaging
            </h3>
            <p className="text-[16px] font-[500] md:text-[18px] ">
              We are committed to ensuring the safe delivery of all packages
              entrusted to our care. We understand that the timely and secure
              delivery of your cargo is critical to your business operations,
              which is why we make it our top priority.
            </p>
          </div>
        </div>

        <div className="w-[100%] lg:w-[30%] m-auto bg-[#F5F5F5] rounded-[10px] text-[#1E1E1E] py-[20px] lg:py-[30px] mb-[20px] lg:mb-0 lg:h-[450px]  ">
          <div className="w-[80%] m-auto flex flex-col gap-[10px]">
            <div>
              <img src="/img/live-tracking.svg" alt="Live Tracking" />
            </div>
            <h3 className="font-semibold text-[20px] md:text-[24px] ">
              Live Tracking
            </h3>
            <p className="text-[16px] font-[500] md:text-[18px]">
              At OAK & D, we understand the importance of live tracking for our
              customers. Our advanced tracking systems allow you to monitor the
              progress of your shipment in real-time, from pickup to delivery
            </p>
          </div>
        </div>

        <div className="w-[100%] lg:w-[30%] m-auto bg-[#F5F5F5] rounded-[10px] text-[#1E1E1E] py-[20px] lg:py-[30px] lg:h-[450px]  ">
          <div className="w-[80%] m-auto flex flex-col gap-[10px]">
            <div>
              <img src="/img/customer-service.svg" alt="Customer Service" />
            </div>
            <h3 className="font-semibold text-[20px] md:text-[24px] ">
              Dedicated Customer Support
            </h3>
            <p className="text-[16px] font-[500] md:text-[18px]">
              We value clear communication with our customers. While our team
              isn&apos;t available 24/7 or on weekends and public holidays, you
              can leave a WhatsApp message during off-peak hours. We&apos;ll
              respond promptly on the next working day. Your inquiries matter to
              us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
