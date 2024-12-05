export default interface Transaction {
    block_hash: string;
    block_height: number;
    block_index: number;
    hash: string;
    addresses: string[];
    total: number;
    fees: number;
    size: number;
    vsize: number;
    preference: string;
    relayed_by: string;
    confirmed: string;
    received: string;
    ver: number;
    double_spend: boolean;
    vin_sz: number;
    vout_sz: number;
    confirmations: number;
    confidence: number;
    inputs: {
        prev_hash: string;
        output_index: number;
        output_value: number;
        sequence: number;
        addresses: string[];
        script_type: string;
        age: number;
        witness: string[];
    }[];
    outputs: {
        value: number;
        script: string;
        addresses: string[];
        script_type: string;
        spent_by?: string;
    }[];
    type : string;
}