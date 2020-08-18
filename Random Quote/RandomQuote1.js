let arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author':'HELEN MIRREN',
        'quote':'“Nothing is ever really dead if you look at it right.”'
    },
    {
        'author':'HELEN MIRREN',
        'quote':'“If love is creation and death is destruction, I am just the terrain in between. You don not understand time, no one understands time. Einstein was close when he said I was just an illusion.”'
    },
];
let gen = '';
function Generate(){
   gen = Math.floor(Math.random()* arrayOfQuotes.length + 1)
    document.getElementById('quoteOutput').textContent = arrayOfQuotes[gen].quote;
    document.getElementById('authorOutput').textContent = arrayOfQuotes[gen].author;
    
}
    
    
