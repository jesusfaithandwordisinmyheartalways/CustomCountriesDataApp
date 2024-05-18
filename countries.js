







const searchInbox = document.querySelector('.user-input');
const searchBtn = document.querySelector('.user-btn');


searchBtn.addEventListener('click', () => {
        countryData(searchInbox.value)
})

async function countryData() {

        try {
               
            const name = document.getElementById('user-input').value.trim();
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
            const data = await response.json();
            console.log(data);

            if(response.ok ) {
                document.getElementById('population').innerHTML = data[0].population;
                document.getElementById('currency').innerHTML = Object.keys(data[0].currencies) 
                document.getElementById('timezones').innerHTML = data[0].timezones[0];
                document.getElementById('languages').innerHTML = Object.values(data[0].languages)
                document.getElementById('capital').innerHTML = data[0].capital[0];
                document.getElementById('countries-information').style.display = 'block';
                document.querySelector('.error').style.visibility = 'hidden'
                return;
            } 

            if(!response.ok) {
                searchInbox.value = '';
                searchInbox.focus();
                document.getElementById('countries-information').style.display = 'none';
                document.querySelector('.error').style.visibility = 'visible'
                return;
            }
             
        } catch(error) {
            if(response.status == 404) {
                document.getElementById('countries-information').style.display = 'none';
                console.error(`Error: ${response.status}: ${response.statusText}: Unable to Access Requested Page`);
                return;
            }
        }
    
}


    countryData()







        const hideDisplay = () => {
            const hideCountry = document.getElementById('countries-information');
            hideCountry.style.display = 'none'
            searchInbox.value = '';
            searchInbox.focus();            
        }

    
       




















