/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  var copy = Object.assign({}, movies);
  var horas=[];
  var tiempo=[];
  var minuto=[];
  var hour=[];
  var cont=0;
  var espacio=" ";
  var tiemTo=0;
  
  var resul=movies.map(function(n){
    //console.log('n',n);
      hour=n['duration'];
      console.log(" caracter horas---------",hour.length);
      if(hour.length >=6){
      console.log("---------IF",n)
      tiempo=(hour.toString()).split(espacio);
      horas=(tiempo[0].substring(0,1)*60);
      minuto=(tiempo[1].substring(0,2));
      console.log("minuto",minuto);
      tiemTo=parseInt(horas)+ parseInt( minuto);
      console.log("horas totales:",tiemTo);
      movies[cont]['duration']=tiemTo;
      console.log("movies",movies[cont]['duration']);
      }
      console.log("llego aqui");
       if(hour.length<=3) 
      {
      console.log("---------else horas",hour)
   
      horas=(hour.substring(0,1)*60);      
      tiemTo=parseInt(horas);
      movies[cont]['duration']=tiemTo
      console.log("solo horas",tiemTo);
        
      } if(hour.length<=5&&hour.length>3){
      console.log("---------else2 horas",hour);

      minuto=(hour.substring(0,2));
      console.log("minuto",minuto);    
      tiemTo=parseInt(minuto);
      movies[cont]['duration']=tiemTo
      console.log("solo horas",tiemTo);
  }
      console.log("resul",n)
      return n;
  });      
console.log("resul",resul)
return copy;

}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){

  var redon=0;
  var rateTotal=0;
  var count=0;
  var redon2=0;
  var sum8=0;

  var resul=movies.map(function(n){
      rateTotal=(rateTotal+(parseFloat(n['rate'])));
      count++;
  });

  redon=(rateTotal/count);
  redon2= Number(redon.toFixed(2));
  return redon2;
} 

// Get the average of Drama Movies

function dramaMoviesRate(movies){
  cont=0;
  numFil=0;
  rateDra=0
  var resul=movies.map(function(n){
     

    var sumDra = n['genre'].filter(function(number){
      if(number==['Drama']){
        if (n['rate']==''){
          rateDra=(rateDra+0);
          cont++;  
        } else{
          console.log("entro a rate ");    
        rateDra=(rateDra+(parseFloat(n['rate']))); 
    
        cont++;
        }
        }
    }); 
  });
  if(cont===0){
    return undefined;
  }
  totnor= Number((rateDra/cont).toFixed(2));
  totRaDra=Math.floor(rateDra/cont);
  console.log(totRaDra);
  return totRaDra,totnor;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  var moviesDurationTitleOrdered = movies.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  var moviesDurationOrdered = moviesDurationTitleOrdered.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return moviesDurationOrdered;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
  var contFilm=0;
  var noFilm='';
  if(movies==''){
    console.log('empty');
    return undefined;
  }
  var filSpil=movies.map(function(x){
    console.log(x['genre']);
    if(x['director']==='Steven Spielberg'){
        
        var dramaFun = x['genre'].filter(function(item){         
          if(item=='Drama'){
            contFilm+=1;
          }
        });


    }
});
  if(contFilm==0){
    return "Steven Spielberg directed 0 drama movies!";
  }
  return noFilm = "Steven Spielberg directed "+contFilm+" drama movies!"; 
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies){
  var order20=[];
  var orderAll=[];
  var orderAll2=[];
  var i=0;
  var j;
  var recorrer=movies.map(function(item){    
    orderAll[i]=item['title']; 
    i++;
  });
  //order20.sort();
  orderAll.sort();
  console.log("todo",orderAll)
  if(orderAll.length>=20){
    for(j=0;j<20;j++){
      console.log("fro2",orderAll[j])
    orderAll2[j]=orderAll[j];  
    }
  console.log("all")
  return orderAll2;
  }
  else{
    console.log("mas de 20")
  
    return orderAll;
  }
}
// Best yearly rate average
