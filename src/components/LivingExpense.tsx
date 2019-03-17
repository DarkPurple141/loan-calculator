import React from 'react'
import InlineContainer from './InlineContainer'
import IconContainer from './IconContainer'
import TextField from '@atlaskit/field-text'
import CrossIcon from '@atlaskit/icon/glyph/cross'

type Props = {
    label: string,
    cost: number,
    onDeleteExpense: Function,
    onUpdateExpense: Function
}

const LivingExpense: React.SFC<Props> = ({
    label,
    cost,
    onDeleteExpense,
    onUpdateExpense
}) => (
    <InlineContainer key={label}>
        <TextField isLabelHidden type="text" label="" value={label} />
        <TextField isLabelHidden type="number" label="" value={cost}onChange={(e: any) => onUpdateExpense({ key: label, value: Number(e.target.value) })} />
        <IconContainer onClick={() => onDeleteExpense({ key: label })}>
            <CrossIcon size="medium" label="close"></CrossIcon>
        </IconContainer>
    </InlineContainer>
)

export default LivingExpense