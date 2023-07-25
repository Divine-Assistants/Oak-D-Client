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
  image: File | null;
}

export function GenerateQuoteNavbar() {
  const { activeNav, setActiveNav } = useContext(NavContext);
  const [senderInfo, setSenderInfo] = useState({});
  const [receiverInfo, setReceiverInfo] = useState({});
  const [packageInfo, setPackageInfo] = useState({});
  const [data, setData] = useState<any>();

  const router = useRouter();

  const registerPackage = async (myParcel: DataType | undefined) => {
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
      "https://oak-d-api.onrender.com/package/register",
      formData,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    if (response.data.packageID) {
      setCookie("packageID", response.data.packageID);
    }
    if (response.data.warehouseID) {
      setCookie("warehouseID", response.data.warehouseID);
    }
    router.push(response.data.url);
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
    console.log(formData);

    const response = await axios.post(
      "https://oak-d-api.onrender.com/package/register-package",
      formData,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    if (response.data.packageID) {
      setCookie("packageID", response.data.packageID);
    }
    if (response.data.warehouseID) {
      setCookie("warehouseID", response.data.warehouseID);
    }
    // router.push(response.data.url);
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
              warehouseGlobalPackage={warehouseGlobalPackage}
            />
            <WarehouseSenderInfo setData={setData} />
            <WarehouseParcelInfo setData={setData} />
            <WarehouseSummary
              data={data}
              warehouseGlobalPackage={warehouseGlobalPackage}
            />
            <ShippingSummary data={data} />
            <PaymentPage registerPackage={registerPackage} data={data} />
            <QuoteModal />
            <ContactPage />
          </div>
        </senderInfoContext.Provider>
      </receiverInfoContext.Provider>
    </packageInfoContext.Provider>
  );
}
