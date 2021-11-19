import Image from "next/image";
import Logo from "public/assets/brandmarks/footer-logo.svg";
import style from "./footer.module.scss";
import {
    FooterWrapper,
    LogoWrapper,
    MenuRight,
    MenuRightItem,
    FooterBottomWrapper,
    FooterNav,
    NavItem
} from "./styles";


export default function FooterBottom() {
    return (
        <>
            <FooterWrapper>
                <LogoWrapper>
                    <Image
                    src={Logo}
                    alt="Fibonacci"
                    />
                </LogoWrapper>
                <LogoWrapper>
                    asdfsadfsadf
                </LogoWrapper>
                <MenuRight>
                    <MenuRightItem>Other</MenuRightItem>
                    <MenuRightItem>On</MenuRightItem>
                    <MenuRightItem>Like</MenuRightItem>
                </MenuRight>
            </FooterWrapper>
            <FooterBottomWrapper>
                <FooterNav>
                    <NavItem>
                        © 2021 Fibonacci
                    </NavItem>
                    <NavItem>
                        Site Design by Traffic
                    </NavItem>
                    <NavItem href="/products">
                        Terms & Conditions
                    </NavItem>
                    <NavItem href="/products">
                        Privacy Policy
                    </NavItem>
                    <NavItem href="/products">
                        Get Help
                    </NavItem>
                </FooterNav>
            </FooterBottomWrapper>
        </>
    )
}