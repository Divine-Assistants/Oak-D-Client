import {
  PickDrop,
  QuoteLayout,
  WareCrumb,
  WarehouseParcel,
  WarehouseQuoteLand,
  WarehouseSummary,
} from "@/components";
import { DomesticContextProvider } from "@/context/DomesticWrapper";
import { GlobalContextProvider } from "@/context/GlobalWrapper";
import React from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { ClientDataType } from "../domestic";
import { useRouter } from "next/router";
import { userToken } from "@/api/api";
import { useState } from "react";

export default function Warehousing() {
  const router = useRouter();
  const [data, setData] = useState<any>();

  // const registerPackage = async (myParcel: ClientDataType | undefined) => {
  //   if (
  //     myParcel?.newPackage.packageWeight &&
  //     myParcel.newPackage.dimension.length &&
  //     myParcel.newPackage.dimension.breadth &&
  //     myParcel.newPackage.dimension.height
  //   ) {
  //     const hasAlphabet = /[a-zA-Z]/.test(
  //       myParcel.newPackage.packageWeight +
  //         myParcel.newPackage.dimension.length +
  //         myParcel.newPackage.dimension.breadth +
  //         myParcel.newPackage.dimension.height
  //     );
  //     if (hasAlphabet) {
  //       alert("The fields should contain only number values");
  //       return;
  //     }
  //   }

  //   function objectToFormData(
  //     obj: any,
  //     formData = new FormData(),
  //     parentKey = ""
  //   ) {
  //     if (obj === undefined) {
  //       return;
  //     }
  //     for (let property in obj) {
  //       if (obj.hasOwnProperty(property)) {
  //         let key = parentKey ? `${parentKey}[${property}]` : property;
  //         let value = obj[property];

  //         if (typeof value === "object" && !(value instanceof File)) {
  //           objectToFormData(value, formData, key); // Recurse nested object
  //         } else {
  //           formData.append(key, value);
  //         }
  //       }
  //     }
  //     return formData;
  //   }
  //   const formData = objectToFormData(myParcel);
  //   console.log(formData);

  //   const response = await axios.post(
  //     "https://oakandd-api.onrender.com/package/register",
  //     formData,
  //     {
  //       headers: { Authorization: `Bearer ${userToken}` },
  //     }
  //   );
  //   if (response.data.packageID) {
  //     setCookie("packageID", response.data.packageID);
  //   }
  //   if (response.data.warehouseID) {
  //     setCookie("warehouseID", response.data.warehouseID);
  //   }
  //   router.push(response.data.url);
  // };

  const warehouseGlobalPackage = async (myParcel: ClientDataType | undefined) => {
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
      "https://oakandd-api.onrender.com/package/register-package",
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
  };

  console.log(data);
  return (
    <QuoteLayout>
      <main>
        <GlobalContextProvider>
          <DomesticContextProvider>
            <WareCrumb />
            <WarehouseQuoteLand setData={setData} />
            <WarehouseParcel setData={setData} />
            <WarehouseSummary data={data} warehouseGlobalPackage={warehouseGlobalPackage} />
            <PickDrop />
          </DomesticContextProvider>
        </GlobalContextProvider>
      </main>
    </QuoteLayout>
  );
}
