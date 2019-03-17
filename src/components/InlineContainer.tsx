import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const container: React.FunctionComponent<Props> = ({ children }) => (
    <div className="input-container">
        {children}
    </div>
)

export default container