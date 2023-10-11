import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../react-tailwindui/Button";
import CommonHeader from "../../components/CommonHeader";
import { jsonData } from "../../features/ReleaseUI/data";
import {
  ArrowPathIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import CommonIndicator from "../../components/CommonIndicator";
import { InstallationData, SubDataItem } from "../../types/CommonTypes";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const FinalInstallationUi = () => {
  const checkbox = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<InstallationData[]>([]);

  const [isExpandable, setIsExpandable] = useState<boolean>(false);
  const tableCss = isExpandable
    ? "w-80 transition-[width] ease-in-out relative h-[87vh]"
    : "w-full shadow border-b border-zbgray-200 sm:rounded-lg h-[87vh]";
  const header: string[] = isExpandable
    ? [""]
    : ["Current Version", "Available Version", "Health Status", "Action"];
  const subHeader: string[] = [
    "Status",
    "build message",
    "Triggerer",
    "Stages",
    "Action",
  ];
  const subData: SubDataItem[] = [
    {
      id: 1,
      status: "Success",
      comment: "usfi-build-001",
      triggerer: "Aravind",
      stages: [
        { name: "Step 1", href: "#", status: "complete" },
        { name: "Step 2", href: "#", status: "complete" },
        { name: "Step 3", href: "#", status: "complete" },
        { name: "Step 4", href: "#", status: "complete" },
        { name: "Step 5", href: "#", status: "complete" },
      ],
    },
    {
      id: 2,
      status: "Failed",
      comment: "usfi-build-002",
      triggerer: "Aravind",
      stages: [
        { name: "Step 1", href: "#", status: "failed" },
        { name: "Step 2", href: "#", status: "upcoming" },
        { name: "Step 3", href: "#", status: "upcoming" },
        { name: "Step 4", href: "#", status: "upcoming" },
        { name: "Step 5", href: "#", status: "upcoming" },
      ],
    },
  ];

  const GroupRelease = () => {
    return (
      <div className="flex items-center space-x-3 bg-zbgray-50 sm:left-12">
        <select className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-zbbase ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option value="version 1.0">Version 1.0</option>
          <option value="version 1.2">Version 1.2</option>
          <option value="version 1.5">Version 1.5</option>
          <option value="version 2.0">Version 2.0</option>
          <option value="version 2.2">Version 2.2</option>
          <option value="version 2.5">Version 2.5</option>
          <option value="version 3.0">Version 3.0</option>
        </select>
        <button
          type="button"
          className="inline-flex items-center rounded bg-zbgray-50 px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
        >
          Group Release
        </button>
      </div>
    );
  };

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : jsonData);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  useEffect(() => {
    console.log("isExpand-useeffect", isExpandable);
  }, [isExpandable]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < jsonData.length;
    setChecked(selectedPeople.length === jsonData.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current != null) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople]);

  console.log("selected people", selectedPeople);
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
                  {!isExpandable && (
                    <th
                      scope="col"
                      className="px-7 sm:w-12 sm:px-6 text-zbbase font-bold whitespace-nowrap py-3.5 pl-4 pr-3 text-left sm:pl-6 sticky top-0 uppercase border-y border-zbgray-200 bg-zbgray-50 text-ellipsis overflow-hidden z-[5]"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                        title="Select all customer"
                      />
                    </th>
                  )}
                  <th
                    scope="col"
                    className={`text-gray-900 text-zbbase font-bold whitespace-nowrap py-3.5 pl-4 pr-3 text-left sm:pl-6 sticky top-0 uppercase border-y border-zbgray-200 bg-zbgray-50 text-ellipsis overflow-hidden z-[5]`}
                  >
                    {selectedPeople.length > 0 ? <GroupRelease /> : "Customer"}
                  </th>

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
                  <tr
                    key={customer.id}
                    className={
                      selectedPeople.includes(customer)
                        ? "bg-gray-50 hover:bg-slate-100"
                        : undefined
                    }
                  >
                    {!isExpandable && (
                      <td className="relative px-7 sm:w-12 sm:px-6 text-zbbase border-b border-zbgray-200">
                        {selectedPeople.includes(customer) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={customer.customername}
                          checked={selectedPeople.includes(customer)}
                          onChange={(e) =>
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, customer]
                                : selectedPeople.filter((p) => p !== customer)
                            )
                          }
                        />
                      </td>
                    )}

                    <td
                      className={classNames(
                        "cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200   text-ellipsis overflow-hidden w-[40%]",
                        selectedPeople.includes(customer)
                          ? "text-indigo-600"
                          : "text-gray-900"
                      )}
                    >
                      {customer.customername.toLocaleUpperCase()}
                    </td>
                    {isExpandable ? (
                      ""
                    ) : (
                      <>
                        <td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-zbbase border-b border-zbgray-200  text-ellipsis overflow-hidden">
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
                          <div className="flex justify-start gap-4">
                            <Button
                              onClick={() => {
                                alert(
                                  `Relasing stable build version for ${customer.customername}`
                                );
                              }}
                            >
                              Release Version
                            </Button>
                            <Button
                              onClick={() => {
                                setIsExpandable(true);
                              }}
                            >
                              View Logs
                            </Button>
                          </div>
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

export default FinalInstallationUi;
