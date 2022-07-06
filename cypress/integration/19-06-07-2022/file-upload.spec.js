// http://automationpractice.com/index.php?controller=contact%27
// https://css-tricks.com/examples/DragAndDropFileUploading/
// https://davidwalsh.name/demo/multiple-file-upload.php
 //https://davidwalsh.name/demo/multiple-file-upload.php


 describe('verify the functionality for file upload',function(){
    let filePath = 'about.jpg'
    let filePath2 = 'example.json'
    it('verify the basic file upload and validate',function(){
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html?filename=Capture.png')
        cy.get('#myFile').attachFile(filePath)
        cy.get('#submit-button').click()
        cy.url().should('contain',filePath)
    })
    it('verify the basic file upload and validate example -2 ',function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile(filePath)
        cy.get('span[class="filename"]').invoke('text').should('contain',filePath)
    })

    it('verify the basic file upload and validate example -3',function(){

        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile(filePath)
        cy.get('.box__success').should('contain','Done')


    })

    
    it('verify the basic file upload and validate example -3',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([filePath,filePath2])
        cy.get('#fileList').children().should('have.length.greaterThan',1)

    })

    it('verify the basic file upload and validate example -3',function(){

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile(filePath)
        //.attachFile(filePath2)
        cy.get('#fileList').children().should('have.length',1)

    })

    it.only('verify the basic file upload and validate example -3',function(){

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile({ filePath:filePath, fileName: 'hello.jpg' });
       

    })




 })