let emailCollectorForm = document.getElementById("emailCollector")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    
    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")

    let updatedHtmlContent = `
        <div id="message" class="hidden">
            <h1>Thank You ${userFirstName} for Signing up!</h1>
            <p>We sent you a confirmation message to your email address ( ${userEmailAddress} )</p>
        </div>
    `
    emailCollectorForm.innerHTML = updatedHtmlContent
    
})