/* Global Variables */



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

const baseurl="http://api.openweathermap.org/data/2.5/weather?zip="
const apikey="&appid=b55359eb2609f0b639b8aeea81310ea3&units=metric"

document.getElementById("generate").addEventListener("click",performaction)
function performaction(e){
  const zipcode=document.getElementById("zip").value;
  const feeling=document.getElementById("feelings").value;
  getdata(baseurl, zipcode, apikey)

    .then(function(data) {
      console.log(data)
      postdata('/add' ,{date:d, temp:data.main.temp, content:feeling, name:data.name})
      updateUI()
    })
    if(document.getElementById('date').innerHTML!=""){
      window.scrollTo({
        top:250,
        behavior:"smooth",
      })
    }
}
const getdata= async function(baseurl,zipcode, apikey){
  const information= await fetch(baseurl+zipcode+apikey)
  try{
    const data=information.json()
    console.log(data)
    return data
  }catch{
    console.error("Please try again");
  }
}

const postdata= async (url = '', data={})=>{
  console.log(data)
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}
const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = "DATE:"+allData.date;
    document.getElementById('temp').innerHTML = "TEMP:"+allData.temp;
    document.getElementById('content').innerHTML = "FEELING:"+allData.content;
    document.getElementById('name').innerHTML = "NAME OF CITY: "+allData.name;

  }catch(error){
    console.log("error", error);
  }
}
