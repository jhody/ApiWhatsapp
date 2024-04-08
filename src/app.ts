import { createBot, createFlow, MemoryDB, createProvider, addKeyword } from '@bot-whatsapp/bot'
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'

const flowBienvenida = addKeyword('hola').addAnswer('!Buenas bienvenido')

const main = async () => {
    const provider = createProvider(BaileysProvider)
    provider.initHttpServer(3002)
    provider.http.server.post('/send-message', handleCtx(async (bot ,req ,res) => {
        //const phone = req.body.phone
        const body = req.body
        const message = body.message
        const mediaUrl = body.mediaUrl
        await bot.sendMessage('51959804013',message,{
            media: mediaUrl
        })
        res.end('esto es del server de polka')
    }));
    await createBot({
        flow: createFlow([]),
        database: new MemoryDB(),
        provider
    })
}
main()