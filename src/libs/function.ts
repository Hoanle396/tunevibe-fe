
export const cutString = (
  str?: string,
  start: number = 5,
  end: number = 5
): string => {
  if (!str) return "";
  if (str.length <= start + end) return str;
  return str.substring(0, start) + "..." + str.substring(str.length - end);
};

export const getErrorMessage = (error: any) => {
  if (error?.info?.error?.data?.code === -32000) {
    if (error?.info?.error?.data?.message) {
      return "Your account has insufficient balance";
    } else {
      return "Something went wrong when execute transaction";
    }
  }
  return "Something went wrong when execute transaction";
};