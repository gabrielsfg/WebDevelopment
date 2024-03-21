import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var correctPassword = false;

//Configurando o body-parse como middleware
app.use(bodyParser.urlencoded({extended: true}));

//Criando uma funcao que recebe a senha e verifica se ela esta certa e manda
function checkPassword(req, res, next){
    const password = req.body["password"];
    if(password == "ILoveProgramming"){
        correctPassword = true;
    }
    else{
        correctPassword = false;
    }
    console.log(correctPassword + " " + password);
    next();
}

app.use(checkPassword);


//Define a rota quando uma requisicao GET eh chamada fornecendo o caminho para o arquivo index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req, res) => {
    if(correctPassword){
        res.sendFile(__dirname + '/public/secret.html');
    }else{
        res.redirect('/');
    };
});

//Iniciando o servidor HTTP Express na porta "port" no host padrao "localhost"
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});