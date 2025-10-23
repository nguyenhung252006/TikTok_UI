import AccountItems from '~/components/AccountItems';
import { useState, useRef, useEffect } from 'react';
import { faSpinner, faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTipppy from '@tippyjs/react/headless'
import { useDebounce } from '~/hooks';

import * as searchService from "~/apiService/SearchService"


import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {

    const [SearchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }

        const fetchApi = async () => {
            setLoading(true)
            const result = await searchService.search(debounced);
            setSearchResult(result)
            setLoading(false)
        }

        fetchApi();

    }, [debounced])


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

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }

 

    return (
        <HeadlessTipppy
            interactive
            visible={showResult && SearchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h4 className={cx('search-title')}>
                            {SearchResult.map(result => (
                                <AccountItems key={result.id} data={result} />
                            ))}
                        </h4>
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
                    onChange={handleChange}
                    onFocus={handleUnHideResult}
                ></input>
                {!!searchValue && !loading && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* Loading */}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                    {/* Icon Search */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTipppy>
    );
}

export default Search;