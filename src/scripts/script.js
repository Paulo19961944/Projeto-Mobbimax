const bodyElement = document.body // Captura o Body
abrirMenuMobile.addEventListener('click', abrirMenu) // Adiciona Evento ao Botão de Abrir Menu
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona Evento ao Botão de Fechar Menu

//Função para abrir o menu
function abrirMenu(){
    bodyElement.style.overflow = 'hidden' // Trava a Tela
    abrirMenuMobile.classList.add('abrir-responsivo') // Adiciona a Classe ao Botão de Abrir Menu
    fecharMenuMobile.classList.add('fechar-responsivo') // Adiciona a Classe ao Botão de Fechar Menu
    menu.classList.add('menu-responsivo') // Adiciona Classe de Fechar o Menu
}

function fecharMenu(){
    bodyElement.style.overflow = 'auto' // Volta ao Padrão 
    abrirMenuMobile.classList.remove('abrir-responsivo') // Remove a Classe do Botão de Abrir Menu
    fecharMenuMobile.classList.remove('fechar-responsivo') // Remove a Classe do Botão de Fechar Menu
    menu.classList.remove('menu-responsivo') // Remove a Classe do Menu
}