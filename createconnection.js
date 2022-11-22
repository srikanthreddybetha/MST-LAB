const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
	if(err)
	console.log("DB Not Connected-Error");
	else
	console.log("DB Connected");
});

const ns=new mongoose.Schema({
name:String,
age:Number
});

const nm=new mongoose.model("records",ns);

/* const data=new nm({name:'CHARAN',age:19,PhNo:0987654321});
data.save();
const data1=new nm({name:'VISHNU',age:22,PhNo:1234567890});
data1.save();
const data2=new nm({name:'PURNA',age:23,PhNo:5678901234});
data2.save();
const data3=new nm({name:'GANESH',age:26,PhNo:1234509876});
data3.save();

nm.insertMany([
	{name:'RAM',age:50,PhNo:7467387748},
	{name:'SUJ',age:37,PhNo:6539174873},
	{name:'PAP',age:80,PhNo:8116989966},
]).then(function(){
	console.log("Data inserted") //Success
}).catch(function(error){
	console.log(error) //Failure
}); */

/* nm.findOne({},function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log("First function call:",data);
	}
});

nm.find({},function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log("First function call:",data);
	}
});

nm.findOne({age:19},function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log("First function call:",data);
	}
}); */

/* nm.deleteOne({age:80}).then(function(){
	console.log("Data deleted")
	}).catch(function(error){
	console.log(error)
}); */

/* const old={name: 'CHARAN'};
const new1={age: 20};

let doc = nm.findOneAndUpdate(old,new1,(err)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log("updated");
	}
}); */

const old={name: /^S/ };
const new1={age: 40};

let doc = nm.findOneAndUpdate(old,new1,(err)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log("updated");
	}
});
