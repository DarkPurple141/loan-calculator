import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const container: React.SFC<Props> = ({ children }) => (
    <div className="input-container">
        {children}
    </div>
)

export default container