import React, { ReactNode, KeyboardEvent } from 'react'
import InlineContainer from './InlineContainer'
import IconContainer from './IconContainer'
import { FieldTextStateless } from '@atlaskit/field-text'

type Props = {
    label: string,
    cost: number,
    onClickIcon: Function,
    onEditNumber: Function,
    onEditText: Function,
    children: ReactNode,
    textPlaceholder?: string,
    numberPlaceholder?: string,
}

const didPressEnter = ({ key }: KeyboardEvent) => key === 'Enter'
const enterHandler = (e: KeyboardEvent, callback: Function) => {
    if (didPressEnter(e)) callback()
}

const LivingExpense: React.FunctionComponent<Props> = ({
    label,
    cost,
    onClickIcon,
    onEditText,
    onEditNumber,
    textPlaceholder,
    numberPlaceholder,
    children
}) => (
    <InlineContainer>
        <FieldTextStateless onKeyDown={(e: KeyboardEvent) => enterHandler(e, () => onClickIcon({ key: label }))} placeholder={textPlaceholder} isLabelHidden type="text" label="" value={label} onChange={(e: any) => onEditText({ key: label, value: e.target.value})} />
        <FieldTextStateless onKeyDown={(e: KeyboardEvent) => enterHandler(e, () => onClickIcon({ key: label }))} placeholder={numberPlaceholder} isLabelHidden type="number" label="" value={cost || ""} onChange={(e: any) => onEditNumber({ key: label, value: Number(e.target.value) })} />
        <IconContainer onClick={() => onClickIcon({ key: label })}>
            {children}
        </IconContainer>
    </InlineContainer>
)

export default LivingExpense