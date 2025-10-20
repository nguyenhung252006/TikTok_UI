import AccountItems from '~/components/AccountItems';
import { useState, useRef, useEffect } from 'react';
import { faSpinner, faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTipppy from '@tippyjs/react/headless'

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {

    const [SearchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    
    const inputRef = useRef();

    useEffect (() => {
        setTimeout(() => {
            setSearchResult([1,2,4,5])
        },5000,[])
    })

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleUnHideResult = () => {
        setShowResult(true)
    }

    return (
        <HeadlessTipppy
            interactive
            visible={showResult && SearchResult.length > 0}
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
            )}
                onClickOutside={handleHideResult}
            >

            <div className={cx('search')}>
                <input placeholder='Search accounts and videos'
                    ref={inputRef}
                    value={searchValue}
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={handleUnHideResult}
                ></input>
                {!!searchValue && (
                <button onClick={handleClear}  className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* Loading */}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    {/* Icon Search */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTipppy>
    );
}

export default Search;