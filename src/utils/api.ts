export interface DeployedContract {
  _id: string;
  userAddress: string;
  chainId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  address: string;
}

export interface DeployedContractsResponse {
  data: DeployedContract[];
  totalData: number;
  totalContracts: number;
  totalPages: number;
  currentPage: number;
}

export async function getDeployedContracts(
  page: number = 1,
  limit: number = 10
): Promise<DeployedContractsResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/contract/deployed?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch deployed contracts");
  }

  const data: DeployedContractsResponse = await response.json();
  return data;
}
