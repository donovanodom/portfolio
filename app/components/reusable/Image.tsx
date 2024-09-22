import React, { memo } from 'react'

 interface ImageProps {
  src: string,
 }

export const Image = memo(function Image({ src }: ImageProps) {
  return <img src={src}/>;
});