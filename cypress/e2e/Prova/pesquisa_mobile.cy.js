describe('Pesquisa Mobile', () => {
  beforeEach(() => {
    
    cy.visit('https://blogdoagi.com.br/')
  })
    
  it('Caminho Feliz - Efetua pesquisa', () => {
    cy.get('#overlay-open').click()
    cy.get('.mobile-search > .search-form > label > .search-field').type('Teste')
    cy.get('.mobile-search > .search-form').submit()
    cy.wait(1000)
  })

  it('Caminho Feliz - Efetua pesquisa vazia', () => {
    cy.get('#overlay-open').click()
    cy.get('.mobile-search > .search-form > label > .search-field').type(' ')
    cy.get('.mobile-search > .search-form').submit()
    cy.wait(1000)
  })

  it('Caminho Feliz - Abre pesquisa e fecha', () => {
    cy.get('#overlay-open').click()
    cy.get('#overlay-close').click()
    cy.wait(1000)
  })

  it('Cenário de Erro - Efetua pesquisa com números', () => {
    cy.get('#overlay-open').click()
    cy.get('.mobile-search > .search-form > label > .search-field').type('12345')
    cy.get('.mobile-search > .search-form').submit()
    cy.wait(1000)
  })  

})