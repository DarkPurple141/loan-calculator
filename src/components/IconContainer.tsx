import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    onClick: Function
}

const container: React.FunctionComponent<Props> = ({ children, onClick }) => (
    <button className="icon-container" onClick={(e) => onClick(e)}>
        {children}
    </button>
)

export default container