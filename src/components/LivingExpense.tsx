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
    children,
    ...other
}) => (
    <InlineContainer>
        <FieldTextStateless 
            onKeyDown={(e: KeyboardEvent) => enterHandler(e, () => onClickIcon({ key: label, id: (other as any).id!, value: cost }))}
            placeholder={textPlaceholder}
            isLabelHidden type="text" label=""
            value={label} 
            onChange={(e: any) => onEditText({ key: e.target.value, id: (other as any).id!})} />
        <FieldTextStateless 
            onKeyDown={(e: KeyboardEvent) => enterHandler(e, () => onClickIcon({ key: label, id: (other as any).id!, value: cost  }))}
            placeholder={numberPlaceholder}
            isLabelHidden type="number" label=""
            value={cost || ""} 
            onChange={(e: any) => onEditNumber({ key: label, value: Number(e.target.value), id: (other as any).id!  })} />
        <IconContainer onClick={() => onClickIcon({ key: label, id: (other as any).id!, value: cost })}>
            {children}
        </IconContainer>
    </InlineContainer>
)

export default LivingExpense