//create map 
const map = L
    .map("mapid")
    .setView([-27.222633, -49.6455874], 15);
//create and add titleLayer
L
    .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    .addTo(map);
//create icon
const icon = L
    .icon({
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68]
    });
let marker;
//create popup layer
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" > </a>')


//create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker)
    // add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map);
})

//add field photos 
function addPhotoField() {
    // pegar o container de fotos #imagens
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // relaizar o clone da ultima imagem adicionada 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    // limpar o campo antes de adicionar  ao container
    input.value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}
// delete field photos
function deletField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    // apagar o campo 
    span.parentNode.remove()

}
// Select 'atendimento fim de semana'
function toggleSelect(event) {
    // retirar a class .active dos 2 btns
    document.querySelectorAll('.button-select button')
        .forEach((button) => button.classList.remove('active'))
    // colocar a class .active do botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    // verificar se sim ou não
    input.value = button.dataset.value
}
function validate(event) {

    // validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if (document.querySelector('[name ="lat"]').value && document.querySelector('[name ="lng"]').value ) {
        needsLatAndLng = true;
    }
    if (!needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}