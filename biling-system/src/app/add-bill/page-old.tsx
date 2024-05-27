'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useForm } from "react-hook-form"
// import { invocesData } from "../api/invoices/data";

const addBill = () => {
  const { register, handleSubmit, formState } = useForm()

  const { errors } = formState

  const onSubmit = async (formData: any) => {
    const productId = Math.floor(Math.random() * 100) + 1;
    formData.id = productId
    console.log('formData', formData)

    const res = await fetch(`/api/invoices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data, 'data');

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
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Enter full name"
                        {...register("fullName",
                          {
                            required: {
                              value: true,
                              message: 'This required is filed'
                            },
                          }
                        )}
                      />
                      {errors && errors.fullName &&
                        <p>{errors.fullName.message}</p>
                      }
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
                        {...register("phoneNumber",
                          {
                            required: {
                              value: true,
                              message: 'This required is filed'
                            },
                          }
                        )}
                      />
                      {errors && errors.phoneNumber &&
                        <p>{errors.phoneNumber.message}</p>
                      }
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
                        {...register("address",
                          {
                            required: {
                              value: true,
                              message: 'This required is filed'
                            },
                          }
                        )}
                      />
                      {errors && errors.address &&
                        <p>{errors.address.message}</p>
                      }
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
                      {...register("productDetails",
                        {
                          required: {
                            value: true,
                            message: 'This required is filed'
                          },
                        }
                      )}
                    ></textarea>
                    {errors && errors.productDetails &&
                      <p>{errors.productDetails.message}</p>
                    }
                  </div>
                  <div className="mb-5.5">
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
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
                            {...register("item",
                              {
                                required: {
                                  value: true,
                                  message: 'This required is filed'
                                },
                              }
                            )}

                          />
                          {errors && errors.item &&
                            <p>{errors.item.message}</p>
                          }
                        </div>
                      </div>
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
                            {...register("qty",
                              {
                                required: {
                                  value: true,
                                  message: 'This required is filed'
                                },
                              }
                            )}
                          />
                          {errors && errors.qty &&
                            <p>{errors.qty.message}</p>
                          }
                        </div>

                      </div>
                      <div className="w-full sm:w-1/2">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="fullName"
                        >
                          Price
                        </label>
                        <div className="relative">
                          <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="price"
                            {...register("price",
                              {
                                required: {
                                  value: true,
                                  message: 'This required is filed'
                                },
                              }
                            )}
                          />
                          {errors && errors.price &&
                            <p>{errors.price.message}</p>
                          }
                        </div>
                      </div>
                    </div>
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
