import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const container: React.SFC<Props> = ({ children }) => (
    <div style={{
        display: 'flex'
    }}>
        {children}
    </div>
)

export default container