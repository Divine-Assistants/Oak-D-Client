import Image from "next/image"

export function QuoteContactInfo(){
    return(
        <section>
            <h1 className="uppercase text-[#AC0108] text-[32px] font-[600] ">Contact Us</h1>

            <div className="my-[50px] lg:flex lg:gap-x-[50px]">
                <div className="mb-[20px] lg:border-r-[2px] lg:border-[#B8B8B8] lg:pr-[50px] ">
                    <p className="text-[#1E1E1E] text-[20px] font-[600] ">Contact Email</p>
                    <p className="text-[#0A089A] text-[18px] font-[500] ">hello@oak&dcanada.com</p>
                </div>

                <div className="mb-[20px] lg:border-r-[2px] lg:border-[#B8B8B8] lg:pr-[50px] ">
                    <p className="text-[#1E1E1E] text-[20px] font-[600] ">Contact Number</p>
                    <p className="text-[#0A089A] text-[18px] font-[500] ">Call (647) 907 8627</p>
                </div>

                <div className="w-[190px] ">
                    <p className="text-[#1E1E1E] text-[20px] font-[600] mb-[5px] ">WhatsApp Message</p>
                    <Image src="../img/whatsapp-logo.svg" alt="Whatsapp Logo" width={30} height={30} className="cursor-pointer mx-auto" />
                </div>
            </div>
        </section>
    )
}