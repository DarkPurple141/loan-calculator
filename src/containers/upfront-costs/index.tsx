import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as costActions from '../../store/costs/actions'
import Cost from '../../store/costs/models'
import State, { getCosts } from '../../store/selectors'
import TextField from '@atlaskit/field-text'

import ContentSection from '../../components/ContentSection'

interface summaryProps {
    overallCost: number
}

interface CostDispatchers<T> {
    setCosts: (payload: T) => void
}

type CostProps = summaryProps & Cost

class Costs extends Component<CostProps & CostDispatchers<ActionPayload>> {

    onChangeHandler = (key: string) => (e: any) => {
        this.props.setCosts({
            key,
            value: Number(e.target.value),
        })
    }

    render() {
        const { conveyancing, bankFees, renovations, stampDuty } = this.props
        return (
            <ContentSection
                header={<h2>Other Costs <code>{ this.props.overallCost }</code></h2>}
            >
                <TextField type="number" label="Conveyancing" value={conveyancing} onChange={this.onChangeHandler('conveyancing')}/>
                <TextField type="number" label="Bank Fees" value={bankFees} onChange={this.onChangeHandler('bankFees')}/>
                <TextField type="number" label="Stamp Duty" value={stampDuty} onChange={this.onChangeHandler('stampDuty')}/>
                <TextField type="number" label="Renovations" value={renovations} onChange={this.onChangeHandler('renovations')}/>
            </ContentSection>
        )
    }
}

const mapStateToProps = ({ costs }: State): CostProps => {
    return {
        ...costs,
        overallCost: getCosts(costs)
    }
}

const mapDispatchToProps = (dispatch: any): CostDispatchers<ActionPayload> => {
    return bindActionCreators(costActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Costs)