import { DomesticContext } from '@/context/DomesticWrapper';
import jsPDF from 'jspdf';
import htmlToImage from 'html-to-image';
import React, {useContext} from 'react';
import { FaPrint } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';


type InvoiceProps = {
    invoiceNumber: string;
    date: string;
    items: {
      description: string;
      quantity: number;
      price: number;
    }[];
  };


export const Invoice: React.FC<InvoiceProps> = ({invoiceNumber,date,items}) => {
  const { trail, setTrail } = useContext(DomesticContext);

  const generatePDF =  () => {
    const invoice = document.getElementById('invoice');
    const image = htmlToImage.toPng(invoice);
    const pdf = new jsPDF();
    // pdf.html(invoice, {
    //   callback: function (pdf) {
    //     pdf.save('my-pdf.pdf');
    //   }
    // });
    pdf.addImage(image, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
    pdf.save('my-pdf.pdf');
  };

  // const componentRef = React.useRef<HTMLDivElement>(null);
  //   const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  //   });
  
  //   const handleDownloadPDF = () => {
  //     const doc = new jsPDF();
  
  //     doc.html(componentRef.current, {
  //       callback: () => {
  //         doc.save("invoice.pdf");
  //       },
  //     });
  //   };


  return (
    <section className='w-[90%] m-auto my-[200px]' style={{display: trail ===5? 'block' : 'none'}}>
            <div className='flex items-center gap-[50px] w-fit ml-[5%] mb-[45px]  '>
                <div >
               <button 
               className='bg-[#AC0108]/[.1] flex items-center gap-[10px] py-[10px] px-[45px] text-[#AC0108] text-[18px] md:text-[20px] font-[600]  mb-[13px] '
              //  onClick={handlePrint}
               >    <FaPrint />
                    <p>Print</p>
               </button>
            </div>
            <div >
               <button 
               className='bg-[#AC0108]/[.1] flex items-center gap-[10px] py-[10px] px-[20px] text-[#AC0108] text-[18px] md:text-[20px] font-[600]  mb-[13px] '
               onClick={generatePDF}
               > 
                    <img src="/img/download-invoice.svg" alt="Download" />
                    <p>Download</p>
               </button>
            </div>
        </div>
            <div id="invoice">
                           
                            <div className='bg-[#A1A1A1]/[.2] flex flex-col md:flex-row justify-between mb-[20px] md:mb-[60px] py-[45px]'>
    <div className='w-full md:w-[40%] h-[120px] md:h-[auto]'><img src="/img/oak-logo-transparent.png" alt="Oak & D Logo" className='w-[100%] h-[100%] object-contain' /></div>
    <div className='w-full md:w-[40%]'>
      <p className='text-[20px] md:text-[24px] font-[700] mb-[10px] md:text-right '>Oak & D Logistics</p>
      <p className='text-[18px] md:text-[20px] font-[500] md:text-right '>Unit 456, Building 789,<br/> Block C1234 Elm Avenue Yorkton,<br/> Saskatchewan <br/>S3N 5M7 <br/>Canada</p>
    </div>  
  </div>
  <div className='w-full md:w-[95%] m-auto flex flex-col md:flex-row justify-between mb-[20px] md:mb-[26px] '>
    <div className='w-full md:w-[60%] text-[16px] md:text-[20px] font-[600] mb-[10px] md:mb-0 text-left'>
      <p className='text-[18px] md:text-[22px] font-[700] '>BILL TO</p>
      <p>Amanda Waller</p>
      <p>10, salifu street ojodu berger alimosho</p>
      <p>lagos</p>
      <p>Nigeria</p>
      <p>S3N 5M7</p>
    </div>
    <div className='w-full md:w-[40%] text-[16px] md:text-[20px] font-[600] text-right'>
      <p className='text-[18px] md:text-[22px] font-[700] '>Invoice #</p>
      <p>0009123</p>
      <p className='text-[18px] md:text-[22px] font-[700] '>DATE</p>
      <p>12/05/23</p>
      <p className='text-[18px] md:text-[22px] font-[700] '>Invoice Due Date</p>
      <p>12/09/23</p>
    </div>
  </div>
  <div className='border border-[#A1A1A1] mb-[20px]'></div>
  <div>
  <div className="mb-[40px] md:mb-[60px]">
    <table className="table-fixed border-separate border-spacing-4 w-full md:w-[100%]">
      <thead>
        <tr>
          <th className="w-[20%]">Cargo Name</th>
          <th className="w-[10%]">Quantity</th>
          <th className="w-[20%]">Departure</th>
          <th className="w-[20%]">Arrival</th>
          <th className="w-[10%]">Amount</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td>Mr. Bones</td>
          <td>3</td>
          <td>Lagos, Nigeria</td>
          <td>Ontario, Canada</td>
          <td>$ 68</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="flex flex-col md:flex-row items-center text-[16px]">
    <div className="w-full md:w-[60%] h-[200px] bg-[#0A089A]/[.2]">
      <div className="w-[80%] mx-auto h-full flex flex-col justify-center">
        <p className="font-[600]">Notes:</p>
        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae laborum inventore saepe deserunt maxime cumque consectetur</p>
      </div>
    </div>
    <div className="w-full md:w-[40%] bg-[#0A089A] h-[200px] text-[#FEFEFE] py-[20px] px-[40px] flex flex-col justify-between">
      <div className="text-right">
        <p className="font-[600] text-[24px] mb-[10px]">TOTAL</p>
        <p className="font-[700] text-[40px]"><span>$</span>68</p>
      </div>
      <div className="text-center md:text-right">
        <button className="bg-[#FEFEFE] text-[#0A089A] px-6 py-2 rounded-full font-[600]">Pay Now</button>
      </div>
    </div>
  </div>
</div>
            </div>
    </section>
  )
  
}


