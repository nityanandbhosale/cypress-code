///<reference types="cypress" />

import {Resetpassw} from "../my pratice/POM/resetpassw"

const password = new Resetpassw()

describe('verify the Forgot passward functionality',function(){

    beforeEach(function(){
        password.forgoturl()
    })

    it('verify the forget functionality',function(){
        password.ohrmllogo
    })

    it('rest the username functionality',function(){
        password.resetof('Nitu123')
    })

    it('verify the goback on the ohrml site',function(){

        password.gobackward()
    
    })
})