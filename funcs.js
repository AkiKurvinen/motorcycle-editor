let hue = 0;
let saturation = 1;
let lightness = 1;

const formatPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const changeBikeFilter = () => {
    document.getElementById('colorhue').setAttribute('style', `filter: hue-rotate(${hue}deg) saturate(${saturation}) brightness(${lightness});`)
    document.getElementById('color_thumb').setAttribute('style', `filter: hue-rotate(${hue}deg) saturate(${saturation}) brightness(${lightness});`)
}
const updateBikeColors = (param, value) => {
    if(param == 'h'){
            hue = value;
    }
    else if(param == 's'){
            saturation = value/100;
    }
    else if(param == 'l'){
            lightness = value/100;
    }
    
    changeBikeFilter()
}

const changeThumbnail = (partName, itemNumber) => {
    const elem = `${partName}_option`
    const thumbnailElem = document.querySelector(`#${elem}>img`)
    const source = thumbnailElem.getAttribute('src')
    thumbnailElem.setAttribute('src', `img/thumbs/${partName}${itemNumber}.png`)
}
const updatePrice = () => {
    let totalSum = 0
    document.querySelectorAll('#parts i').forEach(element => {
        totalSum += parseInt(element.innerHTML.replace(' ',''))
    });

    let price = formatPrice(totalSum)
    document.querySelector("#totalAmount span").innerHTML = `${price} €`;
}
const updateMotorcycle = (partName, itemNumber) => {
    const imgElem = document.getElementById(partName)
    imgElem.setAttribute('src', `img/preview/${partName}${itemNumber}.png`)  
}
const updatePartsList = (item, itemNumber) => {
    const elem = document.getElementById(`${item}_txt`)
    elem.querySelector('p').innerHTML = partsData[item][itemNumber-1][0]
    elem.querySelector('i').innerHTML = formatPrice(partsData[item][itemNumber-1][1]) + ' €'
}
const updateView = (item) => {
    const partName = item.slice(0, -1);
    const itemNumber = parseInt(item.slice(-1));

    changeThumbnail(partName, itemNumber)   
    updateMotorcycle(partName, itemNumber)
    updatePartsList(partName, itemNumber)    
    updatePrice()
}
const darkMode = () => {
    var checkBox = document.getElementById("darkmode");
    var editorElem = document.getElementById("editor");
    if (checkBox.checked == true){
        editorElem.className = 'dark'
    } else {
            editorElem.className = 'light'
    }
}

/* mobile */

const updateMobilePrice = () => {
    let totalSum = 0
    document.querySelectorAll('summary span').forEach(element => {
        totalSum += parseInt(element.innerHTML.replace(' ',''))
    });

    let price = formatPrice(totalSum)
    document.querySelector("#priceTag span").innerHTML = `${price} €`;
}

const updateSummaryList = (item, itemNumber) => {
    const elem = document.getElementById(`${item}_option`)
    elem.querySelector('i').innerHTML = partsData[item][itemNumber-1][0]
    elem.querySelector('span').innerHTML = formatPrice(partsData[item][itemNumber-1][1])
}

const updateViewMob = (item) => {
    const partName = item.slice(0, -1);
    const itemNumber = parseInt(item.slice(-1));

    updateMotorcycle(partName, itemNumber)
    updateSummaryList(partName, itemNumber)    
    updateMobilePrice()
    
}