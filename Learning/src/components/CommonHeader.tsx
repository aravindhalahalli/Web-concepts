import { Link } from "react-router-dom";

type Props = {
  header: string;
  subheader: string;
  buttonText ?: string;
};

const CommonHeader = (props: Props) => {
  const { header, subheader, buttonText } = props;
  return (
    <div className="w-full flex p-5 pt-2">
      <div className="grow-[5] flow-row flex gap-[14px] items-center">
        <div className="">
          <h1 className="align-middle ">{header}</h1>
          <h3 className="align-middle ">{subheader}</h3>
        </div>
      </div>
      <div className="grow-[5] flow-row flex justify-end gap-[14px] items-center">
        {buttonText ? (
          <div className="self-center ">
            <button
              className="inline-flex items-center px-2.5 text-zbbase font-semibold border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 py-2.5 bg-primary-600 text-white hover:bg-primary-700 "
              type="button"
            >
              <svg
                className="w-5 h-5 mr-2 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4v16m8-8H4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <Link to="new-fresh-installation">{buttonText}</Link>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
