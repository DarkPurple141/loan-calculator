import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    onClick: Function
}

const container: React.SFC<Props> = ({ children, onClick }) => (
    <a className="icon-container" onClick={(e) => onClick(e)}>
        {children}
    </a>
)

export default container