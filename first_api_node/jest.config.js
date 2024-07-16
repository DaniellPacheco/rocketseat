module.exports = {
  bail: true, // se um teste parar ele para de executar os testes, se não ele continua executando até passar todos os testes
  coverageProvider: "v8",

  testMatch: [ // passando o padrão dos arquivos de teste
    "<rootDir>/src/**/*.spec.js"
  ],
}