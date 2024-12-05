import axios from 'axios';
import { Transaction } from '../types';


async function SHA256Checker(hash: string) {
    const types = ["btc", "ltc", "doge"]
    for (let i = 0; i < types.length; i++) {
        try {
            const response = await axios.get(`https://api.blockcypher.com/v1/${types[i]}/main/txs/${hash}&includeHex=true`, {
                headers: {
                    'X-Scope': '8a22163c-8662-4535-9050-bc5e1923df48',
                    "Accept": "application/json"
                }
            });
            return FetchTransactionAdress(response.data.addresses[0], types[i]);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(JSON.stringify(error.message));
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }
    return;
}

async function FetchTransaction(hash: string, type: string): Promise<Transaction> {
    try {
        const response = await axios.get(`https://api.blockcypher.com/v1/${type}/main/txs/${hash}&includeHex=true`, {
            headers: {
                'X-Scope': '8a22163c-8662-4535-9050-bc5e1923df48',
                "Accept": "application/json"
            }
        });
        return {
            block_hash: response.data.block_hash,
            block_height: response.data.block_height,
            block_index: response.data.block_index,
            hash: response.data.hash,
            addresses: response.data.addresses,
            total: response.data.total,
            fees: response.data.fees,
            size: response.data.size,
            vsize: response.data.vsize,
            preference: response.data.preference,
            relayed_by: response.data.relayed_by,
            confirmed: response.data.confirmed,
            received: response.data.received,
            ver: response.data.ver,
            double_spend: response.data.double_spend,
            vin_sz: response.data.vin_sz,
            vout_sz: response.data.vout_sz,
            confirmations: response.data.confirmations,
            confidence: response.data.confidence,
            inputs: response.data.inputs,
            outputs: response.data.outputs,
            type: type
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(JSON.stringify(error.message));
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

async function FetchTransactionAdress(address: string, type: string): Promise<Transaction> {
    try {
        const resadress = await axios.get('https://api.blockcypher.com/v1/' + type + '/main/addrs/' + address);
        const restransaction = await axios.get('https://api.blockcypher.com/v1/' + type + '/main/txs/' + resadress.data.txrefs[0].tx_hash);
        return {
            block_hash: restransaction.data.block_hash,
            block_height: restransaction.data.block_height,
            block_index: restransaction.data.block_index,
            hash: restransaction.data.hash,
            addresses: restransaction.data.addresses,
            total: restransaction.data.total,
            fees: restransaction.data.fees,
            size: restransaction.data.size,
            vsize: restransaction.data.vsize,
            preference: restransaction.data.preference,
            relayed_by: restransaction.data.relayed_by,
            confirmed: restransaction.data.confirmed,
            received: restransaction.data.received,
            ver: restransaction.data.ver,
            double_spend: restransaction.data.double_spend,
            vin_sz: restransaction.data.vin_sz,
            vout_sz: restransaction.data.vout_sz,
            confirmations: restransaction.data.confirmations,
            confidence: restransaction.data.confidence,
            inputs: restransaction.data.inputs,
            outputs: restransaction.data.outputs,
            type: type
        };
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(JSON.stringify(error.message));
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

async function checkAdressType(address: string) {
    switch (true) {
        case /^https:\/\/live\.blockcypher\.com\/[a-z]+\/tx\/[a-z0-9]+/.test(address): return FetchTransaction(address.split("/")[5], address.split("/")[3]);  // Blockcypher URL
        case /^(0x)?[0-9a-fA-F]{40}$/.test(address): return FetchTransactionAdress(address, "eth"); // Ethereum adress
        case /^(0x)?([A-Fa-f0-9]{64})$/.test(address): return FetchTransaction(address, "eth"); // Ethereum transaction hash
        case /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}/.test(address): return FetchTransactionAdress(address, "ltc"); // Litecoin adress Type 1
        case /^ltc([0-9a-zA-Z]{40})$/.test(address): return FetchTransactionAdress(address, "ltc");; // Litecoin adress Type 2
        case /^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/.test(address): return FetchTransactionAdress(address, "doge");; // Dogecoin adress
        case /^[a-fA-F0-9]{64}$/.test(address): return SHA256Checker(address) // SHA256 transaction hash
        default: return "Unknown"; // Unknown adress
    }
}

export default async function getTransaction(firstParam: string): Promise<Transaction | string> {
    try {
        const transaction = await checkAdressType(firstParam)

        // fuck off regex 🙂 🔥
        // Vår julskinka har rymt, och släkten kommer om en timme 🎤🔥
        // https://open.spotify.com/track/1ieq2YaXJBzyJ33fOYvG8W?si=c34385b0590545e3
        // använd gärna våran fina kod om ni vill ha buggar och problem 😎
        // Gjord med hat till regex av Cyber and Lazyllama

        return transaction || "Unknown";
    } catch (error) {
        console.log("Error: " + error);
        return ("Error :(")
    }
}

