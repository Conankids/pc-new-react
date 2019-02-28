import React, {Component} from 'react';
import Dialogbase from './uicomponent/dialogbase';
import close_gray_icon from './uicomponent/icon/close_gray_icon.svg';

class DialogImage extends Component {

    constructor(props) {
        super(props)
        var state = {
            show: false
        }
        if (this.props.show != undefined) {
            state.show = this.props.show;
        }
        this.state = state;
    }

    //react的componentWillReceiveProps周期是存在期用改变的props来判断更新自身state
    // componentWillReceiveProps(nextProps) {
    //     const {show} = this.state
    //     if (show !== nextProps.show) {
    //         console.log('dialog',show,nextProps)
    //         this.setState({
    //             show: true
    //         })
    //     }
    // }

    show(){
        this.setState({
            show: true
        })
    }

    postArticle() {
        this.close();
        if(this.props.show_type == 1){
            this.props.parent.sendPreview();
        }else{
            this.props.parent.Agreement.show();
        }
    }

    close() {
        this.setState({
            show: false
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
                            <h3>温馨提示</h3>
                        </div>
                        <div className="confirm-content">
                            <p className="confirm-content-text">图片素材库中有图片尚未插入文中，<br/>鼠标置于素材库图片上，点击即可插入！</p>
                        </div>
                        <div className="confirm-footer" style={{marginTop: 46 + 'px'}}>
                            <div className="confirm-footer-line" onClick={this.close.bind(this)}>
                                <div className="usable confirm-footer-btn">前往插入图片</div>
                            </div>
                            <div className="confirm-footer-line" onClick={this.postArticle.bind(this)}>
                                <div className="confirm-footer-btn">知道了，{this.props.show_type== 1 ? '继续预览' : '继续提交文章'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialogbase>
        )
    }

}

export default DialogImage

