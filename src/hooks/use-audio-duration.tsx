"use client"
import { useState } from "react";

import useFormatSecond from "@/hooks/use-format-second";

const useAudioDuration = (audioSrc: string) => {
    const [durationSeconds, setDurationSeconds] = useState<number>(0)
    const formattedDuration = useFormatSecond(durationSeconds);

    const metadataLoadHandler = (e: React.SyntheticEvent<HTMLAudioElement>) => {
        const audioElement = e.target as HTMLAudioElement;
        const { duration } = audioElement;
        setDurationSeconds(duration);
      };

    const output = (
        <audio onLoadedMetadata={metadataLoadHandler} style={{ display: "none" }}>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
    )

    return {
        output,
        durationSeconds,
        formattedDuration
    }
}

export default useAudioDuration;