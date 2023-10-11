import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { InstallationData, People } from "../../types/CommonTypes";
import CommonHeader from "../../components/CommonHeader";


export const jsonData: InstallationData[] = [
  {
    id: 1,
    customername: "usfi",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 2,
    customername: "wayfair",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 3,
    customername: "emmasleep",
    current_version: "Version 2.0",
    health_status:"Warning",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 4,
    customername: "RSS",
    current_version: "Version 2.0",
    health_status:"Warning",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 5,
    customername: "cyrill foods",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"], 
    subdata:[
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
  },
  {
    id: 6,
    customername: "midway plus",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 7,
    customername: "orinone",
    current_version: "Version 2.0",
    health_status:"Warning",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 8,
    customername: "ppm fulfillment",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 9,
    customername: "Navigation TMS",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions:  ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
  },
  {
    id: 10,
    customername: "visioners",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 11,
    customername: "Sunland",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 12,
    customername: "Simple Human",
    current_version: "Version 2.0",
    health_status:"Warning",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 13,
    customername: "Humble Crew",
    current_version: "Version 1.0",
    health_status:"Warning",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 14,
    customername: "Simple Human Sandbox",
    current_version: "Version 2.0",
    health_status:"Warning",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 15,
    customername: "Dig Cargo",
    current_version: "Version 1.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 16,
    customername: "Pipeline Medical",
    current_version: "Version 1.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 17,
    customername: "American Heritages",
    current_version: "Version 1.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
  {
    id: 18,
    customername: "Azar International",
    current_version: "Version 2.0",
    health_status:"Good",
    triggerer:'Aravind',
    available_versions: ["Version 1.0", "Version 2.0", "Version 2.2"],
    subdata:[
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
   },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TableComp = () => {
  const checkbox = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<InstallationData[]>([]);

  const [isExpandable, setIsExpandable] = useState<boolean>(false);

  const header: string[] = isExpandable
    ? ["Customer"]
    : [
        // "Customer",
        "Current Version",
        "Available Version",
        "Health Status",
        "Action",
      ];
  const subHeader: string[] = [
    "Status",
    "build message",
    "Triggerer",
    "Stages",
    "Action",
  ];

  console.log("selected people", selectedPeople);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < jsonData.length;
    setChecked(selectedPeople.length === jsonData.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current != null) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople]);

  useEffect(() => {
    console.log("isExpand-useeffect", isExpandable);
  }, [isExpandable]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : jsonData);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

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

  return (
    <div className="w-full py-16 bg-white">
      <div className="w-full m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between align-middle">
              <CommonHeader
                header="Installation"
                subheader="List of  Customer with their current working builds and avilable builds to release "
                buttonText="Fresh Installation"
              />
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[82vh]">
                  <div className="relative">
                    <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-0 text-zbblack text-zbbase">
                      <thead>
                        <tr className="relative">
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
                            />
                          </th>
                          <th
                            scope="col"
                            className="min-w-[12rem] text-gray-900 text-zbbase font-bold whitespace-nowrap py-3.5 pl-4 pr-3 text-left sm:pl-6 sticky top-0 uppercase border-y border-zbgray-200 bg-zbgray-50 text-ellipsis overflow-hidden z-[5]"
                          >
                           {selectedPeople.length > 0 ? <GroupRelease /> : "Customer"}
                          </th>
                          {header &&
                            header.map((headEl, id) => (
                              <th
                                key={id}
                                scope="col"
                                className="min-w-[12rem] text-gray-900 text-zbbase font-bold whitespace-nowrap py-3.5 pl-4 pr-3 text-left sm:pl-6 sticky top-0 uppercase border-y border-zbgray-200 bg-zbgray-50 text-ellipsis overflow-hidden z-[5]"
                              >
                                {headEl}
                              </th>
                            ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {jsonData.map((person, id) => (
                          <tr
                            key={id}
                            className={
                              selectedPeople.includes(person)
                                ? "bg-gray-50"
                                : undefined
                            }
                          >
                            <td className="relative px-7 sm:w-12 sm:px-6">
                              {selectedPeople.includes(person) && (
                                <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                              )}
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value={person.customername}
                                checked={selectedPeople.includes(person)}
                                onChange={(e) =>
                                  setSelectedPeople(
                                    e.target.checked
                                      ? [...selectedPeople, person]
                                      : selectedPeople.filter(
                                          (p) => p !== person
                                        )
                                  )
                                }
                              />
                            </td>

                            <td
                              className={classNames(
                                "text-left whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                selectedPeople.includes(person)
                                  ? "text-indigo-600"
                                  : "text-gray-900"
                              )}
                            >
                              {person.customername}
                            </td>

                            <td className="text-left whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.current_version}
                            </td>

                            <td className="text-left whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.health_status}
                            </td>

                            <td className="text-left whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.health_status}
                            </td>

                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-3">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                <span className="sr-only">
                                  , {person.customername}
                                </span>
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
        </div>
      </div>
    </div>
  );
};

export default TableComp;
