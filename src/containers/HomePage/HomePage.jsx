import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StepHeader from "../components/StepHeader/StepHeader";
import * as HomePageAction from '../../actions/HomePage/HomePageAction';

class HomePage extends Component {
  /**
   * テーブル選択
   * チェックボックス値変更時
   */
  handleChekedSelectTbl = (selectedTbl) => {
    const { HomePageActionBind } = this.props;
    HomePageActionBind.chekedSelectTbl(selectedTbl);
  }

  /**
   * カラム選択
   * チェックボックス値変更時
   */
  handle

  /**
   * ステップ選択
   */
  handleChangeStepper = (selectedStepper) => {
    const { HomePageActionBind } = this.props;
    HomePageActionBind.changeStepper(selectedStepper);
  }

  render() {
    const {
      selectedTable,
      selectedColumn,
      stepValue
    } = this.props;

    return (
      <div>
      <h1>HomePage</h1>
      <StepHeader stepValue={stepValue} handleChangeStepper={this.handleChangeStepper} />
      </div>
    )
  }
}
HomePage.propTypes = {
  selectedTable: PropTypes.array,
  selectedColumn: PropTypes.array,
};

function mapStateToProps(state) {
  const {
    selectedTable,
    selectedColumn,
    stepValue
  } = state.HomePageReducer;
  return {
    selectedTable,
    selectedColumn,
    stepValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    HomePageActionBind: bindActionCreators(HomePageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
