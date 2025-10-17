import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = className.bind(styles)
function Button({ to,
    href, text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disable = false,
    rounded = false,
    leftIcon,
    children,
    className,
    onClick,
    ...passProps },
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //remove event listener when is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link;
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;