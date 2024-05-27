import Link from "../../../node_modules/next/link"

// import './style.css'
export default function Modal({ modalTitle, modalBody, backURL }:{modalTitle: string, modalBody: any, backURL: string}) {

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-auto shadow-lg rounded-md bg-white">
          <Link href={backURL} className="flex justify-end">Close X</Link>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center">{modalTitle}</h3>
          <div className="mt-2 px-7 py-3">
            {modalBody}
          </div>
        </div>
      </div>
    </div>
  );
}