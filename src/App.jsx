
import './App.css'

function App() {

  const handleSubmit = e =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const user = {name, email}
    console.log(user)
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.insertedId){
        alert("User added successfully")
        form.reset()
      }
      console.log(data) 
    })
  }

  return (
    <> 
      <h1 className='text-5xl font-bold text-center'>Simple crud User</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
