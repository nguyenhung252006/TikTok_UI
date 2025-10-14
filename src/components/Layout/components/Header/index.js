import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItems from '~/components/AccountItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PoperWrapper } from '~/components/Poper';



const cx = classNames.bind(styles);

console.log(images.logo)
console.log('faCircleXmark:', faCircleXmark.iconName);
function Header() {
  const [SearchResult, setSearchResult] = useState([1, 2, 3]);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok-logo'></img>
        </div>
        <Tippy
          interactive
          visible={SearchResult.length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <h4 className={cx('search-title')}>
                  Accounts
                </h4>
                <AccountItems />
                <AccountItems />
                <AccountItems />
                <AccountItems />
                <AccountItems />
              </PoperWrapper>
            </div>
          )}>
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
        </Tippy>
        <div className={cx('action')}>

        </div>
      </div>
    </header>
  );
}

export default Header;
