function easyHttp(){
    this.http = new XMLHttpRequest();
}
//make an Http GET Request
easyHttp.prototype.get =function(url,callback){
  
    this.http.open('GET',url,true);
    let self = this
    this.http.onload = function(){
       // console.log("in the finction")
        if(self.http.status=== 200){
            callback(null,self.http.responseText);
        }
        else{
            callback('error:'+self.http.status)
        }
    }
    this.http.send();
}

//Make HTTP POST Request

easyHttp.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('content-type','application/json');
    let self = this;
    this.http.onload= function(){
        callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data))

}

//Make HTTP PUT Request

easyHttp.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('content-type','application/json');
    let self = this;
    this.http.onload= function(){
        callback(null,self.http.response)
    }
    this.http.send(JSON.stringify(data));
}


//make http delete request
easyHttp.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);
    this.http.setRequestHeader('content-type','application/json');
    let self = this;
    this.http.onload = function(){
        callback(null,'post deleted');
    }
    this.http.send()
;}