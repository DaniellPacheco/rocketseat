const sqlite = require("sqlite"); // conecta
const sqlite3 = require("sqlite3"); // drive do banco
const path = require("path"); // pegar caminho do windows/linux/mac

async function sqliteConnection() {
    const database = await sqlite.open({
        // onde salvar - (caminho absoluto, volta uma pasta, criar arquivo database.db)
        filename: path.resolve(__dirname, "..", "database.db"),
        // selecionando o drive
        driver: sqlite3.Database
    });

    return database;
}

module.exports = sqliteConnection;