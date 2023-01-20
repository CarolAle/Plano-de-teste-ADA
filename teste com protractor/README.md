## Automação com Protractor

Execute o comando abaixo para instalar o protractor e o webdriver-manager globalmente:

### `npm install -g protractor`

Antes de iniciar o servidor, é necessário baixar os binários do Selenium e do chromedriver por padrão:

### `webdriver-manager update`

Em seguida, o servidor será criado com o comando:

### `webdriver-manager start`

Para executar os testes, basta rodar o comando abaixo dentro do diretório do projeto, na pasta onde o conf.js estiver:

### `protractor conf.js`