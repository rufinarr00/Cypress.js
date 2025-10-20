describe('Автотест на покупку нового аватара для своего тренера', function () {

    it('end-2-end тест на покупку аватара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.get('.style_1_heading_38_400_pokemon_classic').contains('Покемоны');
        cy.get('.style_1_heading_38_400_pokemon_classic').should('be.visible');
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > .shop__button').first().click(); 
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111');
        cy.get(':nth-child(1) > .style_1_base_input').type('0335');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('name');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
        cy.get('.payment_status_top_title').should('be.visible');
    })
})