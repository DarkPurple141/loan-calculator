import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cost from '../../store/costs/models'
import State, { getCosts } from '../../store/selectors'
import TextField from '@atlaskit/field-text'

interface summaryProps {
    overallCost: number
}

type CostProps = summaryProps & Cost

const mapStateToProps = ({ costs }: State): CostProps => {
    return {
        ...costs,
        overallCost: getCosts(costs)
    }
}

class Costs extends Component<CostProps> {

    onChangeHandler = (key: string) => (e: any) => {
        return
    }

    render() {
        const { conveyancing, bankFees, renovations, stampDuty } = this.props
        return (
            <div className='costs'>
                <h2>Costs <code>{ this.props.overallCost }</code></h2>
                <TextField type="number" label="Conveyancing" value={conveyancing} onChange={this.onChangeHandler('conveyancing')}/>
                <TextField type="number" label="Bank Fees" value={bankFees} onChange={this.onChangeHandler('conveyancing')}/>
                <TextField type="number" label="Stamp Duty" value={stampDuty} onChange={this.onChangeHandler('conveyancing')}/>
                <TextField type="number" label="Renovations" value={renovations} onChange={this.onChangeHandler('conveyancing')}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Costs)