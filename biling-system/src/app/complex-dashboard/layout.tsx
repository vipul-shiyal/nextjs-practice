import DefaultLayout from "@/components/Layouts/DefaultLayout"

export default function ComplexDashboard({
    children,
    totalSales,
    totalProduct,
    totalUsers,
    invoices
  
  }: {
    children: React.ReactNode
    totalSales: React.ReactNode
    totalProduct: React.ReactNode
    totalUsers: React.ReactNode
    invoices: React.ReactNode
  }) {

    return (
      <DefaultLayout>
        <div>{children}</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {totalSales}
            {totalProduct}
            {totalUsers}
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-8">
              {invoices}
            </div>
        </div>

      </DefaultLayout>
    )
  }