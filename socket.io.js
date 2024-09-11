module.exports = (app) =>{
    const http = require("http").Server(app);
    const io = require("socket.io")(http);
    app.io = io;




    let clients = 0;
    io.on("connection", (socket) =>{
        clients ++;
        console.log("un cliente esta usando el comando");

        
        socket.on("disconnect", function(){
            clients--;
            console.log("UN CLIENTE SE DESCONECTO Y EL SERVIDOR A SIDO LIBERADO");
        });

    });

    return{
        http: http,
        io:io,
    }
}
