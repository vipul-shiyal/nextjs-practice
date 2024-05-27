'use client'


import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import { invocesData } from "../api/invoices/data";
import { customersList } from '../../lib/api'
import { useForm } from "react-hook-form"
import { saveInvoiceAction } from "@/lib/actions";



const addBill = () => {
  const [inputs, setInputs] = useState([{ item: "", qty: "", price: "", total: "" }]);
  const [customers, setCustomers] = useState([])
  const { register, handleSubmit, formState } = useForm()
  // const { errors } = formState

  useEffect(() => { 
    //fetch customer from db  
    async function fetchMyAPI() {
      let customers = await customersList()
      setCustomers(customers)
    }
    fetchMyAPI()
  }, [])

  const handleAddInput = () => {
    setInputs([...inputs, { item: "", qty: "", price: "", total: "" }]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue)
  };
  
  //hanle save billing data 
  const onSubmit = async (formData: any) => {
    const payload = {
      customerId: parseInt(formData.customer),
      productDetails: formData.productDetails,
      items: inputs
    }
    console.log('payload', payload)
    saveInvoiceAction(payload)
  }
  
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Add Bill" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label htmlFor="customer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer</label>
                      <select 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="customer"
                        {...register("customer",
                          {
                            required: {
                              value: true,
                              message: 'This required is filed'
                            },
                          }
                        )}
                        >
                          <option >Select a Customer</option>
                          {customers && customers.map((customer, index) => (
                            <option value={customer.id} key={customer.id}>{customer.firstName} {customer.lastName}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Product Details
                    </label>
                    <textarea
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      name="productDetails"
                      id="bio"
                      rows={4}
                      placeholder="Write product details"
                      {...register("productDetails", {
                          required: {
                            value: true,
                            message: 'This required is filed'
                          },
                        }
                      )}
                    />
                    
                  </div>
                  <div className="mb-5.5">
                  {inputs.map((item, index) => (
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row" key={index}>
                      <div className="w-full sm:w-1/2">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                        >
                          Item
                        </label>
                        <div className="relative">
                          <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="item"
                            value={item.item}
                            onChange={(event) => handleChange(event, index)}

                          />
                         
                        </div>
                      </div>
                      {/* Item details */}
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="fullName"
                          >
                            Qty
                          </label>
                          <div className="relative">
                            <input
                              className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="text"
                              name="qty"
                              value={item.qty}
                              onChange={(event) => handleChange(event, index)}

                            />
                            
                          </div>

                        </div>
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="Price"
                          >
                            Price
                          </label>
                          <div className="relative">
                            <input
                              className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="text"
                              name="price"
                              value={item.price}
                              onChange={(event) => handleChange(event, index)}
                            />

                          </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="total"
                          >
                            Total
                          </label>
                          <div className="relative">
                            <input
                              className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="text"
                              name="total"
                              value={item.total}
                              onChange={(event) => handleChange(event, index)}
                            />

                          </div>
                        </div>
                        {inputs.length > 1 && (
                            <button onClick={() => handleDeleteInput(index)}>Delete</button>
                          )}
                        {index === inputs.length - 1 && (
                            <button onClick={() => handleAddInput()}>Add</button>
                        )}
                      </div>
                      {/* Item details */}
                    </div>
                  ))} 
                  {/* end of map */}
                  </div>
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div >
    </DefaultLayout >);
};

export default addBill;
