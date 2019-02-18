import React, {Component} from 'react';
import Dialogbase from './uicomponent/dialogbase';
import agreement_pic from './uicomponent/agreement.png';
import close_gray_icon from './uicomponent/icon/close_gray_icon.svg';

class Argeement extends Component {

    constructor(props) {
        super(props)
        var state = {
            isChecked: false,
            show: false
        }
        if (this.props.show != undefined) {
            state.show = this.props.show;
        }
        this.state = state;
    }

    //react的componentWillReceiveProps周期是存在期用改变的props来判断更新自身state
    componentWillReceiveProps(nextProps) {
        const {show} = this.state
        if (show !== nextProps.show) {
            this.setState({
                show: true
            })
        }
    }

    handleChange(e) {
        this.setState({
            isChecked: e.target.checked
        })
    }

    postArticle() {
        if (!this.state.isChecked) {
            return
        }
        this.props.parent.postArticle('post', 0)
    }

    close() {
        this.setState({
            show: false,
            isChecked: false
        })
    }

    render() {
        return (
            <Dialogbase show={this.state.show} parent={this} title={false} contentStyle={{width: '400px'}}>
                <div className="model__agreement">
                    <div className="confirm-agreement-wrap">
                        <div className="confirm-close" onClick={this.close.bind(this)}>
                            <img src={close_gray_icon}/>
                        </div>
                        <div className="confirm-header">
                            <h3>确认提交文章吗？</h3>
                        </div>
                        <div className="confirm-content">
                            <img src={agreement_pic}/>
                        </div>
                        <div className="confirm-footer">
                            <div className="confirm-footer-line confirm-checkbox-wrap">
                                <label>
                                    <input type="checkbox"
                                           checked={this.state.isChecked}
                                           onChange={this.handleChange.bind(this)}/>
                                    <span>我同意</span>
                                    <a className="blue" href="http://www.jiguo.com/html/useragreement" target="blank">《极果试用活动协议》</a>
                                </label>
                            </div>
                            <div className="confirm-footer-line" onClick={this.postArticle.bind(this)}>
                                <div className={(this.state.isChecked ? 'usable' : 'disabled') + " confirm-footer-btn"}>
                                    确认提交
                                </div>
                            </div>
                            <div className="confirm-footer-line" onClick={this.close.bind(this)}>
                                <div className="confirm-footer-btn">再想想</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialogbase>
        )
    }

}

export default Argeement

