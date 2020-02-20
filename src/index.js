document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form")
  const dropdown = document.createElement('select')
  const high = document.createElement('option')
      high.innerText = 'high'
      high.value = 'high'
  const medium = document.createElement('option')
      medium.innerText = 'medium'
      medium.value = 'medium'
  const low = document.createElement('option')
      low.innerText = 'low'
      low.value = 'low'

      dropdown.append(high)
      dropdown.append(medium)
      dropdown.append(low)

      form.append(dropdown)

  form.addEventListener('submit', function(event){
      event.preventDefault()

      const li = document.createElement('li') 
        li.innerText =  event.target[0].value
        const button = document.createElement('button')
        button.innerText = "Delete"
        button.id = `${event.target[0].value}`

        const editButt = document.createElement('button')
        editButt.innerText = "Edit"
        editButt.id = `edit-${event.target[0].value}`

        const dueDate = document.getElementById('datepicker').value
        const dateUl = document.createElement('ul')
          dateUl.innerText = dueDate  

        if (event.target[3].options[0].selected){
            li.className = 'high-red'
        } else if(event.target[3].options[1].selected) {
            li.className = 'medium-yellow'
        } else {
            li.className = 'low-green'
        }

        button.addEventListener('click', event => {
          event.preventDefault()
          event.target.parentNode.remove()
        })

        editButt.addEventListener('click', event => {
          event.preventDefault()
          form[0].value = event.target.parentNode.childNodes[0].wholeText 
          form[1].value = event.target.parentNode.childNodes[1].innerText 
          event.target.parentNode.remove()
        })

    const ul = document.getElementById('tasks')
      li.append(dateUl)
        ul.append(li) 
          li.appendChild(button)
            li.appendChild(editButt)
                   
    })

});