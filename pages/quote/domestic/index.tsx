import {
  Checkout,
  DomesticCrumb,
  DomesticParcel,
  DomesticQuoteLand,
  DomesticReciever,
  DomesticSender,
  DomesticSummary,
  QuoteLayout,
} from "@/components";
import { DomesticContextProvider } from "@/context/DomesticWrapper";
import { clientInfo } from "@/components";
import { clientParcelInfo } from "@/components";
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { setCookie } from "cookies-next";
import { userToken } from "@/api/api";
import axios from "axios";

export interface ClientDataType { 
  sender: clientInfo;
  receiver?: clientInfo;
  newPackage: clientParcelInfo;
  image: File | null;
}

export default function Domestic() {
  const [data, setData] = useState<any>();
  const router = useRouter();

  const registerPackage = async (myParcel: ClientDataType | undefined) => {
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
      obj: any,
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

  console.log(data);

  return (
    <QuoteLayout>
      <main>
        <DomesticContextProvider>
          {/* <DomesticCrumb /> */}
          <DomesticQuoteLand />
          <DomesticSender setData={setData} />
          <DomesticReciever setData={setData} />
          <DomesticParcel setData={setData} />
          <DomesticSummary data={data} registerPackage={registerPackage} />
          {/* <Checkout
            data={data}
            registerPackage={registerPackage}
          /> */}
        </DomesticContextProvider>
      </main>
    </QuoteLayout>
  );
}
