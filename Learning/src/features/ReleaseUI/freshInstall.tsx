import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../../components/CommonHeader";

const FreshInstallation = () => {
  // const [title, setTitle] = useState<string>("");
  // const [role, setRole] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [tenatId, setTenatId] = useState<string>("");
  const [manifestVersion, setManifestVersion] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();
  const handleAddUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/zenbridge-custom-pipeline");
  };

  const handleCancel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/zenbridge-custom-pipeline");
  };
  return (
    <div>
      <CommonHeader
        header="New Installation"
        subheader="Define the EDI spec for the EDI document you will exchange with your Trading Partner."
      />
      <div className=" w-full pb-12 px-5 pt-0 bg-white overflow-auto">
        <div className="pb-10">
          <form className="space-y-4">
            <div className="sm:col-span-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5  border-t border-zbgray-200">
              <label className="block text-regular font-medium  sm:mt-px sm:pt-2 text-zbblack text-zbbase pb-2">
                Tenat Id
              </label>
              <div className="sm:mt-0 sm:col-span-2">
                <div className="relative  max-w-[365px]">
                  <input
                    className="w-full rounded placeholder:text-zbbase placeholder:text-zbgray-500 text-zbbase text-zbblack focus:ring-primary-500 focus:border-primary-500 border-zbgray-200 shadow-sm"
                    max-length="60"
                    type="text"
                    value={tenatId}
                    onChange={(e) => setTenatId(e.target.value)}
                    required
                  />
                  <h3 className="align-middle py-2">
                    Provide a Tenat id for Creating an New installation
                  </h3>
                  <div className="absolute"></div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5  border-t border-zbgray-200">
              <label className="block text-regular font-medium  sm:mt-px sm:pt-2 text-zbblack text-zbbase pb-2">
                Manifest Version
              </label>
              <div className="sm:mt-0 sm:col-span-2">
                <div className="relative  max-w-[365px]">
                  <input
                    className="w-full rounded placeholder:text-zbbase placeholder:text-zbgray-500 text-zbbase text-zbblack focus:ring-primary-500 focus:border-primary-500 border-zbgray-200 shadow-sm"
                    max-length="60"
                    type="text"
                    value={manifestVersion}
                    onChange={(e) => setManifestVersion(e.target.value)}
                    required
                  />
                  <h3 className="align-middle py-2">
                    Provide a Manifest version for Creating an New installation
                  </h3>
                  <div className="absolute"></div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5  border-t border-zbgray-200">
              <label className="block text-regular font-medium  sm:mt-px sm:pt-2 text-zbblack text-zbbase pb-2">
                Partner Name
              </label>
              <div className="sm:mt-0 sm:col-span-2">
                <div className="relative  max-w-[365px]">
                  <input
                    className="w-full rounded placeholder:text-zbbase placeholder:text-zbgray-500 text-zbbase text-zbblack focus:ring-primary-500 focus:border-primary-500 border-zbgray-200 shadow-sm"
                    max-length="60"
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <h3 className="align-middle py-2">
                    Provide a Manifest version for Creating an New installation
                  </h3>
                  <div className="absolute"></div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5  border-t border-zbgray-200">
              <label className="block text-regular font-medium  sm:mt-px sm:pt-2 text-zbblack text-zbbase pb-2">
                Partner Email
              </label>
              <div className="sm:mt-0 sm:col-span-2">
                <div className="relative  max-w-[365px]">
                  <input
                    className="w-full rounded placeholder:text-zbbase placeholder:text-zbgray-500 text-zbbase text-zbblack focus:ring-primary-500 focus:border-primary-500 border-zbgray-200 shadow-sm"
                    max-length="60"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <h3 className="align-middle py-2">
                    Provide a Manifest version for Creating an New installation
                  </h3>
                  <div className="absolute"></div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5  border-t border-zbgray-200">
              <div className="col-span-1"></div>
              <div className="col-span-2 flex gap-2">
                <button
                  className="inline-flex items-center px-2.5 bg-white text-zbbase font-semibold border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 py-2 text-zbblack border-zbgray-200 hover:bg-zbgray-50 "
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <div className="relative">
                  <button
                    className="inline-flex items-center px-2.5 text-zbbase font-semibold border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 py-2.5 bg-primary-600 text-white hover:bg-primary-700"
                    type="button"
                    onClick={handleAddUser}
                  >
                    <span className="flex gap-2 font-normal truncate">
                      Save Changes
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreshInstallation;
