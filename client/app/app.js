let controller = new NegociacaoController();
//	bind	aqui!
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
