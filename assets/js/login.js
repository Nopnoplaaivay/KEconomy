const buttonSignup = document.querySelector('.form-button')

const inputs = document.querySelectorAll('input')
for (const input of inputs) {

  //! alert invalid
  input.addEventListener('focusout', () => {
    const parent = input.closest('.group-input')

    if (input.value === '') {
      parent.classList.add('invalid')
      parent.setAttribute('data-error', 'Vui lòng không để trống trường này!')
    }

  })
  //! end alert invalid


    // !check full input
    let ok = true
    for (const item of inputs) {
      if (item.closest('.group-input').classList.contains('invalid')) {
        ok = false
        console.log(item)
        break
      }
    }
    // !end check full input
    if (isOk) {
      buttonSignup.classList.remove('disabled')
    } else {
      buttonSignup.classList.add('disabled')
    }
  })
}