import { minidenticon } from "minidenticons";
import React, { HTMLAttributes, useMemo } from "react";

const Avatar = ({
  username,
  ...props
}: { username: string } & HTMLAttributes<HTMLImageElement>) => {
  const svgURI = useMemo(
    () =>
      "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(username)),
    [username]
  );
  return <img src={svgURI} alt={username} {...props} />;
};

export default Avatar;