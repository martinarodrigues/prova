describe('Pesquisa Web', () => {
    beforeEach(() => {
        cy.viewport(1800,1000)
      cy.visit('https://blogdoagi.com.br/')
    })
      
    it('Caminho Feliz - Efetua pesquisa', () => {
      cy.get('#search-open').click()
      cy.get('.desktop-search > .search-form > label > .search-field').type('Teste')
      cy.get('.desktop-search > .search-form > .search-submit').click()
      cy.wait(1000)
    })

    it('Caminho Feliz - Efetua pesquisa vazia', () => {
       cy.get('#search-open').click()
       cy.get('.desktop-search > .search-form > label > .search-field').type(' ')
       cy.get('.desktop-search > .search-form > .search-submit').click()
       cy.wait(1000)
    })
     
    it('Caminho Feliz - Efetua pesquisa com números', () => {
       cy.get('#search-open').click()
       cy.get('.desktop-search > .search-form > label > .search-field').type('12345')
       cy.get('.desktop-search > .search-form > .search-submit').click()
       cy.wait(1000)
    })

    it('Caminho Feliz - Abre a fecha pesquisa', () => {
        cy.get('#search-open').click()
        cy.wait(1000) 
        cy.get('#search-open').click()
      })
  
  })