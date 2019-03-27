import React, { ReactNode } from 'react'
import Panel from '@atlaskit/panel'

interface ContentSectionProps {
    header: ReactNode,
    children: ReactNode,
    isDefaultExpanded?: boolean
}

export default ({
    header,
    children,
    isDefaultExpanded
}: ContentSectionProps) => (
    <Panel
        isDefaultExpanded={isDefaultExpanded}
        className='content-section'
        header={header}
    >
        { children }
    </Panel>
)