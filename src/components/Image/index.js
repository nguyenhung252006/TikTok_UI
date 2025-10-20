import { forwardRef } from "react";
import images from "~/assets/images";
import { useState } from "react";
import style from "~/assets/images/Image.module.scss"
import classNames from "classnames";



const Image = forwardRef(({ src, alt, className, falback: customFalback = images.noImage, ...props }, ref) => {

    const [falback, setFalBack] = useState('')

    const handeleError = () => {
        setFalBack(customFalback)
    }

    return <img ref={ref} className={classNames(style.wrapper, className)} src={falback || src} alt={alt} {...props} onError={handeleError} ></img>
})

export default Image;