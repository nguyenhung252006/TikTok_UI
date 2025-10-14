import classNames from 'classnames/bind';
import styles from './AccounItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/70c809b57fd9492de7acc74547a3ffca~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=496326d6&x-expires=1760626800&x-signature=PW6XDWT7DoaO%2Bv9tTNj2zZnOkXg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt='Hoa'></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dao Le Phuong Hoa</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>daolephuonghoa</span>
            </div>
        </div>
    );
}

export default AccountItems;