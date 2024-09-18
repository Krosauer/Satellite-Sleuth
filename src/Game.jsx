import { useState, useEffect } from "react";
import Axios from 'axios';
import { FaArrowRight, FaReply, FaCloud } from 'react-icons/fa';

function Game() {
	
	const dim = 0.1;
	const api_key = "2ehUR1cjifeAeuiMR9RLIsuzWi3mf23cR6GuP0iz";
	const countryCodes = {
		"Afghanistan": "AF",
		"Albania": "AL",
		"Algeria": "DZ",
		"Andorra": "AD",
		"Angola": "AO",
		"Antigua and Barbuda": "AG",
		"Argentina": "AR",
		"Armenia": "AM",
		"Australia": "AU",
		"Austria": "AT",
		"Azerbaijan": "AZ",
		"Bahamas": "BS",
		"Bahrain": "BH",
		"Bangladesh": "BD",
		"Barbados": "BB",
		"Belarus": "BY",
		"Belgium": "BE",
		"Belize": "BZ",
		"Benin": "BJ",
		"Bhutan": "BT",
		"Bolivia": "BO",
		"Bosnia and Herzegovina": "BA",
		"Botswana": "BW",
		"Brazil": "BR",
		"Brunei": "BN",
		"Bulgaria": "BG",
		"Burkina Faso": "BF",
		"Burundi": "BI",
		"Cape Verde": "CV",
		"Cambodia": "KH",
		"Cameroon": "CM",
		"Canada": "CA",
		"Central African Republic": "CF",
		"Chad": "TD",
		"Chile": "CL",
		"China": "CN",
		"Colombia": "CO",
		"Comoros": "KM",
		"Congo": "CG",
		"Democratic Republic of the Congo": "CD",
		"Costa Rica": "CR",
		"Ivory Coast": "CI",
		"Croatia": "HR",
		"Cuba": "CU",
		"Cyprus": "CY",
		"Czech Republic": "CZ",
		"Denmark": "DK",
		"Djibouti": "DJ",
		"Dominica": "DM",
		"Dominican Republic": "DO",
		"Ecuador": "EC",
		"Egypt": "EG",
		"El Salvador": "SV",
		"Equatorial Guinea": "GQ",
		"Eritrea": "ER",
		"Estonia": "EE",
		"Eswatini": "SZ",
		"Ethiopia": "ET",
		"Fiji": "FJ",
		"Finland": "FI",
		"France": "FR",
		"Gabon": "GA",
		"Gambia": "GM",
		"Georgia": "GE",
		"Germany": "DE",
		"Ghana": "GH",
		"Greece": "GR",
		"Grenada": "GD",
		"Guatemala": "GT",
		"Guinea": "GN",
		"Guinea Bissau": "GW",
		"Guyana": "GY",
		"Haiti": "HT",
		"Honduras": "HN",
		"Hungary": "HU",
		"Iceland": "IS",
		"India": "IN",
		"Indonesia": "ID",
		"Iran": "IR",
		"Iraq": "IQ",
		"Ireland": "IE",
		"Israel": "IL",
		"Italy": "IT",
		"Jamaica": "JM",
		"Japan": "JP",
		"Jordan": "JO",
		"Kazakhstan": "KZ",
		"Kenya": "KE",
		"Kiribati": "KI",
		"Kuwait": "KW",
		"Kyrgyzstan": "KG",
		"Laos": "LA",
		"Latvia": "LV",
		"Lebanon": "LB",
		"Lesotho": "LS",
		"Liberia": "LR",
		"Libya": "LY",
		"Liechtenstein": "LI",
		"Lithuania": "LT",
		"Luxembourg": "LU",
		"Madagascar": "MG",
		"Malawi": "MW",
		"Malaysia": "MY",
		"Maldives": "MV",
		"Mali": "ML",
		"Malta": "MT",
		"Marshall Islands": "MH",
		"Mauritania": "MR",
		"Mauritius": "MU",
		"Mexico": "MX",
		"Micronesia": "FM",
		"Moldova": "MD",
		"Monaco": "MC",
		"Mongolia": "MN",
		"Montenegro": "ME",
		"Morocco": "MA",
		"Mozambique": "MZ",
		"Myanmar": "MM",
		"Namibia": "NA",
		"Nauru": "NR",
		"Nepal": "NP",
		"Netherlands": "NL",
		"New Zealand": "NZ",
		"Nicaragua": "NI",
		"Niger": "NE",
		"Nigeria": "NG",
		"North Macedonia": "MK",
		"Norway": "NO",
		"Oman": "OM",
		"Pakistan": "PK",
		"Palau": "PW",
		"Panama": "PA",
		"Papua New Guinea": "PG",
		"Paraguay": "PY",
		"Peru": "PE",
		"Philippines": "PH",
		"Poland": "PL",
		"Portugal": "PT",
		"Qatar": "QA",
		"South Korea": "KR",
		"Romania": "RO",
		"Russian Federation": "RU",
		"Rwanda": "RW",
		"Saint Kitts and Nevis": "KN",
		"Saint Lucia": "LC",
		"Saint Vincent and the Grenadines": "VC",
		"Samoa": "WS",
		"San Marino": "SM",
		"Sao Tome and Principe": "ST",
		"Saudi Arabia": "SA",
		"Senegal": "SN",
		"Serbia": "RS",
		"Seychelles": "SC",
		"Sierra Leone": "SL",
		"Singapore": "SG",
		"Slovakia": "SK",
		"Slovenia": "SI",
		"Solomon Islands": "SB",
		"Somalia": "SO",
		"South Africa": "ZA",
		"South Sudan": "SS",
		"Spain": "ES",
		"Sri Lanka": "LK",
		"Sudan": "SD",
		"Suriname": "SR",
		"Sweden": "SE",
		"Switzerland": "CH",
		"Syria": "SY",
		"Tajikistan": "TJ",
		"Thailand": "TH",
		"Timor Leste": "TL",
		"Togo": "TG",
		"Tonga": "TO",
		"Trinidad and Tobago": "TT",
		"Tunisia": "TN",
		"Turkey": "TR",
		"Turkmenistan": "TM",
		"Tuvalu": "TV",
		"Uganda": "UG",
		"Ukraine": "UA",
		"United Arab Emirates": "AE",
		"United Kingdom": "GB",
		"Tanzania": "TZ",
		"United States": "US",
		"Uruguay": "UY",
		"Uzbekistan": "UZ",
		"Vanuatu": "VU",
		"Venezuela": "VE",
		"VietNam": "VN",
		"Yemen": "YE",
		"Zambia": "ZM",
		"Zimbabwe": "ZW"
	};
	const countryCodeArray = Object.keys(countryCodes);

	const [lat, setLat] = useState('');
	const [lon, setLon] = useState('');
	const [src, setSrc] = useState();
	const [rand, setRand] = useState('');
	const [guess, setGuess] = useState(''); 
	const [secretCountry, setSecretCountry] = useState('');
	const [answer, setAnswer] = useState("");
    const [textColor, setTextColor] = useState();
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [round, setRound] = useState(1);
    const [distance, setDistance] = useState();

	useEffect(() => {
		if (rand !== '') {
		  const code = countryCodes[countryCodeArray[rand]];
		  Axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then((res) => {
			const [latitude, longitude] = res.data[0].capitalInfo.latlng;
			setLat(latitude);
			setLon(longitude);
		  });
		}
	  }, [rand, countryCodeArray]);
	
	  
	  useEffect(() => {
		if (lat !== '' && lon !== '') {
		  Axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2020-06-01&&dim=${dim}&api_key=${api_key}`).then((res) => {
			setSrc(res.data.url);
		  });
		}
	  }, [lat, lon, dim, api_key]);


	function changeSecretCountry() {
		setSecretCountry((prevSecretCountry) => {
			const newSecretCountry = countryCodeArray[rand];
			console.log(newSecretCountry); 
			
			return newSecretCountry;
		  });
	}

	function changeRand() {
		setRand((prevRand) => {
		  const newRand = Math.floor(Math.random() * countryCodeArray.length);
		  console.log(newRand); 
		  
		  return newRand;
		});
	}
	
	
	function handleGuessChange(event) {
		setGuess(event.target.value);
	}
	
	function handleGuessSubmit() {

		if (guess !== "" && Object.keys(countryCodes).includes(guess)) {
            setIsInputDisabled(true);
			setGuess("");
			
			if (guess.toLowerCase() == secretCountry.toLowerCase()) {
				setAnswer("Correct!");
                setTextColor("Green");
			}
			else {
				setAnswer(`The correct answer was: ${secretCountry}`)
                setTextColor("Red");
			}

		}	
	}

    function handleNewRound() {

        if (round < 5) {

        
            setRand();
            setIsInputDisabled(false);
            setAnswer("");
            setRound(r => r + 1);

        }

        else {
            setAnswer("Game Complete!");
        }
    }

    function getDistance(lat1, lon1, lat2, lon2) {
        const toRadians = (degrees) => degrees * (Math.PI / 180);
      
        const earthRadiusKm = 6371; // Radius of the Earth in kilometers
      
        const dLat = toRadians(lat2 - lat1); // Delta latitude in radians
        const dLon = toRadians(lon2 - lon1); // Delta longitude in radians
      
        const lat1Rad = toRadians(lat1);
        const lat2Rad = toRadians(lat2);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        const distance = earthRadiusKm * c;

        return parseFloat(distance.toFixed(0));
    };

	
	
	

	// useEffect(() => {
	// 	changeRand();
	// }
	// ,[])

	// useEffect(() => {
	// 	if(rand !== '') {
	// 		changeSecretCountry();
	// 	}
	// }
	// ,[rand])

	
	
	

    return (
      <>
	  	<div className="centerCard">
        	<div className="image">
            	<img id="myUrl" src={src} alt="" />
				<div style={{color: textColor}}className="text">{answer}</div>
        	</div>
        	<div className="search">
            	<input id="guess"
                       type="text" 
                       value={guess} 
                       placeholder="enter country" 
                       spellCheck="false" 
                       autoComplete="off" 
                       onChange={handleGuessChange} 
                       disabled={isInputDisabled} />

            	<button type="button" onClick={handleGuessSubmit} ><FaReply /></button>
        	</div>
        
    	</div>
    	<div className="container">
        	<div className="items">
            	<h2 className="titles">Distance</h2>
            	<span id="distance"></span><span id="unit"></span>
        	</div>
        	<div className="items">
            	<h2 className="titles">Points</h2>
            	<p id="points" className="values"></p>
        	</div>
        	<div className="items">
            	<h2 className="titles">Score</h2>
            	<p id="score" className="values"></p>
        	</div>
        	<div className="items">
            	<h2 className="titles">Round</h2>
					<div className="valueDisplay">
            			<span id="round" className="values">{round}</span><span>/5</span>
					</div>
        	</div>
    	</div>
    	<div className="next">
        	<button type="button"><FaCloud /></button>
        	<button type="button" onClick={handleNewRound}><FaArrowRight /></button>
    	</div>
    	
      </>
    )
}

export default Game
