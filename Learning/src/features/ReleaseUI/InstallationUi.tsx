import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../react-tailwindui/Button";
import CommonHeader from "../../components/CommonHeader";
import { jsonData } from "./data";
import { ArrowPathIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import CommonIndicator from "../../components/CommonIndicator";
import { SubDataItem } from "../../types/CommonTypes";

const InstallationUi = () => {
  const [isExpandable, setIsExpandable] = useState<boolean>(false);

  const tableCss = isExpandable ? "w-80 transition-[width] ease-in-out relative h-[87vh]" : "w-full shadow border-b border-zbgray-200 sm:rounded-lg h-[87vh]";
  const header:string[] = isExpandable ? ["Customer"] : ["Customer","Current Version","Available Version", "Health Status", "Action"]
  const subHeader:string[] = ["Status", "build message","Triggerer","Stages", "Action"];
  const subData:SubDataItem[] = [
    {
      id:1,
      status:'Success',
      comment:'usfi-build-001',
      triggerer:'Aravind',
      stages:[
        { name: 'Step 1', href: '#', status: 'complete' },
        { name: 'Step 2', href: '#', status: 'complete' },
        { name: 'Step 3', href: '#', status: 'complete' },
        { name: 'Step 4', href: '#', status: 'complete' },
        { name: 'Step 5', href: '#', status: 'complete' },
      ]
    },
    {
      id:2,
      status:'Failed',
      comment:'usfi-build-002',
      triggerer:'Aravind',
      stages:[
        { name: 'Step 1', href: '#', status: 'failed' },
        { name: 'Step 2', href: '#', status: 'upcoming' },
        { name: 'Step 3', href: '#', status: 'upcoming' },
        { name: 'Step 4', href: '#', status: 'upcoming' },
        { name: 'Step 5', href: '#', status: 'upcoming' },
      ]
    }
  ]


  useEffect(() => {
    console.log("isExpand-useeffect", isExpandable);
  }, [isExpandable]);

  return (
    <div className="relative">
      <CommonHeader
        header="Installation"
        subheader="List of  Customer with their current working builds and avilable builds to release "
        buttonText="Fresh Installation"
      />

      <div className="grow flex overflow-hidden">
        <div className={tableCss}>
          <div className="border-r border-zbgray-200 overflow-y-auto h-full">
            <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-0 text-zbblack text-zbbase">
              <thead>
                <tr>
                  {header.map((eachHeader, id) => {
                    return (
                      <th
                        key={id}
                        className="text-zbbase font-bold whitespace-nowrap py-3.5 pl-4 pr-3 text-left sm:pl-6 sticky top-0 uppercase border-y border-zbgray-200 bg-zbgray-50 text-ellipsis overflow-hidden z-[5]"
                      >
                        {isExpandable ? (
                          <div className="flex justify-between items-center">
                            <div className="flex items-center justify-between">
                              {eachHeader}
                            </div>
                            <button
                              onClick={() => {
                                setIsExpandable(false);
                              }}
                            >
                              <ArrowsPointingOutIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            {eachHeader}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {jsonData.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-100">
                    <td
                      className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden w-[30%]"
                      onClick={() => {
                        [setIsExpandable(true)];
                      }}
                    >
                      {customer.customername.toLocaleUpperCase()}
                    </td>
                    {isExpandable ? (
                      ""
                    ) : (
                      <>
                        <td
                          className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden"
                          onClick={() => {
                            [setIsExpandable(true)];
                          }}
                        >
                          <div
                            className="truncate text-align"
                            title={customer.current_version}
                          >
                            {customer.current_version}
                          </div>
                        </td>
                        <td className=" whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          <select
                            className="block w-[200px] rounded-md border-0 py-1.5 pl-3 pr-10 text-zbbase ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            name="versions"
                          >
                            {customer &&
                              customer.available_versions.map((ver, id) => (
                                <option key={id} value={ver}>
                                  {ver}
                                </option>
                              ))}
                          </select>
                        </td>
                        <td className=" whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              customer.health_status === "Good"
                                ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
                                : "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                            }`}
                          >
                            {customer.health_status}
                          </span>
                        </td>
                        <td className=" whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          <Button
                            onClick={() => {
                              alert(
                                `Relasing stable build version for ${customer.customername}`
                              );
                            }}
                          >
                            Release Version
                          </Button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {isExpandable ? (
          <main className="w-full flex-1 bg-white border-t border-slate-200 overflow-hidden overflow-y-auto">
            <div className="w-full flex p-5">
              <div className="grow-[5] flow-row flex gap-[14px] items-center">
                <h1 className="align-middle ">USFI Build and logs details</h1>
              </div>
            </div>
            <div className="bg-white mx-auto">
              <div className="overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-0 text-zbblack text-zbbase">
                  <thead>
                    <tr>
                      {subHeader.map((header, id) => (
                        <th
                          key={id}
                          className="text-zbbase font-bold whitespace-nowrap py-3.5 pl-4 pr-3 text-left sm:pl-6 sticky top-0 uppercase border-y border-zbgray-200 bg-zbgray-50 text-ellipsis overflow-hidden z-[5]"
                          scope="col"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subData.map((item) => (
                      <tr
                        key={item.id}
                        className="cursor-pointer hover:bg-slate-100"
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden w-[30%]">
                          <span
                            className={`${
                              item.status == "Success"
                                ? "text-green-900 font-bold"
                                : "font-bold text-red-900"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          {item.comment}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          {item.triggerer}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          <CommonIndicator stages={item.stages} />
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden">
                          <span>
                            {item.status === "Success" ? (
                              "-"
                            ) : (
                              <button>
                                <ArrowPathIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            )}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        ) : (
          ""
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default InstallationUi;
