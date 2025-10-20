import classNames from 'classnames/bind';
import styles from './AccounItems.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt='Hoa'></img>
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