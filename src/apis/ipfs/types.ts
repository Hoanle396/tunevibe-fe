export interface IPayloadPinIPFS {
  file: File;
}
export interface IResponsePinIPFS {
  hash: string;
  type: "file" | "json";
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
