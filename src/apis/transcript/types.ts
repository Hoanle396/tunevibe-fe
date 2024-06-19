export interface IPayloadTranscriptMusic {
  file: File;
}
export interface IResponseTranscriptMusic {
  data: string;
  status: number;
}
export interface Result {
  data: Data[]
  no: Data[]
  status: string
}

export interface Data {
  musicId: number
  prediction: number
  userId: number
}
export interface Chat {
  createdAt: string
  text: string
  user: string
}
