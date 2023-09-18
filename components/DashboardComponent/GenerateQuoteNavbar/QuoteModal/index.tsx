import { useContext } from 'react';
import { QuoteModalContext, ContactPageContext } from '@/context/UserDashboardGenerateQuote';
import { GlobalSummaryContext } from '@/context/GlobalShipping';
import { WarehouseSummaryContext } from '@/context/Warehouse';

export function QuoteModal(){
    const {showQuoteModal, setShowQuoteModal} = useContext(QuoteModalContext);
    const {setShowContactPage} = useContext(ContactPageContext);
    const {setGlobalSummary} = useContext(GlobalSummaryContext);
    const {setShowWarehoueSummary} = useContext(WarehouseSummaryContext);

    function handleBtnClick(){
        setGlobalSummary(false);
        setShowWarehoueSummary(false);
        setShowQuoteModal(false);
        setShowContactPage(true);
    }

    return (
        <div style={{display: showQuoteModal ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] md:w-[400px] lg:w-[500px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-[30px] font-poppins ">

                <p className="text-center text-[18px] lg:text-[24px] mb-[20px]">Your request has been submitted, our team will contact you shortly. For immediate help, proceed to contact us</p>

                <div className="flex gap-x-[20px] ">
                    <button onClick={()=>setShowQuoteModal(false)}  className="bg-[#9C9C9C] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%] ">Continue</button>

                    <button onClick={handleBtnClick} className="bg-[#0A089A] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Contact Us</button>
                </div>
            </div>
        </div>
    )
}