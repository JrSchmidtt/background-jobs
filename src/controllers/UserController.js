import Queue from '../lib/Queue';


export default {
    async store(req, res) {
        console.log(req.body)
        const { email, name } = req.body;
        
        const user = {
            email,
            name
        }

        // Adiciona um trabalho na fila de envio de email
        const job = await Queue.add('RegistrationMail', { user });
        console.log("Job Criado: ",job)

        return res.json(user);
    }
}