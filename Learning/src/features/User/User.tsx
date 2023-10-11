import { useEffect, useState } from "react";
import { User, userSelector } from "./userSlice";
import { useAppSelector } from "../../app/hooks";
import { NavLink } from "react-router-dom";
import { Alert, AlertHeading } from "../../react-tailwindui/Alerts";

const UserComp = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const selectedUsers = useAppSelector(userSelector);

  useEffect(() => {
    setUsers(selectedUsers);
    return () => {
      console.log("component mounting");
    };
  }, [selectedUsers]);

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1>EDI Specifications</h1>
            <Alert
              alertProps={{
                baseClasses: "bg-yellow-50", // Set your desired base classes
                baseAttrs: {},
                classes: "", // Additional classes
                attrs: {},
                dClasses: null, // Optional classes
                dAttrs: null, // Optional attributes
                eProps: {
                  alertVariant: "RoundedAlert", // Set the variant (either 'RoundedAlert' or 'BorderAlert')
                },
              }}
              alertIcon={<div>Hello</div>} // Replace with your actual alert icon component
            >
              {/* Content inside the alert */}
              {/* You can place other components or text here */}
            </Alert>
            <AlertHeading
              alertTextProps={{
                baseClasses: "text-sm font-medium text-red-800",
                baseAttrs: {},
                classes: "", // Additional classes
                attrs: {},
                dClasses: null, // Optional classes
                dAttrs: null, // Optional attributes
                eProps: {},
              }}
              text="Alert Heading Text"
            />

            <h3>
              List of EDI specifications that are used across all your trading
              partners.
            </h3>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <NavLink
              to="/adduser"
              className="inline-flex items-center text-zbbase font-semibold border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 py-2.5 bg-primary-600 text-white hover:bg-primary-700  px-7"
            >
              Add user
            </NavLink>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComp;
