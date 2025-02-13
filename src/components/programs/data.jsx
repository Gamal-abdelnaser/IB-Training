import calistanic from '../../assets/programs/calistanics.png';
import calBegain from '../../assets/programs/begainCal.jpg';
import FreeStyle from '../../assets/programs/freeStyle.jpg';
import fatloss from '../../assets/programs/fatloss.png';
import nutration from '../../assets/programs/nutrition.png'
import pro from '../../assets/programs/pro.png';
import bodybuilding from '../../assets/programs/bodybuliding.png'
import gorilla from '../../assets/programs/gorilla.png'
import crossFit from '../../assets/programs/crossfit.png'
import powerTip from '../../assets/programs/powerTip.PNG';
import RamadanImage from '../../assets/programs/ramadan.PNG';

export  const programs = [
    { 
      id: 1,
      name:'IB Calistanics',
      mainImage: calistanic,
      description:'STRENGTHING, IMPROVING YOUR ENDURANCE, DEVELOPMENT YOUR STAMINA AND CHANGE YOUR BODYSHAE.',
      price: '100$',
      headTitle:"What Calistanics Can Do !!",
      question:`TYPES OF CALISTANICS TRAINING`,
      begainImg: calBegain,
      freeImg:FreeStyle,
      begaining:["WORKING ON YOUR STRENGTH, IMPROVING YOUR ENDURANCE, DEVELOPMENT YOUR STAMINA AND CHANGE YOUR BODYSHAE.", "IT'S ALL BY BODYWEIGHT TRAINING WITH LITTLE OR NO EQUIPMENT.", "EXERCISES LIKE PULLUPS - PUSHUPS - BURPEES - SQUATS - ETC. NO MATTER YOUR LEVEL", "YOUR WORKOUT AREA YOU CAN START FROM ANY LEVEL, ANYWHERE, EVEN IF IT IS FROM HOME."],
      freeStyle:[`THE MOST ATTRACTIVE CATEGORY IN CALISTHENICS AND MOST OF PEOPLE JOIN THIS COMMUNITY DUE TO SKILLS.`, `DID YOU SEE HUMAN FLYING BEFORE? YES HE IS PLAYING FREESTYLE.` ,` DYNAMIC MOVEMENTS LIKE HANDSTAND - HUMAN FLAG - FRONT LEVER - BACK LEVER`, `UNTIL YOU CAN DO AT LEAST 50 PUSHUPS AND 20 PULL UPS.`],
      listWhoJoin: ["People who suffer from their body shape and weight.","Those wanting to improve their fitness level and face life with a stronger and healthier mindset.","Who suffer from stable weight on the scale for a long time."],
      custombg:"claistanic"
    },
    {
      id: 2,
      name:'IB Nutration',
      mainImage: nutration,
      detailedImage: '',
      price: '100$',
      headTitle:" MAKE BALANCED DIET IS EASY !!",
      description:'I will take you through a journey of one-on-one nutrition coaching, education, and motivation you all the way through! Our nutrition plans are fully customizable; we do not use any fat burners, we don’t follow restrictive boring diets, we focus on the changes of body shape and clients mentality with food and healthy life.',
      question:`WHO CAN JOIN? `,
      listWhoJoin: ["Athletes who want to improve their performance.","Bodybuilders who want to be bigger and leaner.","People who want to lose weight (fats).","Individuals who are willing to invest in their health."],
      custombg:"nutration"
    },
    {
      id: 3,
      name:'IB Fat Loss',
      mainImage: fatloss,
      detailedImage: '',
      price: '100$',
      description:`But losing fats while increasing muscles is very difficult, because this requires a very carefully customized training and nutrition plan that is completely appropriate for you.That’s why we provide you with this program that achieves this in the fastest and easiest way.`,
      headTitle:"LOSING WEIGHT IS EASY !!",
      question:`WHO CAN JOIN? `,
      listWhoJoin: ["People who suffer from their body shape and weight.","Those wanting to improve their fitness level and face life with a stronger and healthier mindset.","Who suffer from stable weight on the scale for a long time."],
      custombg:"fatloss"
    },
    {
      id: 4,
      name:'IB Pro',
      mainImage: pro,
      detailedImage: '',
      price: '100$',
      headTitle:"LOSING WEIGHT IS EASY !!",
      question:`WHO CAN JOIN? `,
      listWhoJoin: ["People who suffer from their body shape and weight.","Those wanting to improve their fitness level and face life with a stronger and healthier mindset.","Who suffer from stable weight on the scale for a long time."],
      description:'Yes! With the Gymmawy Package guarantee, if you subscribe to the 3-month package, follow the programs throughout the subscription period, and adhere to the instructions but still do not see results or notice any difference, you will receive a full refund.',
      custombg:"pro",
    },
    {
      id: 5,
      name:'Cross Fit',
      mainImage: crossFit,
      detailedImage: '',
      price: '100$',
      description:'This program focuses on burning fats as the main goal, building strength and improving endurance.Program is designed based on the available equipment so you can join anywhere even from home (no excuses).',
      headTitle:"CROOS FIT TRAINING",
      question:`MAIN GOALS `,
      listWhoJoin: ["Body reshaping","Make life easier","Gain self-confidence","Preventing obesity and heart diseases","Improve performance during exercise and daily life"],
      custombg:"crossfit",
    },
    {
      id: 6,
      name:'Body Building',
      mainImage: bodybuilding,
      detailedImage: '',
      price: '100$',
      headTitle:"STREET LIFTING  ",
      question:`COMPETITIONS CONSIST OF THREE ATTEMPTS AT MAXIMAL WEIGHT ON: `,
      listWhoJoin: ["DIPS","MUSCLE-UPS","BACK SQUATS","PULL-UPS OR CHIN-UPS"],
      description:'STREET LIFTING IS A STRENGTH SPORT THAT COMBINES CALISTHENICS AND POWERLIFTING.',
      custombg:"bodyBuilding"
    },
    {
      id: 7,
      name:'Gorilla',
      mainImage: gorilla,
      detailedImage: powerTip,
      price: '100$',
      headTitle:"STREET LIFTING  ",
      question:`COMPETITIONS CONSIST OF THREE ATTEMPTS AT MAXIMAL WEIGHT ON: `,
      listWhoJoin: ["DIPS","MUSCLE-UPS","BACK SQUATS","PULL-UPS OR CHIN-UPS"],
      description:'STREET LIFTING IS A STRENGTH SPORT THAT COMBINES CALISTHENICS AND POWERLIFTING.',
      custombg:"gorilla"
    },
    {
      id: 8,
      name:'Ramadan Challenge',
      mainImage: RamadanImage,
      detailedImage: powerTip,
      price: '100$',
      headTitle:"THE PERFECT TIME !!",
      question:`WHO CAN JOIN? `,
      listWhoJoin: ["People who suffer from their body shape and weight.","Those wanting to improve their fitness level and face life with a stronger and healthier mindset.","Who suffer from stable weight on the scale for a long time."],
      description:[`If your main target is losing fats (weight) and make your body more toned, Ramadan is the biggest chance to achieve it.` , `Lose up to 10 KG and make this Month the station to change your life.` ,` The Training program will help improve your stamina & get a stronger body. You are going to train before “IFTAR” to burn fats as much as possible.Don’t worry! We will make a customized nutrition plan for you based on your daily life to be comfortable and to provide you with enough energy to train good without feeling exhaustion.`],
      custombg:"ramadan"
    }
    
]

