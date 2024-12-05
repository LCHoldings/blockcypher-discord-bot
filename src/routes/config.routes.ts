import 'dotenv/config';
import GetTransaction from '../functions/transaction.functions';
import cryptoconvert from '../functions/cryptoconverter.functions';
import convertToUnixTimestamp from '../functions/convertToUnixTimestamp.functions';
import { InteractionType, InteractionResponseType, verifyKeyMiddleware } from 'discord-interactions';
import express, { Request, Response } from "express";
export const Router = express.Router()

Router.post('/interactions', verifyKeyMiddleware(String(process.env.PUBLIC_KEY)), async (req: Request, res: Response) => {
    const { type, data } = req.body;

    if (type === InteractionType.PING) {
        res.send({ type: InteractionResponseType.PONG }).status(200);
        return;
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
        const { name } = data;


        if (name === "transactionlookup") {
            const message = data.resolved.messages[data.target_id];
            var transaction = await GetTransaction(message.content);

            if (!transaction) {
                res.send({
                    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: 'Please provide a valid Transaction and type or a valid url from blockcypher',
                    },
                }).status(200);
                return;
            }
            if (typeof transaction === "string") {
                res.send({
                    response_type: "ephemeral",
                    text: "There was an error fetching transaction: \n ```" + transaction + "```"
                }).status(500);
                return;
            }
            const embed = {
                type: 'rich',
                title: `__**Tracking Information**__`,
                color: 2326507,
                fields: [
                    {
                        name: `Block Hash`,
                        value: transaction.block_hash,
                        inline: false,
                    },
                    {
                        name: `Block Height`,
                        value: transaction.block_height,
                        inline: false,
                    },
                    {
                        name: `Transaction Hash`,
                        value: transaction.hash,
                        inline: false,
                    },
                    {
                        name: `Confirmations`,
                        value: `${transaction.confirmations > 6 ? '6+' : `${transaction.confirmations} / 6`}`,
                        inline: false,
                    },
                    {
                        name: `Total`,
                        value: ` ${cryptoconvert(transaction.type, transaction.total)} ${transaction.type.toUpperCase()}`,
                        inline: false,
                    },
                    {
                        name: `Fees`,
                        value: ` ${cryptoconvert(transaction.type, transaction.fees)} ${transaction.type.toUpperCase()}`,
                        inline: false,
                    },
                    {
                        name: `Confirmed`,
                        value: ` ${"<t:" + convertToUnixTimestamp(transaction.confirmed) + ">" || "Not Confirmed"}`,
                        inline: false,
                    },
                    {
                        name: `Received`,
                        value: ` ${"<t:" + convertToUnixTimestamp(transaction.received) + ">"}`,
                        inline: false,
                    },
                    {
                        name: `Confidence`,
                        value: ` ${transaction.confidence == null ? "Not Available" : (transaction.confidence * 100) + "%"}`,
                        inline: false,
                    },
                ],
                url: `https://live.blockcypher.com/${transaction.type}/tx/${transaction.hash}?includeConfidence=true`
            };
            res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    embeds: [embed],
                },
            }).status(200);
            return;

        }
        if (name === "transactionsearch") {
            const option = data.options[0];
            var transaction = await GetTransaction(option.value);
            if (!transaction) {
                res.send({
                    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: 'Please provide a valid Transaction and type or a valid url from blockcypher',
                    },
                }).status(200);
                return;
            }
            if (typeof transaction === "string") {
                res.send({
                    response_type: "ephemeral",
                    text: "There was an error fetching transaction: \n ```" + transaction + "```"
                }).status(500);
                return;
            }
            const embed = {
                type: 'rich',
                title: `__**Tracking Information**__`,
                color: 2326507,
                fields: [
                    {
                        name: `Block Hash`,
                        value: transaction.block_hash,
                        inline: false,
                    },
                    {
                        name: `Block Height`,
                        value: transaction.block_height,
                        inline: false,
                    },
                    {
                        name: `Transaction Hash`,
                        value: transaction.hash,
                        inline: false,
                    },
                    {
                        name: `Confirmations`,
                        value: `${transaction.confirmations > 6 ? '6+' : `${transaction.confirmations} / 6`}`,
                        inline: false,
                    },
                    {
                        name: `Total`,
                        value: ` ${cryptoconvert(transaction.type, transaction.total)} ${transaction.type.toUpperCase()}`,
                        inline: false,
                    },
                    {
                        name: `Fees`,
                        value: ` ${cryptoconvert(transaction.type, transaction.fees)} ${transaction.type.toUpperCase()}`,
                        inline: false,
                    },
                    {
                        name: `Confirmed`,
                        value: ` ${"<t:" + convertToUnixTimestamp(transaction.confirmed) + ">" || "Not Confirmed"}`,
                        inline: false,
                    },
                    {
                        name: `Received`,
                        value: ` ${"<t:" + convertToUnixTimestamp(transaction.received) + ">"}`,
                        inline: false,
                    },
                    {
                        name: `Confidence`,
                        value: ` ${transaction.confidence == null ? "Not Available" : (transaction.confidence * 100) + "%"}`,
                        inline: false,
                    },
                ],
                url: `https://live.blockcypher.com/${transaction.type}/tx/${transaction.hash}?includeConfidence=true`
            };
            res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    embeds: [embed],
                },
            }).status(200);
            return;

        }
    }
    res.send({
        error: 'Unknown interaction type',
    }).status(200);
    return;
});