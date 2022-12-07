import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        console.log(req.body)
        const { email, name } = req.body;
        
        const user = {
            email,
            name
        }

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem vindo ao sistema de filas!`
        });

        return res.json(user);
    }
}