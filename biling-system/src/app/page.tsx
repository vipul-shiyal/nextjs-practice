// import ECommerce from "@/components/Dashboard/E-commerce";

// import Dashboard from "@/components/Dashboard/Dashboard";
import DefaultLayout from "../components/Layouts/DefaultLayout";
// import ComplexDashboard from "./dashboard/page";
import { redirect } from 'next/navigation'

//using paraller solts router create complex dashboard 
export default function Home() {
  //redirect to dashboard page
  redirect('/complex-dashboard')
  return (
    <>
      <DefaultLayout>
        {/* <Dashboard /> */}
      </DefaultLayout>
    </>
  );
}
