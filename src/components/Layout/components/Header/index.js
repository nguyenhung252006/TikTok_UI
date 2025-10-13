import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

console.log(images.logo)
console.log('faCircleXmark:', faCircleXmark.iconName);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok-logo'></img>
        </div>
        <div className={cx('search')}>
          <input placeholder='Search accounts and videos' spellCheck={false}></input>
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* Loading */}
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            {/* Icon Search */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('action')}>

        </div>
      </div>
    </header>
  );
}

export default Header;
