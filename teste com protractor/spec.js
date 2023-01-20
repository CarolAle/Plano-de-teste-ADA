const { protractor } = require('protractor');
var Home = require('./pages/home.js');

browser.ignoreSynchronization = true;

describe('Teste Youtube', function() {
  var EC = protractor.ExpectedConditions;
  var home = new Home();
    
  beforeAll(function() {
    home.visit();
    browser.driver.manage().window().maximize();
  });

  it('Devo acessar o site', function() { 
    expect(EC.visibilityOf(home.logo));
  });


   it('Devo pesquisar um vídeo', () => { 
    home.search.sendKeys(home.text);
    home.search.sendKeys(protractor.Key.ENTER);
    expect(EC.textToBePresentInElement(home.titlelist, home.text));
   });

   it('Devo acessar o video', () => { 
    browser.wait(EC.elementToBeClickable(home.titlelist), 8000);
    home.titlelist.click();
    expect(EC.textToBePresentInElement(home.title, home.text));
   });

   it('Devo alterar a resolução', function() { 
    browser.wait(EC.elementToBeClickable(home.anuncio), 8000);
    home.anuncio.click();
    browser.wait(EC.elementToBeClickable(home.detalhes), 3000);
    home.detalhes.click();
    browser.wait(EC.elementToBeClickable(home.qualidade), 3000);
    home.qualidade.click();
    browser.wait(EC.elementToBeClickable(home.resolucao), 3000);
    home.resolucao.click();
   });

});
