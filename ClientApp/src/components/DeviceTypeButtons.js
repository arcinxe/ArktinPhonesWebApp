import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiCellphone, mdiCellphoneBasic, mdiTablet, mdiWatch, mdiPercent, mdiChartBar } from '@mdi/js';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export default class DeviceTypeButtons extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTypes: ['s', 'w', 't', 'p'], grouped: false, scaled: false };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onCheckboxBtnClick(selected) {
        // console.log("click")
        // console.log(selected)
        let scaled = this.state.scaled;
        let grouped = this.state.grouped;
        if (selected.length > 1) {
            if (selected === "scaling") {
                this.setState({ scaled: !this.state.scaled });
                scaled = !scaled;
            }
            if (selected === "chart") {
                this.setState({ grouped: !this.state.grouped });
                grouped = !grouped;
            }
        } else {
            const index = this.state.selectedTypes.indexOf(selected);
            if (index < 0) {
                this.state.selectedTypes.push(selected);
            } else {
                this.state.selectedTypes.splice(index, 1);
            }
            this.setState({ selectedTypes: [...this.state.selectedTypes] });
        }
        this.props.onChange([...this.state.selectedTypes], grouped, scaled);
    }

    render() {
        let noOutline = { outline: "none" };
        return (
            <div>
                <Tooltip title="smartphones">
                    <IconButton aria-label="smartphones" style={noOutline} onClick={() => this.onCheckboxBtnClick('s')}>
                        <Icon path={mdiCellphone} size={1.25} color={this.state.selectedTypes.includes('s') ? "#191919" : "#999999"} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="smartwatches">
                    <IconButton aria-label="smartwatches" style={noOutline} onClick={() => this.onCheckboxBtnClick('w')}>
                        <Icon path={mdiWatch} size={1.25} color={this.state.selectedTypes.includes('w') ? "#191919" : "#999999"} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="tablets">
                    <IconButton aria-label="tablets" style={noOutline} onClick={() => this.onCheckboxBtnClick('t')}>
                        <Icon path={mdiTablet} size={1.25} color={this.state.selectedTypes.includes('t') ? "#191919" : "#999999"} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="phones">
                    <IconButton aria-label="phones" style={noOutline} onClick={() => this.onCheckboxBtnClick('p')}>
                        <Icon path={mdiCellphoneBasic} size={1.25} color={this.state.selectedTypes.includes('p') ? "#191919" : "#999999"} />
                    </IconButton>
                </Tooltip>
                <div style={{ width: 20, display: "inline-block" }}></div>
                <Tooltip title="change chart grouping">
                    <IconButton aria-label="change chart grouping" style={noOutline} onClick={() => this.onCheckboxBtnClick("chart")}>
                        <Icon path={mdiChartBar} size={1.25} color={this.state.grouped ? "#191919" : "#999999"} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="change scaling">
                    <IconButton aria-label="change scaling" style={noOutline} onClick={() => this.onCheckboxBtnClick("scaling")}>
                        <Icon path={mdiPercent} size={1.25} color={this.state.scaled ? "#191919" : "#999999"} />
                    </IconButton>
                </Tooltip>
            </div>
        )
    }
}