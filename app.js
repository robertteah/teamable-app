function handleEditProfile() {
          var name = document.getElementById("name").textContent
          var inputName = document.getElementById("input-name")
          inputName.value = name

          var email = document.getElementById("email").textContent
          var inputEmail = document.getElementById("input-email")
          inputEmail.value = email

          var interest = document.getElementById("interest").textContent
          var inputInterest = document.getElementById("input-interest")
          inputInterest.value = interest

          document.getElementById("edit-view").style.display = "block"
          document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {
          var updatedName = document.getElementById("input-name").value
          var name = document.getElementById("name")
          name.textContent = updatedName

          var updatedEmail = document.getElementById("input-email").value
          var email = document.getElementById("email")
          email.textContent = updatedEmail

          var updatedIntrest = document.getElementById("input-interest").value
          var interest = document.getElementById("interest")
          interest.textContent = updatedIntrest


          document.getElementById("edit-view").style.display = "none"
          document.getElementById("display-view").style.display = "block"
}