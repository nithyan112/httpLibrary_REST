const http = new easyHttp();
//  http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//      if(err){
//      console.log(err)
//      }
//      else{
//          console.log(response)
//      }
//  })

 //create data to post 
 const data ={
     title:'Custom post',
     body:"lorem ipsum "
 }

//  //POST 
//  http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//      if(err){
//          console.log(err);
//      }
//      else{
//          console.log(response)
//      }

//  })


//  //PUT or Update
//  http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//  if(err){
//      console.log(err);
//  }
//  else{
//      console.log(response)
//  }
//  })


 //Delete
 http.delete('https://jsonplaceholder.typicode.com/posts/5',function(err,response){
     if(err){
         console.log(err);
     }
     else{
         console.log(response);
     }
 })