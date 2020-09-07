var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://caroline:tititoto@cluster0-ufvkw.mongodb.net/webSite?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
    
)

module.exports = mongoose