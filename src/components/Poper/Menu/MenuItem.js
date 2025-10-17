import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';



const cx = classNames.bind(styles);
function MenuItem({ data, onClick, onBack}) {
    const classess = cx('menu-item' , {separate : data.separate})
    return (
        <div className={cx('wrapper')}>
            <Button className={classess} leftIcon={data.icon} to={data.to}
                onClick={onClick} onBack={onBack}
            >{data.title}</Button>
        </div>
    );
}

export default MenuItem;