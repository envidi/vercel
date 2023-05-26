import classNames from "classnames/bind";
import styles from "./UserInfo.module.scss";

const cx = classNames.bind(styles);

const UserInfo = ()=>{
    return `<div class=${cx('userInfo')}>
                <div class=${cx('avatar')}>
                    <img src="https://elanta.app/nazar/arter-demo/img/face-1.jpg"/>
                </div>
                <div class=${cx('my-name')}>Nguyễn Văn Đức</div>
                <div class=${cx('my-role')}>
                    Front-end Developer
                    Ui/UX Designer,
                </div>
                
            </div>`;
}
export default UserInfo;