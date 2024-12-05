export default function cryptoconvert(crypto: string, amount: number) {
    switch (crypto) {
        case "btc": return amount / 100000000;
        case "ltc": return amount / 100000000;
        case "eth": return amount / 1000000000000000000;
        case "doge": return amount / 100000000;
        default: throw new Error("Unsupported cryptocurrency");
    }
}