import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/components/Poper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEarthAsia, faGear, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import HeadlessTipppy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css';






const cx = classNames.bind(styles);

console.log(images.logo)
console.log('faCircleXmark:', faCircleXmark.iconName);
function Header() {
  const [SearchResult, setSearchResult] = useState([]);

  //handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem)
  }

  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: "Language",
        data: [
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Tiếng Việt",
          }
        ]
      }

    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and Help',
      to: '/Feedback',
    }, {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard Shortcuts',
    }
  ];

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },{
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },{
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate : true,
    }
  ]

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
          {currentUser ? (
            <>
              <Tippy content="Upload Video" delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text >Upload</Button>
              <Button primary>Log in</Button>

            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}
          >
            {currentUser ? (
              <img className={cx('user-avatar')} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a118499fd5d7fcc15f6d9da7c7960107~tplv-tiktokx-cropcenter:168:168.jpeg?dr=14577&refresh_token=15ffce3a&x-expires=1761267600&x-signature=Dj1%2FwYye%2Fg3Bdy4eg5QN85C23EE%3D&t=4d5b0474&ps=13740610&shp=a1d2006b&shcp=a1d2006b&idc=my' alt='Nguyen Van A'></img>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>

      </div>
    </header>
  );
}

export default Header;
