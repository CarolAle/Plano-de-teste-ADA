const { element } = require("protractor");

browser.ignoreSynchronization = true;

var Home = function() {
    this.text = 'O que são Testes Automatizados | Programando com Vinicius Dias';
    this.logo = element(by.id("logo-icon"));
    this.search = element(by.xpath('//input[@id="search"]'));
    this.titlelist = element(by.css('a[title="O que são Testes Automatizados | Programando com Vinicius Dias"]'));
    this.title = element(by.xpath('//h1[@class="style-scope ytd-watch-metadata"]'));
    this.detalhes = element(by.xpath('//button[@title="Detalhes"]'));
    this.qualidade = element(by.xpath('//div[normalize-space()="Qualidade"]'));
    this.anuncio = element(by.xpath('//span[@class="ytp-ad-skip-button-icon"]'));
    this.resolucao = element(by.xpath('//span[normalize-space()="480p"]'));


}

Home.prototype.visit = function() {
    browser.get('https://www.youtube.com/');
}


module.exports = Home;
