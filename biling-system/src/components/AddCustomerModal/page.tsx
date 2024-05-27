
import { saveCustomer } from '../../lib/actions'
import FormSubmitButton from '../../components/AddCustomerModal/FormSubmitButton'

export default function AddCutomerModal() {

  // async function shareMeal(formData){
  //   'use server'
  //   console.log('15 >> formData >>', formData);
  // }

  return (
    <div className="grid grid-cols-24 w-full gap-8">
      <div className="col-span-5 xl:col-span-3">
          <div className="">
            <form action={saveCustomer}>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter frist name"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+91 XXXXXXXX"
                    required
                  />
                </div>
              </div>
              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="address"
                >
                  Address
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="input"
                    name="address"
                    id="address"
                    placeholder="Enter a address..."
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4.5">
                <FormSubmitButton />
              </div>
            </form>
          </div>

      </div>
    </div> 
  );
}