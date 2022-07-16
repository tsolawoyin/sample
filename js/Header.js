const HEADER = (component, props) => {
    component.innerHTML += `<header class="pt-5">
        <img
                class="btn d-block m-auto" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                src="https://www.codewars.com/users/Olawoyin/badges/large"
                alt=""/>


        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header bg-dark">
                        <h5 class="offcanvas-title text-white" id="offcanvasExampleLabel">What would you like to do?</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body bg-dark">
                        <div>
                                <div class="text-white display-6 mb-3"><a class="text-white" href="/">Homepage</a></div>
                                <div class="text-white text-end display-6 mb-3"><a class="text-white" href="https://www.codewars.com/users/Olawoyin">My Codewars Profile</a></div>
                                <div class="text-white display-6 mb-3"><a class="text-white" href="https://www.codewars.com/r/W8Xsyg">Join Codewars</a></div>
                                <div class="display-6 text-end mb-3"><a class="text-muted" href="#">Visit My Blog</a></div>
                        </div>
                </div>
        </div>
        </header>`
}