///<reference types="cypress" />

import {login} from "../my pratice/POM/Ohrml"

const singin =new login()


describe('POM testsenario for Orange hrml login functionality',function(){

    beforeEach(function(){
        singin.Visit()
    })

    it('verify the login i Or hrml with valid credentials',function(){

        singin.Enter("Admin","admin123")
    })

    it('verify for the invalid creadentials',function(){

        singin.Enter("Amin","admin1234")
        singin.wrongInfo()
    })

    it('verify the Ohrml logo',function(){
        
        singin.Ohrmllogo()
    })

    it('verify the forgot password functionality',function(){

        singin.forgotpassw()
    })


})
