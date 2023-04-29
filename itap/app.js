const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("Copied text"+ link)
    } catch (err){
        console.error(err)
    }
}
function fillContactInfo() {
    document.getElementById("name").value = "Ali Baraki";
    document.getElementById("phone").value = "+961 71411496";
    document.getElementById("email").value = "barakiali866@gmail.com";
}
  

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click' , copyText))