import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

const Faq = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <section className="bg-blue text-white py-10 px-4 font-poppins mb-20">
        <div className="md:max-w-xl md:mx-auto">
          <h1 className="text-center text-2xl font-bold">
            {isDesktop ? "Frequently Asked Questions" : "FAQ's"}
          </h1>
          <div className="border-t border-white py-8 mt-10 text-sm">
            <div className="mb-4 flex justify-between">
              <p className="mr-8">
                What types of cargo and freight does OAK & D handle?
              </p>
              <MinusIcon boxSize={4} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies
              egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames
              blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac
              feugiat purus consectetur. Id ut iaculis tristique odio malesuada
              tempus. Ornare eget varius arcu eu nibh imperdiet.
            </p>
          </div>
          <div className="border-t border-white py-8 text-sm">
            <div className="flex justify-between">
              <p className="mr-8">
                What is the cost of shipping goods with OAK & D?
              </p>
              <AddIcon boxSize={4} />
            </div>
          </div>
          <div className="border-t border-white py-8 text-sm">
            <div className="flex justify-between">
              <p className="mr-8">
                Can I track my shipment online? If so, how?
              </p>
              <AddIcon boxSize={4} />
            </div>
          </div>
          <div className="border-t border-white py-8 text-sm">
            <div className="flex justify-between">
              <p className="mr-8">
                What are the requirements for shipping hazardous
              </p>
              <AddIcon boxSize={4} />
            </div>
          </div>
          <div className="border-t border-white py-8 text-sm">
            <div className="flex justify-between">
              <p className="mr-8">
                What is the maximum weight and size limit for shipments
              </p>
              <AddIcon boxSize={4} />
            </div>
          </div>
          <div className="border-t border-white py-8 text-sm">
            <div className="flex justify-between">
              <p className="mr-8">
                Does OAK & D offer air or sea freight services?
              </p>
              <AddIcon boxSize={4} />
            </div>
          </div>
          <div className="border-t border-white py-8 text-sm">
            <div className="flex justify-between">
              <p className="mr-8">
                What is the process for scheduling shipment pickup
              </p>
              <AddIcon boxSize={4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
