import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
import config from "~/config";
import Menu, {MenuItem} from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />}></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUsers} />}></MenuItem>
                <MenuItem title="Live" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideo}/>}></MenuItem>
            </Menu> 
        </aside>
     );
}

export default Sidebar;