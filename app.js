let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');
let createError = require('http-errors'); // Thêm dòng này để sử dụng http-errors
//config mongoose
const mongoose = require('mongoose');
  let sp =  require('./models/productModels');



let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use('/imagesp', express.static('/imagesp'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//cors
let corsOptionsDelegate = function (req, callback) {
  let corsOptions = { origin: true }
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate));
//connect database
mongoose.connect('mongodb://localhost:27017/h', {
    // useNewUrlParser: true, // Bỏ 2 câu cũng được 
    // useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));
//sản phẩm api 
const Productmd = require('./models/productModels');
app.use('/sanpham', async function(req, res, next) { 
  let data = await Productmd.find();
  // console.log(data);
  res.json(data)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // Bắt các yêu cầu không tìm thấy
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
