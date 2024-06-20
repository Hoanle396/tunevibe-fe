import { CREATE_TRANSACTION } from "@/@apollo/queries/music";
import { Transfer } from "@/constants/constanst";
import useDownload from "@/hooks/use-download";
import { IPFS, download } from "@/libs/function";
import { FCC } from "@/types";
import { useMutation } from "@apollo/client";
import { TbDownload } from "react-icons/tb";

type Props = {
  music?: Music;
};

const DownLoad: FCC<Props> = ({ music }) => {
  const { buy } = useDownload();
  const [execute] = useMutation(CREATE_TRANSACTION);
  const onDownLoad = async () => {
    if (music) {
      try {
        await buy(music.hash, 1);
        await execute({
          variables: {
            input: {
              musicId: music.id,
              price: music.price,
              status: Transfer.Hold,
            },
          },
        });
        download(IPFS(music.hash), music.name + ".mp3");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button onClick={onDownLoad} className="bg-transparent p-0">
      <TbDownload />
    </button>
  );
};

export default DownLoad;
