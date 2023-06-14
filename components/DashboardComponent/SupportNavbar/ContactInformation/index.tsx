import Image from "next/image"

export function ContactInformation(){
    return(
        <section>
            <h1 className="uppercase text-[#1E1E1E] text-[32px] font-[600] ">Contact Information</h1>

            <div className="my-[50px] lg:flex lg:gap-x-[50px]">
                <div className="mb-[20px]">
                    <p className="text-[#1E1E1E] text-[20px] font-[600] ">Contact Email</p>
                    <p className="text-[#0A089A] text-[18px] font-[500] ">support@oak&dcanada.com</p>
                </div>

                <div className="mb-[20px]">
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