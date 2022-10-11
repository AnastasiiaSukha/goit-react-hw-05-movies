import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Spinner } from "./Loader.styled";


export const Loader = () => {
    return (<Spinner>
        <TailSpin color="#f6eabe" height={80} width={80} />
    </Spinner>
        )
}