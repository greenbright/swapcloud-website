import React,{useEffect,useState} from 'react'


    
    const url = 'https://crypto-market-prices.p.rapidapi.com/tokens?base=USDT';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '506b21cf7amshdad2f6fe79079e9p191bc9jsnec8bfbdb2cd7',
            'X-RapidAPI-Host': 'crypto-market-prices.p.rapidapi.com'
        }
    };
    
    const url2 = 'https://investing-cryptocurrency-markets.p.rapidapi.com/currencies/list?lang_ID=1&time_utc_offset=28800';
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '506b21cf7amshdad2f6fe79079e9p191bc9jsnec8bfbdb2cd7',
            'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        }
    };
    

const Api = () => {
    const[bnb,setBnb] =useState([]);
    const[eth,setEth] = useState([]);
    const[btc,setBtc] = useState([]);
    const[solana,setSolana] = useState([]);
    const[usdt,setUsdt] = useState([])
    const[symbolbtc,setSymbolBtc] = useState([])
    const [symboleth,setSymbolEth] =useState([])
    const [symbolbnb,setSymbolBnb] = useState([])
    const [symbolusdt,setSymbolUsdt] = useState([])
   
    const fetchData = async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const displayBnb = result.data.tokens[390];
            const displayEth =result.data.tokens[447];
            const displayBtc = result.data.tokens[903];
            const displaySolana =result.data.tokens[2482];
            const displayUsdt = result.data.tokens[2803];
            setBnb(displayBnb)
            setEth(displayEth)
            setBtc(displayBtc)
            setSolana(displaySolana)
            setUsdt(displayUsdt)
        
        } catch (error) {
            console.error(error);
        }
      
    }

    const fetchCryptoSymbol = async()=>{
        try{
            const response = await fetch(url2,options2);
            const result = await response.json();
            const showBtc = result.data[0][0].data[0];
            const showEth = result.data[0][0].data[3]
            const showBnb = result.data[0][2].data[163]
            const showUsdt = result.data[0][2].data[1014]
            console.log(showBnb)
            setSymbolBtc(showBtc)
            setSymbolEth(showEth)
            setSymbolBnb(showBnb)
            setSymbolUsdt(showUsdt)
         
        }catch (error){
            console.log(error)
        }
    }

  
    useEffect(()=>{
        fetchData()
        fetchCryptoSymbol()
       
    },[])
  return (
    
    <div className='api-container'>
        <div className='bnb-div'>
        <h3>{usdt.symbol}</h3>
        <span>price:{usdt.price}</span>
       <img src={symbolusdt.flag_image_32x32_flat}className='img_usdt'></img>
         
    </div>
        <div className='bnb-div'>
        <h3>{bnb.symbol}</h3>
        <span>price:{bnb.price}</span>
        < img src={symbolbnb.flag_image_32x32} className='img_bnb'></img>
        </div>
        <div className='eth-div'>
        <h3>{eth.symbol}</h3>
        <span>price:{eth.price}</span>
        < img src={symbolbtc.flag_image_32x32}className='img_eth'></img>
        </div>
        <div className='Btc-div'>
        <h3>{btc.symbol}</h3>
        <span>price:{btc.price}</span>
        < img src={symboleth.flag_image_32x32_flat}className='img_btc'></img>
        </div>
        <div className='solana-div'>
        <h3> {solana.symbol}</h3>
        <span>price:{solana.price}</span>
        </div>

    
    </div>
 
   
  )
}

export default Api
