import Image from "next/image";
import Logo from "public/assets/brandmarks/footer-logo.svg";
import Text from "@components/common/typography";
import style from "./footer.module.scss";
import {
    FooterWrapper,
    LogoWrapper,
    MiddleWrapper,
    MenuItem,
    MenuItemTitle,
    MenuListItem,
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
                <MiddleWrapper>
                    <MenuItem>
                        <MenuItemTitle>Our products</MenuItemTitle>
                        <MenuListItem arrowVisible={false} href="/products">Collections</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">In Use</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">Latest News</MenuListItem>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemTitle>Support</MenuItemTitle>
                        <MenuListItem arrowVisible={false} href="/products">Technical guides</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">Specifications</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">Maintenance & care guides</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">Downloads</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">FAQs</MenuListItem>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemTitle>Samples and contact</MenuItemTitle>
                        <MenuListItem arrowVisible={false} href="/products">Ordering samples</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">Call 1300 342 662</MenuListItem>
                        <MenuListItem arrowVisible={false} href="/products">Contact Us</MenuListItem>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemTitle>Tag us</MenuItemTitle>
                        <Text as="p" color="white" variant="Body-Regular" marginTop="20px">
                            Use  
                            <Text 
                            as="a" 
                            href="/products" 
                            color="white" 
                            variant="Body-Regular"
                            > #likenoother  </Text> 
                            and on social to tempus mi nulla cursus netus consequat ultrices
                        </Text>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemTitle>Follow us</MenuItemTitle>
                        <MenuListItem arrowVisible={true} href="/products">Instagram</MenuListItem>
                        <MenuListItem arrowVisible={true} href="/products">Facebook</MenuListItem>
                        <MenuListItem arrowVisible={true} href="/products">Linkedin</MenuListItem>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemTitle>Newsletter</MenuItemTitle>
                        <Text as="p"  color="white" variant="Body-Regular" marginTop="20px">
                            Be the first to know about season launches, exciting new products, and exclusive offers
                            by joining our mailing list.
                        </Text>
                        
                    </MenuItem>
                </MiddleWrapper>
                <MenuRight>
                    <MenuRightItem>Other</MenuRightItem>
                    <MenuRightItem>No</MenuRightItem>
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