getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        console.log(XMLHttpRequest.DONE);
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status >= 200 && request.status < 300) {
                let style = document.createElement('style');
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('css 加载失败')
            }
        }
    }

    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState  === XMLHttpRequest.DONE) {
            if(request.status >= 200 && request.status < 300 ) {
                let js2  = document.createElement('script')
                js2.innerHTML = request.response
                document.body.appendChild(js2)
            }else {
                alert('js2 加载失败')
            }
        }
    }

    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status >= 200 && request.status < 300 ) {
                let htmlcontent  =  request.response
                let div = document.createElement('div')
                div.innerHTML  = htmlcontent
                document.body.appendChild(div)
            }else {
                alert('html 加载失败')
            }
        }
    }
    request.send()
}


getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status >= 200 && request.status < 300) {
                console.log("response");
                console.log(request.response);
                console.log('xml');
                let dom  = request.responseXML
                let warning  = dom.getElementsByTagName('warning')[0].textContent
                console.log(warning);


            }
        }
    }
    request.send()

}


getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status >= 200 && request.status<300){
                let json = request.response
                console.log(json)
            }
        }
    }
    request.send()
}
