import { InstallationData } from "../../types/CommonTypes";

// Create an array of 10 objects
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