import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    
    if(request.method === 'POST') {
        const TOKEN = '7ef3b7fe5ce05f07aad723ac97599c';
        const client = new SiteClient(TOKEN);
        const registroCriado = await client.items.create({
            itemType: "968774",
            ...request.body,
            // title: "Comu teste",
            // imageUrl: "http://github.com/jfeijo.png"
        })
    
        console.log(registroCriado);
        response.json({
            dados: "algum dado qualquer",
            regitroCriado: registroCriado,
    })

        return;
    }
    
    response.status(404).json({
        message: 'Ainda nao temos nada no GET, mas no POST tem'
    })

}