import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Poper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEarthAsia, faGear, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';







const cx = classNames.bind(styles);

console.log(images.logo)
console.log('faCircleXmark:', faCircleXmark.iconName);
function Header() {

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
        {/* search */}
        <Search/>

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
              <Image className={cx('user-avatar')} src='' alt='Nguyen Van A'></Image>
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
