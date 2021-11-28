import React, {useState} from 'react';
import * as C from './styles';

export function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <C.Icon onClick={e => setShowMenu(prev => !prev)} show={showMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </C.Icon>
    )
}
