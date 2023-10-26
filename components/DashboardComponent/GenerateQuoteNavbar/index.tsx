import { NavContext } from "@/context/UserDashboardLayout";
import { useContext, useState } from "react";
import { TypeOfService } from "./TypeOfService";
import { SenderInformation } from "./SenderInformation";
import { ReceiverInformation } from "./ReceiverInformation";
import { ParcelInformation } from "./ParcelInformation";
import { GlobalUserSenderInfo } from "./Global";
import { GlobalUserReceiver } from "./Global";
import { GlobalUserParcelInfo } from "./Global";
import { GlobalUserSummary } from "./Global";
import { WarehouseSenderInfo } from "./Warehouse";
import { WarehouseParcelInfo } from "./Warehouse";
import { WarehouseSummary } from "./Warehouse";
import { ShippingSummary } from "./ShippingSummary";
import { PaymentPage } from "./PaymentPage";
import { QuoteModal } from "./QuoteModal";
import { ContactPage } from "./ContactPage";
import {
  senderInfoContext,
  receiverInfoContext,
  packageInfoContext,
} from "@/context/PackageInfo";
import { userInfo } from "./SenderInformation";
import { ParcelInformationDataType } from "./ParcelInformation";
import { userToken } from "@/api/api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

export interface DataType {
  sender: userInfo;
  receiver?: userInfo;
  newPackage: ParcelInformationDataType;
  image?: File | null;
}
export interface PackageDataType {
  createdAt: string;
  packageID: string;
  packageName: string;
  packageType: string;
  sender: string;
}

export function GenerateQuoteNavbar() {
  const { activeNav, setActiveNav } = useContext(NavContext);
  const [senderInfo, setSenderInfo] = useState({});
  const [receiverInfo, setReceiverInfo] = useState({});
  const [packageInfo, setPackageInfo] = useState({});
  const [data, setData] = useState<any>();
  const [successfulGlobalPackage, setSuccessfulGlobalPackage] = useState(false);
  const [successfulWarehousePackage, setSuccessfulWarehousePackage] = useState(false);
  const [successfulDomesticPackage, setSuccessfulDomesticPackage] = useState(false);
  const [packageData, setPackageData] = useState<PackageDataType | null>(null);
  const [warehousePackageData, setWarehousePackageData] = useState<PackageDataType | null>(null)
  const [warehouseSpinner, setWarehouseSpinner] = useState(false);
  const [globalSpinner, setGlobalSpinner] = useState(false);
  const [domesticSpinner, setDomesticSpinner] = useState(false);
  

  const router = useRouter();

  const registerPackage = async (myParcel: DataType | undefined) => {
    console.log("myParcel", myParcel);
    if (
      myParcel?.newPackage.packageWeight &&
      myParcel.newPackage.dimension.length &&
      myParcel.newPackage.dimension.breadth &&
      myParcel.newPackage.dimension.height
    ) {
      const hasAlphabet = /[a-zA-Z]/.test(
        myParcel.newPackage.packageWeight +
          myParcel.newPackage.dimension.length +
          myParcel.newPackage.dimension.breadth +
          myParcel.newPackage.dimension.height
      );
      if (hasAlphabet) {
        alert("The fields should contain only number values");
        return;
      }
    }
    function objectToFormData(
      obj: any | undefined,
      formData = new FormData(),
      parentKey = ""
    ) {
      if (obj === undefined) {
        return;
      }
      for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
          let key = parentKey ? `${parentKey}[${property}]` : property;
          let value = obj[property];

          if (typeof value === "object" && !(value instanceof File)) {
            objectToFormData(value, formData, key); // Recurse nested object
          } else {
            formData.append(key, value);
          }
        }
      }
      return formData;
    }
    const formData = objectToFormData(myParcel);
    console.log(formData);

    const response = await axios.post(
      "https://oak-d-api.onrender.com/package/register-package",
      formData,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    console.log("PackageData", response.data);
    if (response.data.packageID) {
      setCookie("packageID", response.data.packageID);
    }
    if (response.data.warehouseID) {
      setCookie("warehouseID", response.data.warehouseID);
    }

    // router.push(response.data.url);
  };

  const warehouseGlobalPackage = async (myParcel: DataType | undefined) => {
    if (
      myParcel?.newPackage.packageWeight &&
      myParcel.newPackage.dimension.length &&
      myParcel.newPackage.dimension.breadth &&
      myParcel.newPackage.dimension.height
    ) {
      const hasAlphabet = /[a-zA-Z]/.test(
        myParcel.newPackage.packageWeight +
          myParcel.newPackage.dimension.length +
          myParcel.newPackage.dimension.breadth +
          myParcel.newPackage.dimension.height
      );
      if (hasAlphabet) {
        alert("The fields should contain only number values");
        return;
      }
    }
    function objectToFormData(
      obj: any | undefined,
      formData = new FormData(),
      parentKey = ""
    ) {
      if (obj === undefined) {
        return;
      }
      for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
          let key = parentKey ? `${parentKey}[${property}]` : property;
          let value = obj[property];

          if (typeof value === "object" && !(value instanceof File)) {
            objectToFormData(value, formData, key); // Recurse nested object
          } else {
            formData.append(key, value);
          }
        }
      }
      return formData;
    }
    const formData = objectToFormData(myParcel);
    // console.log(formData);

    setWarehouseSpinner(true);
    setGlobalSpinner(true);
    setDomesticSpinner(true);

    const response = await axios.post(
      "https://oak-d-api.onrender.com/package/register-package",
      formData,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    // console.log(response.data.data)

    if(response.data.status === 'Success'){
      if(response.data.data.packageType === 'Global'){
        setPackageData(response.data.data);
        setSuccessfulGlobalPackage(true);
        setGlobalSpinner(false);
      } else if(response.data.data.packageType === 'Warehousing'){
        setPackageData(response.data.data);
        setSuccessfulWarehousePackage(true);
        setWarehouseSpinner(false);
      } else{
        setPackageData(response.data.data);
        setSuccessfulDomesticPackage(true);
        setDomesticSpinner(false)
      }
    }
    console.log("WarehouseData", response.data);
    if (response.data.packageID) {
      setCookie("packageID", response.data.packageID);
    }
    if (response.data.warehouseID) {
      setCookie("warehouseID", response.data.warehouseID);
    }
  };

  return (
    <packageInfoContext.Provider value={{ packageInfo, setPackageInfo }}>
      <receiverInfoContext.Provider value={{ receiverInfo, setReceiverInfo }}>
        <senderInfoContext.Provider value={{ senderInfo, setSenderInfo }}>
          <div
            style={{ display: activeNav === 2 ? "block" : "none" }}
            className="lg:col-span-10 lg:row-span-5 bg-[#F5F5F5]"
          >
            <TypeOfService />
            <SenderInformation setData={setData} />
            <ReceiverInformation setData={setData} />
            <ParcelInformation setData={setData} />
            <GlobalUserSenderInfo setData={setData} />
            <GlobalUserReceiver setData={setData} />
            <GlobalUserParcelInfo setData={setData} />
            <GlobalUserSummary
              data={data}
              packageData={packageData}
              successfulGlobalPackage={successfulGlobalPackage}
              warehouseGlobalPackage={warehouseGlobalPackage}
            />
            <WarehouseSenderInfo setData={setData} />
            <WarehouseParcelInfo setData={setData} />
            <WarehouseSummary
              data={data}
              packageData={packageData}
              warehouseSpinner={warehouseSpinner}
              successfulWarehousePackage={successfulWarehousePackage}
              warehouseGlobalPackage={warehouseGlobalPackage}
            />
            <ShippingSummary 
              data={data} 
              packageData={packageData}
              successfulDomesticPackage={successfulDomesticPackage}
              warehouseGlobalPackage={warehouseGlobalPackage}
            />
            {/* <PaymentPage registerPackage={registerPackage} data={data} /> */}
            <QuoteModal />
            <ContactPage />
          </div>
        </senderInfoContext.Provider>
      </receiverInfoContext.Provider>
    </packageInfoContext.Provider>
  );
}