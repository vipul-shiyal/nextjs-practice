import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Suspense } from "react";
import Link from "next/link";
import { getUsers } from '../../lib/bills'

import AddCutomerModal from "@/components/AddCustomerModal/page";
import Modal from "@/components/Modalcomponent/page";

function AddCustomer() {
  return <Link href={`/customer/?show=true`}>Add Customer</Link>
}

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export default async function Customer({ searchParams }: SearchParamProps) {
  //fetch user data from db
  const users = await getUsers()
  const show = searchParams?.show;

  return (
    <DefaultLayout>
      <AddCustomer />
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Breadcrumb pageName="Customer" />
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Sr. No.
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                First Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Last Name
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Phone
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Address
              </h5>
            </div>
          </div>
          <Suspense fallback={<p>Fetching meals...</p>}>
            {users && users.map((user, key) => (
                <div
                  className={`grid grid-cols-3 sm:grid-cols-5 ${key === users.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                    }`}
                  key={key}
                >
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <p className="hidden text-black dark:text-white sm:block">
                      {key + 1}
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="hidden text-black dark:text-white sm:block">
                      {user.firstName}
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">{user.lastName}</p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">{user.phone}</p>
                  </div>

                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">{user.address}</p>
                  </div>
                </div>
            ))}
           </Suspense>
        </div>
    </div>
      {/* add customer modal */}
      {show && 
        <Modal 
          modalTitle="Add Customer" 
          modalBody={<AddCutomerModal />} 
          backURL='/customer'
        />
      } 
    </DefaultLayout>
  )
}