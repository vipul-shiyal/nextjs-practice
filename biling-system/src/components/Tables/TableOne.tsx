'use client'
// 'use server'
import { BRAND } from "@/types/brand";
import { useEffect, useState } from "react";


const brandData: BRAND[] = [
  {
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {

    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = ({ invoicesData }) => {
  console.log(invoicesData, 'invoicesData')
  const [invoices, setInvoices] = useState([]);
  
  useEffect(() => {
    getInvoices()
  }, [])

  const getInvoices = async () => {
    try {
      const res = await fetch(
        '/api/invoices',
        {
          method: 'GET',

        }
      );
      const data = await res.json();
      // setInvoices(data)

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Billing Invoices
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sr. No.
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Bill No.
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;

// This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('/api/invoices')
//   const invoicesData = await res.json()
//   console.log('47invoicesData', invoicesData)
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       invoicesData,
//     },
//   }
// }
