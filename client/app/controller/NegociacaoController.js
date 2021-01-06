class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    //	client/app/controllers/NegociacaoController.js
    //	código	anterior	omitido	
    adiciona(event) {
        event.preventDefault();
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );
        console.log(data);
    }


    //	código	posterior	omitido



}