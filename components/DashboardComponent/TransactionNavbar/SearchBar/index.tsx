import Image from "next/image"

export function SearchBar(){
    return (
        <div className="flex flex-col p-[20px] lg:flex-row lg:items-center">
            <div className="relative mb-[20px] lg:mb-0 flex items-center w-[450px]">
                <Image src="../img/search-icon.svg" alt="Search Icon" width={20} height={20} className="absolute top-[50%] left-[20px] transform translate-y-[-50%] " />

                <input type="text" placeholder="Search by invoice no/services/billing date" className="w-[100%] bg-[#FEFEFE] p-[20px] pl-[45px] outline-none rounded-[8px] " />
            </div>

            <div className="flex justify-end items-center bg-[#FEFEFE] p-[20px] w-[200px] ml-auto rounded-[8px] ">
                <p>Sort By:</p>
                <select className="outline-none">
                    <option value="Billing Date">Billing Date</option>
                </select>
            </div>
        </div>
    )
}