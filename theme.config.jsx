import logo from "./public/logo2.png";
import { GiWallet } from "react-icons/gi";
const styles = {
    height: 10,
    width: 10,
};
export default {
    logo: (
        <p
            style={{
                display: "flex",
                marginLeft: "10px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <GiWallet />
            Coupon Vault
        </p>
    ),
    footer: {
        text: "Coupon Vault 2023",
    },
    project: {
        link: "https://github.com/Archit1706/LOC_Merge_Issues",
    },
    useNextSeoProps() {
        return {
            titleTemplate: "%s - Coupon Vault",
        };
    },
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="Coupon Vault" />
            <meta
                property="og:description"
                content="API Documentation for Coupon Vault"
            />
        </>
    ),
    banner: {
        key: "1.0-release",
        text: (
            <a href="https://coupon-vault.vercel.app" target="_blank">
                🎉 Yay! Coupon Vault 1.0 is released.
            </a>
        ),
    },
    primaryHue: 200,
    footer: {
        text: (
            <span>
                MI {new Date().getFullYear()} ©{" "}
                <a href="https://coupon-vault.vercel.app" target="_blank">
                    Coupon Vault
                </a>
                .
            </span>
        ),
    },
};
