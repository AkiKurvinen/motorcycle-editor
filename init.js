const initDesktop = () => {
    let partsHtml = '<ul>'
    let html = '' 

    for (const [key, value] of Object.entries(partsData)) {
        //console.log(`${key}: ${value}`);
        partsHtml += `<li id="${key}_txt"><b><a href="#${key}_option">${key}</a></b>`
        html += `<div class="option" id="${key}_option">`
            html += `<img src="img/thumbs/${key}1.png" alt="" id="${key}_thumb">`
            if(key=='color'){
                html += '<img src="img/thumbs/color_specular.png" alt="" id="colorSpecular">'
            }
            html += `<div><h3>${key}</h3>`
            
            value.forEach((element, index) => {
                if(index==0){
                    partsHtml += `<span><p>${element[0]}</p><i>${formatPrice(element[1])} €</i></span></li>`
                }
                let checkedVal = index==0 ? 'checked' : ''
                if (key != 'color'){
                html +=
                `<input type="radio" id="${key}${index+1}" name="${key}" value="${key}${index+1}" ${checkedVal}>
                <label for="${key}${index+1}">${element[0]}</label><br>`
                }


            });
            if (key == 'color'){
            html+= `
                <input type="range" id="colorrange" name="hue" min="0" max="360"
                    oninput="updateBikeColors('h', this.value)"
                    onchange="updateBikeColors('h', this.value)" >
                <label for="colorrange">H</label>

                <input type="range" id="colorrange" name="saturation" min="0" max="200" value="100"
                    oninput="updateBikeColors('s', this.value)"
                    onchange="updateBikeColors('s', this.value)" >
                <label for="colorrange">S</label>

                <input type="range" id="colorrange" name="lightness" min="0" max="100" value="100"
                    oninput="updateBikeColors('l', this.value)"
                    onchange="updateBikeColors('l', this.value)" >
                <label for="colorrange">L</label>
                `
            }
        
        html += '</div></div>'
    }
    partsHtml+= '<li><h4 id="totalAmount">Total: <span>0 €</span></h4></li></ul>'
    const baseElem = document.getElementById('options')
    baseElem.innerHTML = html
    
    const partsBaseElem = document.getElementById('parts')
    partsBaseElem.innerHTML = partsHtml
    
    changeBikeFilter()
    

}
const initMobile = () => {
    //let partsHtml = '<ul>'
    let html = '' 

    for (const [key, value] of Object.entries(partsData)) {
        //console.log(`${key}: ${value}`);
        //partsHtml += `<li id="${key}_txt"><b><a href="#${key}_option">${key}</a></b>`
        html += `<details class="option" id="${key}_option">`
            //html += `<img src="img/thumbs/${key}1.png" alt="" id="${key}_thumb">`
    
            html += `<summary><h3>${key}</h3><i>${value[0][0]}</i><span>${formatPrice(value[0][1])}</span></summary>`
            if(key=='color'){
                html += '<div id="color_thumb"><img src="img/thumbs/color1.png" alt="" id="color1">'
                html += '<img src="img/thumbs/color_specular.png" alt="" id="colorSpecular"></div>'
            }
            value.forEach((element, index) => {
                if(index==0){
                    //partsHtml += `<span><p>${element[0]}</p><i>${formatPrice(element[1])} €</i></span></li>`
                }
                let checkedVal = index==0 ? 'checked' : ''
                if (key != 'color'){
                html +=
                `<input type="radio" id="${key}${index+1}" name="${key}" value="${key}${index+1}" ${checkedVal}>
                <label for="${key}${index+1}"><i>${element[0]}</i> <span>${formatPrice(element[1])}</span></label><br>`
                }


            });
            if (key == 'color'){
            html+= `
            <div>
                <input type="range" id="huerange" name="hue" min="0" max="360"
                    oninput="updateBikeColors('h', this.value)"
                    onchange="updateBikeColors('h', this.value)" >
                <label for="huerange">H</label>

                <input type="range" id="satrange" name="saturation" min="0" max="200" value="100"
                    oninput="updateBikeColors('s', this.value)"
                    onchange="updateBikeColors('s', this.value)" >
                <label for="satrange">S</label>

                <input type="range" id="lightrange" name="lightness" min="0" max="100" value="100"
                    oninput="updateBikeColors('l', this.value)"
                    onchange="updateBikeColors('l', this.value)" >
                <label for="lightrange">L</label>
                </div>
                `
            }
        
        html += '</div></details>'
    }
    //partsHtml+= '<li><h4 id="totalAmount">Total: <span>0 €</span></h4></li></ul>'
    const baseElem = document.getElementById('options')
    baseElem.innerHTML = html
    
    //const partsBaseElem = document.getElementById('parts')
    //partsBaseElem.innerHTML = partsHtml
    
    changeBikeFilter()

}
    