const BODY = (component, props) => {
    let mappedData = props.map(element => {
    return `<div class="mt-5 col">
                <div class="card m-auto">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.description}</p>
                        <footer class="">
                            <a href="${element.link}" class="btn btn-dark">Click here</a><span><img src="${element.icon}" alt="" /></span>
                        </footer>
                    </div>
                </div>
            </div>`

    })
    for(let datum of mappedData){
        component.innerHTML += datum
    }
}
