import React from 'react';
import * as C from './styles';
import Link from 'next/link';

export function Nav() {
    return (
        <C.Nav>
            <ul>
                <li>
                    <Link href="/for-sale">
                        <a>
                            For Sale
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/for-rental">
                        <a>
                            For Rent
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/search-on-map">
                        <a>
                            Search on Map
                        </a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/daily-rental">
                        <a>
                            Daily Rental
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>
                            Projects
                        </a>
                    </Link>
                </li> */}
            </ul>
        </C.Nav>
    )
}
