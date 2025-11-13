import { ButtonProps } from "@/interfaces";
import { Suspense } from "react";

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <button className="bg-amber-800 b-5 border-solid border-amber-700 rounded-lg p-2 my-2 hover:cursor-text hover:bg-amber-200">{text}</button>
            </Suspense>
        </>

    )
}

export default Button;