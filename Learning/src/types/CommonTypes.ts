// Define the JSON data structure
export interface InstallationData {
  id: number;
  customername: string;
  current_version: string;
  health_status: string;
  triggerer: string;
  available_versions: string[];
  subdata: SubDataItem[];
}

export interface SubDataItem {
  id: number;
  status: string;
  comment: string;
  triggerer: string;
  stages: Stage[];
}

export interface Stage {
  name: string;
  href: string;
  status: string;
}

export interface People {
  name: string;
  title: string;
  email: string;
  role: string;
}
