//  igortest-58e2a

const form = document.forms[0]



    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newUser = {
            name: form.name.value,
            password: +form.password.value,
            contact: {
                phone:Number(form.phone.value)
            }
        }
    
    
        fetch('https://igortest-58e2a-default-rtdb.firebaseio.com/users.json', 
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(newUser)
            }
    
        )
        
        form.reset()
    })


    


    form.reset()
