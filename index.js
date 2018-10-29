'use strict';

function generate(nif) {

    const letterArray = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var resultLetter = letterArray[nif%23];
    var result = {
        'letter': resultLetter,
        'nif': nif+resultLetter,
    };
    
    return result;
}

module.exports = { generate };