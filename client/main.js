const messagesDiv = document.querySelector('.messages');
const form = document.querySelector('form');
const API_URL = 'http://localhost:5500/api';

const fetchData = async () => {
  try {
    const jsonData = await fetch(API_URL);
    const data = await jsonData.json();
    const messages = data.data;
    const html = gethtml(messages.reverse());
    messagesDiv.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};
fetchData();
function gethtml(messages) {
  const msgsHtml = messages.map(msg => {
    const { name, message, createdAt } = msg;
    const date = new Date(createdAt);
    return `
        <div class='msg'>
        <h5>Name: ${name}</h5>
        <p>Message: ${message}</p>
        <small>${date.toLocaleString()}</small>
        </div>
        `;
  });
  return msgsHtml;
}

function submitForm(e) {
  e.preventDefault();

  const name = form.name.value;
  const msg = form.message.value;
  const data = { name, message: msg };
  const postData = async () => {
    try {
      const resJson = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await resJson.json();
      console.log(resData);
      form.reset();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  postData();
}

form.addEventListener('submit', submitForm);
