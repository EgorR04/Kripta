const search = document.querySelector('.coin');
const current = document.querySelector('.current');
const button = document.querySelector('button');
let result = document.querySelector('.result');

let coins = search.value;

let array = [];

 async function query(){
    console.log(search.value);

    let kripta = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${search.value}&tsyms=${current.value}&api_key=7b445324b592b090ec74118dab6e1118c0fba6cc1811009afba1c0cb26a9733c`);
    console.log(kripta);
    let data = await  kripta.json();
    console.log(data);
    
    for(key in data){
        result.innerHTML += `
                <tr>
                    <td>${data[key]}</td>
                    <td>${current.value}</td>
                </tr>
            `;
    }
    
}


button.addEventListener('click', (Event) => {
    //if(data.Response == "Error"){
       // alert('Incorrect coin')
       // search.classList.toggle("active")
    //}else if(current.Response == "Error"){
        //alert('Incorrect current')
        //current.classList.toggle("active")
  //  }else if(data.Response == "Error" && current.Response == "Error"){
        //alert('Incorrect coin and current')
       // search.classList.toggle("active")
       // current.classList.toggle("active")
   // }else{
    Event.preventDefault();
    query();
   // }
    

    
});

