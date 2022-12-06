export default {
    async store(req, res) {
        console.log(req.body)
        const { email, name } = req.body;
        
        const user = {
            email,
            name
        }

        // envia o usuário para o banco de dados

        return res.json(user);
    }
}