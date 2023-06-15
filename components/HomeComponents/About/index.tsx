import React from "react";
import Image from 'next/image';

export function About() {
  return (
    <div className="text-[#1E1E1E] w-[80%] lg:w-[100%] m-auto lg:mb-[50px] ">
      <section className="mb-[50px] lg:w-[90%] lg:m-auto ">
        <h2 className="text-[#AC0108] text-[32px] font-[600] w-fit m-auto mb-[20px] lg:text-[55px]  ">
          About Us
        </h2>
        <div className="lg:flex lg:items-center lg:flex-row-reverse lg:gap-x-[20px] ">
          <div className="mb-[15px] lg:w-[100%]  ">
            <Image 
              src="/img/about-us.svg" 
              alt='About Us' 
              width={300} 
              height={300} 
              layout='responsive' 
            />
          </div>
          
          <div className="lg:w-[100%] ">
            <h2 className="text-[#AC0108] font-[700] text-[20px] mb-[8px] ">ABOUT</h2>
            <h2 className=" font-[700] text-[25px] mb-[8px] ">
              OAK & D is your trusted partner for efficient, reliable, and
              cost-effecient shipping solutions.
            </h2>
            <p className=" text-[16px] font-[400] ">
              OAK & D is a reputable cargo and freight company that specializes
              in shipping goods from Nigeria to Canada. We pride ourselves on
              providing top-notch services that are reliable, efficient, and
              tailored to meet the unique needs of each of our customers. With
              years of experience in the industry, we have developed a deep
              understanding of the logistics involved in shipping goods across
              borders and are committed to delivering your shipments on time and
              in the best possible condition.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="mb-[50px] ">
        <h2 className="text-[#AC0108] text-[32px] font-[600] w-fit m-auto mb-[40px] lg:mb-[76px] lg:text-[55px]  ">
          Our Services
        </h2>

        <div className="flex flex-col gap-[20px] mb-[40px] lg:relative lg:h-[963px] lg:w-[100%] lg:mb-[0px] ">
          <div className=" h-[357px] lg:h-[100%] ">
            <Image 
              src="/img/ocean-freight.svg" 
              alt='Our Services' 
              width={300} 
              height={300} 
              layout='responsive' 
            />
          </div>

          <div className="lg:absolute lg:top-[0] lg:w-[50%] lg:bg-[#FEFEFE]/[.68] lg:py-[190px] lg:px-[61px]  ">
            <h2 className=" text-[28px] font-semibold lg:text-[32px] lg:mb-[30px]  ">
              Ocean Freight Services:
            </h2>
            <p className="text-[16px] font-[500] md:text-[18px] lg:text-[20px] text-justify">
              OAK & D provides efficient and reliable ocean freight services for
              shipping packages from Lagos to Canada. The company is committed
              to ensuring that customers receive their cargo in a safe, timely,
              and cost-effective manner. OAK & D&apos;s ocean freight shipping
              process is comprehensive and ensures that customers&apos; cargo is
              safely and efficiently transported from Lagos to Canada. The
              process involves packing, labeling, loading, and unloading of
              cargo. The company has a team of experienced professionals who
              take care of each stage of the shipping process, ensuring that
              cargo is packed securely to prevent damage during transit. OAK & D
              has a reliable network of ocean carriers that operate globally,
              ensuring safe and efficient delivery of cargo. The company also
              provides customs clearance and documentation services, which are
              essential for international shipments. OAK & D also offers
              tracking and monitoring services for ocean freight shipments,
              enabling customers to keep track of their packages at all times.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mb-[40px] lg:relative lg:h-[963px] lg:w-[100%] lg:mb-[0px] ">
          <div className=" h-[357px] lg:h-[100%] ">
            <Image 
              src="/img/air-freight.svg" 
              alt='Our Services' 
              width={300} 
              height={300} 
              layout='responsive' 
            />
          </div>
          <div className="lg:absolute lg:top-[0] lg:right-[0] lg:w-[50%] lg:bg-[#FEFEFE]/[.68] lg:py-[190px] lg:px-[61px]">
            <h2 className=" text-[28px] font-semibold lg:text-[32px] lg:mb-[30px] ">
              Air Freight Services:
            </h2>
            <p className="text-[16px] font-[500] md:text-[18px] lg:text-[20px] text-justify">
              Air freight is one of the most important services offered by OAK &
              D as it allows for the quick and efficient transportation of goods
              from Lagos to Canada. This service is ideal for customers who
              require their packages to be delivered within a short period of
              time. With air freight, customers can choose from different
              options depending on their specific needs, including express,
              priority, and standard delivery services. In addition to the
              delivery services, OAK & D provides tracking and monitoring
              services for air freight shipments. This allows customers to track
              their packages in real-time and provides them with the peace of
              mind that their packages will be delivered on time and in good
              condition. OAK & D&apos;s air freight services also include custom
              clearance, which is an essential part of shipping packages across
              international borders. They handle all the necessary documentation
              and procedures required for customs clearance, ensuring that
              packages are cleared quickly and efficiently.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mb-[40px] lg:relative lg:h-[963px] lg:w-[100%] lg:mb-[0px] ">
          <div className=" h-[357px] lg:h-[100%]  ">
            <Image 
              src="/img/parcel-delivery.svg" 
              alt='Our Services' 
              width={300} 
              height={300} 
              layout='responsive' 
            />
          </div>
          <div className="lg:absolute lg:top-[0] lg:left-[0] lg:w-[50%] lg:bg-[#FEFEFE]/[.68] lg:py-[190px] lg:px-[61px]">
            <h2 className=" text-[28px] font-semibold lg:text-[32px] lg:mb-[30px] ">
              Parcel Delivery Services:
            </h2>
            <p className="text-[16px] font-[500] md:text-[18px] lg:text-[20px] text-justify">
              Parcel delivery is a service that OAK & D offers for customers who
              need to send small to medium-sized packages within Canada. This
              service is ideal for customers who have packages that are not too
              bulky or heavy. The company offers a range of parcel delivery
              options, including express, priority, and standard delivery
              services. OAK & D provides door-to-door delivery services, which
              is ideal for customers who need their packages delivered directly
              to their doorstep. They have a reliable and efficient parcel
              delivery network that ensures packages are delivered to their
              destination quickly and safely. OAK & D provides a range of
              shipping solutions tailored to meet the needs of their customers.
              They offer customized services such as pick-up, packaging, and
              documentation to ensure that their customers&apos; shipments are
              handled with care and attention to detail. The company&apos;s
              services are not limited to just shipping and parcel delivery;
              they also offer customs clearance services, ensuring that all
              necessary paperwork is handled professionally and promptly,
              allowing for a smooth and hassle-free shipping process.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mb-[40px] lg:relative lg:h-[963px] lg:w-[100%] lg:mb-[0px] ">
          <div className=" h-[357px] lg:h-[100%] ">
            <Image 
              src="/img/warehousing.svg" 
              alt='Our Services' 
              width={300} 
              height={300} 
              layout='responsive' 
            />
          </div>
          <div className="lg:absolute lg:top-[0] lg:right-[0] lg:w-[50%] lg:bg-[#FEFEFE]/[.68] lg:py-[190px] lg:px-[61px]">
            <h2 className=" text-[28px] font-semibold lg:text-[32px] lg:mb-[30px] ">
              Warehousing and Administration
            </h2>
            <p className="text-[16px] font-[500] md:text-[18px] lg:text-[20px] text-justify">
              OAK & D&apos;s Warehousing and Administration service provides a
              secure and efficient solution for the storage and management of
              goods. The administration aspect of the service involves keeping
              accurate records of client goods. OAK & D&apos;s warehouses are
              equipped with the latest technology and equipment to ensure that
              your goods are stored safely and securely. The company&apos;s
              facilities are designed to meet the highest industry standards and
              are regularly inspected to ensure compliance with all regulations.
              OAK & D understands that every client has unique needs and
              requirements when it comes to storing their goods. That&apos;s why
              the company offers customizable storage solutions to meet each
              client&apos;s specific needs. Whether you need short-term or
              long-term storage, climate-controlled facilities, or specialized
              storage solutions for delicate or hazardous goods, OAK & D can
              provide a solution that fits your needs. OAK & D&apos;s
              warehousing services include comprehensive inventory management
              solutions.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
