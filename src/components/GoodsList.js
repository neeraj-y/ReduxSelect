import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getGoods } from '../redux/reducers';
import { setCount } from '../redux/actions';

class GoodsList extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.count !== this.props.count) {
            this.props.setCount();
        }
    }

    render() {
        console.log('GoodsList rendered ', this.props.count + ' times');
        if (!this.props.goods) {
            return null;
        }

        return (
            <ul>
                {this.props.goods.map((g,i) => {
                    return <li key={i}>{`Name:  ${g.get('name')} -  Price:  ${g.get('price')}`}</li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        goods: getGoods(state.list),
        count: state.list.get('count')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCount: () => dispatch(setCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
