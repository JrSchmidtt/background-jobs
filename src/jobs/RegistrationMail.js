import Mail from "../lib/Mail";

export default {
    key: "RegistrationMail",
    async handle({ data }) {
        console.log("A fila executou!")
        const { email, name } = data;
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem vindo ao sistema de filas!`
        });
    }
}