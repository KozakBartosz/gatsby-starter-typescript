import React from "react";
import Img, { GatsbyImageProps } from "gatsby-image";

type ImageProps = {
    durationFadeIn?: number;
} & GatsbyImageProps;

export const Gimg = ({
    durationFadeIn = 1050,
    fadeIn = true,
    loading = "lazy",
    placeholderStyle = { filter: "blur(20px)" },
    ...restProps
}: ImageProps) => {
    return (
        <Img
            fadeIn={fadeIn}
            loading={loading}
            placeholderStyle={placeholderStyle}
            {...{durationFadeIn}}
            {...restProps}
        />
    );
};
