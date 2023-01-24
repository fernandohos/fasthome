import searchIcon from '@images/search-icon.svg';
import { supabase } from '@services/supabase';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as C from  './styles';
import Link from 'next/link';

export function SearchInput() {
    const [searchText, setSearchText] = useState('');
    const [autoCompleteOptions, setAutoCompleteOptions] = useState<{title: string, id: number}[]>([]);
    const [currentOptionIndex, setCurrentOptionIndex] = useState<null | number>(null);
    const router = useRouter();
    const previousController = useRef<AbortController>();

    async function getAutoComplete() {
        if (previousController.current) {
            previousController.current.abort();
        }

        const abortController = new AbortController();
        previousController.current = abortController;

        const { data, error } = await supabase.from("houses")
            .select('id, title')
            .ilike('title', searchText && ("%" + searchText + "%" ?? ''))
            .abortSignal(abortController.signal);

            console.log(data);
            setAutoCompleteOptions(data ?? []);
        return data;
    }

    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value);
        setCurrentOptionIndex(null);
        console.log(searchText);
        console.log(getAutoComplete());
    }

    useEffect(() => {
        console.log("OPTION", currentOptionIndex);
    }, [currentOptionIndex]);

    function handleKeyDown(event: any) {
        console.log("EVENT", event);

        if(event.keyCode === 40) { // Arrow Down
            console.log("keyDown");
            if (currentOptionIndex === null) {
                setCurrentOptionIndex(0);
            } else {
                setCurrentOptionIndex(currentOptionIndex === autoCompleteOptions.length - 1 ? 0 : p => Number(p) + 1); // if is last option set first option, else increment option
            }
        }

        else if(event.keyCode === 38) { // Arrow Up
            if (currentOptionIndex === null) {
                setCurrentOptionIndex(autoCompleteOptions.length - 1);
            } 
            else {
                setCurrentOptionIndex(currentOptionIndex === 0 ? autoCompleteOptions.length - 1 : p => Number(p) - 1); // if is first option set last option, else decrease option
            }
        }
        else if(event.keyCode === 13) { // Enter
            if(autoCompleteOptions.length > 0 && currentOptionIndex) {
                router.push(`house/${autoCompleteOptions[currentOptionIndex].id}`);
            } else {
                router.push({pathname: "/search", query: {q: searchText}});
            }
        }
    }

    function getHighlightedText(text: string, highlight: string) {
        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span> { parts.map((part, i) => 
            <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? "highlight" : "" }>
                { part }
            </span>)
        } </span>;
    }

    return (
        <C.InputContainer>
            <input 
                placeholder="search..." 
                type="text"
                onChange={handleSearchChange} 
                value={searchText}
                onKeyDown={handleKeyDown}
            />
            <button type="submit" className="icon-container">
                <div className="icon">
                    <Image src={searchIcon} alt="search icon" layout="fill" />
                </div>
            </button>
            {searchText && <ul>
                {autoCompleteOptions.map(({title, id}, i) => (
                    <Link key={id} passHref href={`house/${id}`}>
                        <li className={i === currentOptionIndex ? "active" : ""}>
                            {getHighlightedText(title, searchText)}
                        </li>
                    </Link>
                ))}
            </ul>}
        </C.InputContainer>
    )
}