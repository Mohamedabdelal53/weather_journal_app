
const server=app.listen(port, listening)

function listening(){
    console.log("server running")
    console.log(`running on localhost: ${port}`)
}

app.get('/all', sendData);

function sendData (request, response) {
    response.send(projectData);
    projectData=[];
};

app.post('/add', addData)

function addData(req,res){
    newEntry = {
        date: req.body.date,
        temp: req.body.temp,