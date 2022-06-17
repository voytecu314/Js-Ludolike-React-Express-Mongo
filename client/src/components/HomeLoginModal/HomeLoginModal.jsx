import './home_login_modal.css';

const HomeLoginModal = () => {

  const testPost = (e) => {
    fetch('http://localhost:5001/test',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: e.target.nextSibling.value,
        position: e.target.nextSibling.nextSibling.value
                })
    })
    .then(res=>res.json())
    .then(console.log)
    .catch(console.log);
  }

  return (
    <div id="home-login-modal">
      <h1>JS Board Game</h1>

      <div id="modal-buttons">
        <button onClick={testPost}>Create new game</button>
        <input type="text" /><input type="number" />
        <button>Connect with passphrase</button>
      </div>
      
    </div>
  )
}

export default HomeLoginModal;