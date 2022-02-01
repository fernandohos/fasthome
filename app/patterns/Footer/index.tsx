import * as C from './styles';
import Link from 'next/link';

export function Footer() {
    return (
        <C.Container>
            <C.FooterList>
                <h3>Fasthome</h3>
                <ul>
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/">Our Awards</Link></li>
                    <li><Link href="/">Corporate Materials</Link></li>
                    <li><Link href="/">Advertisement</Link></li>
                    <li><Link href="/">Human Resources</Link></li>
                    <li><Link href="/">Sitemap</Link></li>
                </ul>
            </C.FooterList>
            <C.FooterList>
                <h3>Our Services</h3>
                <ul>
                    <li><Link href="/">Our Special Services</Link></li>
                    <li><Link href="/">Membership</Link></li>
                    <li><Link href="/">Corporate Membership</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/advertise/form">Advertise for free</Link></li>
                    <li><Link href="/search-on-map">Search On Map</Link></li>
                </ul>
            </C.FooterList>
            <C.FooterList>
                <h3>Other</h3>
                <ul>
                    <li><Link href="/">Posting Rules</Link></li>
                    <li><Link href="/">Terms Of Use</Link></li>
                    <li><Link href="/">Membership Agreement and Privacy Policy</Link></li>
                    <li><Link href="/">Operation Guide</Link></li>
                    <li><Link href="/">Cookie Policy</Link></li>
                    <li><Link href="/">About Protection of Personal Data</Link></li>
                    <li><Link href="/">Explicit Consent Text</Link></li>
                    <li><Link href="/">Contact</Link></li>
                </ul>
            </C.FooterList>
        </C.Container>
    )
}