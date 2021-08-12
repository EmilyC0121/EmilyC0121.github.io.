//fact generator for the about section of the home page
var factList = [
 "Myth: Wildfires are natural and should be allowed to burn freely <br></br> Truth: Driven by climate change, wildfires pose a huge threat and demand careful forest management practices",

 "Myth: Logging forests prevents wildfires <br></br> Truth: Fires may burn more intensely in logged forests", 

 "Myth: All wildfires are bad and should be stopped immediately <br></br> Truth: Protecting people is top priority, but fires play an important ecological role",

 "Myth: As wildfires get worse, the Forest Service gets a lot more money to fight them <br></br> Truth: As firefighting expenses rise, Forest Service funding has barely budged",

 "Myth: Wildfire spending will continue to skyrocket no matter what <br></br> Truth: A more strategic approach to fire management can help address the crisis",

 "Myth: There is nothing you can do to protect your property <br></br> Truth: Wildfires are powerful and threatening, but households can reduce their risk by taking action at home. <u><a  target='_blank' href= 'https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Wildfire'>Click here to learn more</a></u>",

 "Myth: Wildfires are an inevitable fact of nature <br></br> Truth: While wildfires are a natural phenomenon, the extent and intensity to which they’re happening now are not – and one of the effects of climate change. We saw fewer fires between 1930 and 1980, a period that coincided with cooler and moister conditions. But as the climate has become hotter and drier in the last four decades, the number of fires have increased. In only two years between 1980 and 1999 did wildfires burn more than 6 million acres (2.4m hectares) of US wilderness. But between 2000 and 2017, there were 10 years with burnt acreage above that threshold. Globally, the length of the wildfire season increased by nearly 19% between 1978 and 2013.",

 "Myth: It is possible to eradicate (or control) all wildfires <br></br> Truth: As we have already seen, climate change, alongside other factors such as the spread of human settlements, is expected to increase wildfires, particularly in mid-to-high latitudes, in the coming decades. Some experts are calling for a return to traditional indigenous fire knowledge to deal with the flames. As efforts to cull fires seem insufficient – and as fires are likely to only get worse – those are questions policymakers must face. <br></br> Read more here about how Native Americans have been using fire to controll wildfires for centuries: <br></br> <u><a target='_blank' href='https://www.npr.org/2020/08/24/899422710/to-manage-wildfire-california-looks-to-what-tribes-have-known-all-along'>NPR</a> <br></br> <a target='_blank' href='https://www.nature.org/en-us/magazine/magazine-articles/indigenous-controlled-burns-california/'>Nature.org</a></u> <br></br> <u><a target='_blank' href='https://www.theguardian.com/us-news/2019/nov/21/wildfire-prescribed-burns-california-native-americans'>The Guardian</a></u>"
]; 

var fact = document.getElementById("fact");
var myButton = document.getElementById("factsBtn");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
