const INPUT = (component, type = "text", message = "value", props) => {
    return component.innerHTML += ` 
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input
                type="${type}"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="...input ${message}"
            />
        </div>`
}