import React, { ReactNode } from "react";
import Link from "next/link";

type OrcamentoButton = {
    children: ReactNode
}

const OrcamentoButton: React.FC<OrcamentoButton> = ({ children }) => (
    <Link href={'/'}>
        <button className="w-[15rem] flex items-center justify-center h-8 bg-homeblue hover:bg-sky-700 duration-300 rounded-full">
            <span className="text-white font-rhd font-semibold tracking-wide text-sm">{children}</span>
        </button>
    </Link>
)

export default OrcamentoButton
