import { useState, useEffect } from 'react'

function App() {
  const hiragana = [
    { romanji: 'a', hiragana: 'あ' },
		{ romanji: 'i', hiragana: 'い' },
		{ romanji: 'u', hiragana: 'う' },
		{ romanji: 'e', hiragana: 'え' },
		{ romanji: 'o', hiragana: 'お' },
		{ romanji: 'ka', hiragana: 'か' },
    { romanji: 'ga', hiragana: 'が' },
		{ romanji: 'ki', hiragana: 'き' },
    { romanji: 'gi', hiragana: 'ぎ' },
    { romanji: 'kya', hiragana: 'きゃ' },
    { romanji: 'gya', hiragana: 'ぎゃ' },
		{ romanji: 'ku', hiragana: 'く' },
    { romanji: 'gu', hiragana: 'ぐ' },
    { romanji: 'kyu', hiragana: 'きゅ' },
    { romanji: 'gyu', hiragana: 'ぎゅ' },
		{ romanji: 'ke', hiragana: 'け' },
    { romanji: 'ge', hiragana: 'げ' },
		{ romanji: 'ko', hiragana: 'こ' },
    { romanji: 'go', hiragana: 'ご' },
    { romanji: 'kyo', hiragana: 'きょ' },
    { romanji: 'gyo', hiragana: 'ぎょ' },
		{ romanji: 'sa', hiragana: 'さ' },
    { romanji: 'za', hiragana: 'ざ' },
		{ romanji: 'shi', hiragana: 'し' },
    { romanji: 'ji', hiragana: 'じ' },
    { romanji: 'sha', hiragana: 'しゃ' },
    { romanji: 'jya', hiragana: 'じゃ' },
		{ romanji: 'su', hiragana: 'す' },
    { romanji: 'zu', hiragana: 'ず' },
    { romanji: 'shu', hiragana: 'しゅ' },
    { romanji: 'jyu', hiragana: 'じゅ' },
		{ romanji: 'se', hiragana: 'せ' },
    { romanji: 'ze', hiragana: 'ぜ' },
		{ romanji: 'so', hiragana: 'そ' },
    { romanji: 'zo', hiragana: 'ぞ' },
    { romanji: 'sho', hiragana: 'しょ' },
    { romanji: 'jyo', hiragana: 'じょ' },
		{ romanji: 'ta', hiragana: 'た' },
		{ romanji: 'chi', hiragana: 'ち' },
    { romanji: 'cha', hiragana: 'ちゃ' },
    { romanji: 'ja', hiragana: 'ぢゃ' },
    { romanji: 'chu', hiragana: 'ちゅ' },
    { romanji: 'ju', hiragana: 'ぢゅ' },
    { romanji: 'cho', hiragana: 'ちょ' },
    { romanji: 'jo', hiragana: 'ぢょ' },
		{ romanji: 'tsu', hiragana: 'つ' },
		{ romanji: 'te', hiragana: 'て' },
		{ romanji: 'to', hiragana: 'と' },
		{ romanji: 'na', hiragana: 'な' },
    { romanji: 'nya', hiragana: 'にゃ' },
		{ romanji: 'ni', hiragana: 'に' },
		{ romanji: 'nu', hiragana: 'ぬ' },
    { romanji: 'nyu', hiragana: 'にゅ' },
		{ romanji: 'ne', hiragana: 'ね' },
		{ romanji: 'no', hiragana: 'の' },
    { romanji: 'nyo', hiragana: 'にょ' },
		{ romanji: 'ha', hiragana: 'は' },
		{ romanji: 'hya', hiragana: 'ひゃ' },
    { romanji: 'bya', hiragana: 'びゃ' },
    { romanji: 'pya', hiragana: 'ぴゃ' },
    { romanji: 'hi', hiragana: 'ひ' },
    { romanji: 'hyu', hiragana: 'ひゅ' },
    { romanji: 'byu', hiragana: 'びゅ' },
    { romanji: 'pyu', hiragana: 'ぴゅ' },
		{ romanji: 'fu', hiragana: 'ふ' },
		{ romanji: 'he', hiragana: 'へ' },
		{ romanji: 'ho', hiragana: 'ほ' },
    { romanji: 'byo', hiragana: 'びょ' },
    { romanji: 'pyo', hiragana: 'ぴょ' },
    { romanji: 'hyo', hiragana: 'ひょ' },
		{ romanji: 'ma', hiragana: 'ま' },
		{ romanji: 'mi', hiragana: 'み' },
    { romanji: 'mya', hiragana: 'みゃ' },
		{ romanji: 'mu', hiragana: 'む' },
    { romanji: 'myu', hiragana: 'みゅ' },
		{ romanji: 'me', hiragana: 'め' },
		{ romanji: 'mo', hiragana: 'も' },
    { romanji: 'myo', hiragana: 'みょ' },
		{ romanji: 'ya', hiragana: 'や' },
		{ romanji: 'yu', hiragana: 'ゆ' },
		{ romanji: 'yo', hiragana: 'よ' },
		{ romanji: 'ra', hiragana: 'ら' },
		{ romanji: 'ri', hiragana: 'り' },
    { romanji: 'rya', hiragana: 'りゃ' },
		{ romanji: 'ru', hiragana: 'る' },
    { romanji: 'ryu', hiragana: 'りゅ' },
		{ romanji: 're', hiragana: 'れ' },
		{ romanji: 'ro', hiragana: 'ろ' },
    { romanji: 'ryo', hiragana: 'りょ' },
		{ romanji: 'wa', hiragana: 'わ' },
		{ romanji: 'wo', hiragana: 'を' },
		{ romanji: 'n', hiragana: 'ん' }
  ]

  const [input, setInput] = useState("")
  const [current, setCurrent] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [count, setCount] = useState(1) // start counting from 1
  const [error, setError] = useState(false)

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
    setCurrent(randomIndex)
  }

  const handleChange = event => {
    setInput(event.target.value)
  }

  // when refreshing the page, set everything back to zero
    window.onload = function() {
      setStreak(0)
      setMaxStreak(0)
      setCount(1)
    }

  //  pass button
  const pass = event => {
    event.preventDefault()
      setCount(count+1)  //pass 3 times
    if (count > 3) {
      setStreak(0)
      setMaxStreak(0)
      setCount(1)
    }
    setTimeout(() => {
      setRandomHiragana()
    }, 2000);
    setError(`Wrong! The correct answer for ${hiragana[current].hiragana} is "${hiragana[current].romanji}"`) // show message only 3 secs
    setTimeout(() => {
      resetError()
    }, 2000);
  }
  // show answer only 2 secs
  const resetError = () => {
    setError(``)
  }
  // reset streak button
  const resetStreak = event => {
    event.preventDefault()
    setStreak(0)
    setMaxStreak(0)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const congrats = ["Correct! かんぺきです!","Great job! よくできました!","Awesome! 良くやりましたね", "Excellent! すごいです!"]
    const randomCongrats = congrats[Math.floor(Math.random() * congrats.length)]
    if (input.toLowerCase() === hiragana[current].romanji) {
      setStreak(streak + 1)
      setMaxStreak(Math.max(streak + 1, maxStreak))
      setError(randomCongrats)
      setTimeout(() => {
        resetError()
      }, 2000);

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
      localStorage.setItem('streak', streak + 1)
    } else {
      setStreak(0)
      setError(`Wrong! The correct answer for ${hiragana[current].hiragana} is "${hiragana[current].romanji}"`) // use backtick for interpolation
      setTimeout(() => {
        resetError()
      }, 2000);

      localStorage.setItem('streak', 0)
    }
    // reset everything
    setInput('')
    setRandomHiragana()
    }

    useEffect(() => {
      setRandomHiragana()
      setStreak(parseInt(localStorage.getItem('streak')) || 0)
      setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
    }, [])

  return (
    // body
   <div className='min-h-screen bg-sky-800 text-red-200 text-center'>
 <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(https://wallpapers.com/images/hd/japanese-nature-mountain-view-b43hs4d102e4deiq.jpg)" }}>
    </div>
    <header>
      <h1 className="text-[4rem] font-bold uppercase pt-32">Hiragana Quiz</h1>
        <div>
          <p className="text-[2.5rem] p-10" >{streak}/{maxStreak}</p>
        </div>
    </header>
{/* ramdom hiragana display */}
    <div className='text-[14rem] font-bold'>
      {hiragana[current].hiragana}
    </div>

    <div>
      <p>Please type the answer in Romanji</p>
    </div>
{/* input box */}
    <div>
      <form onSubmit={handleSubmit}>
        <input
        className='w-3/12 h-10 text-center text-rose-400 p-2 relative z-2 rounded-lg mt-5'
        type="text"
        value={input}
        onChange={handleChange}/>
      </form>
    </div>

    <div className='mt-10 text-2xl'>
      {error && <p>{error}</p>}
    </div>
    <div className='flex flex-col items-center'>
      <button onClick={pass} className='border-2 border-rose-100 w-48 h-10 text-white bg-red-200 shadow-lg hover:bg-red-400 mt-10 relative z-2 rounded-lg ease-in duration-300'>Pass!</button>
      <button onClick={resetStreak} className='border-2 border-rose-100 w-48 h-10 text-white bg-rose-400 shadow-lg hover:bg-rose-600 mt-10 relative z-2 rounded-lg ease-in duration-300'>Reset streak!</button>
    </div>
{/* footer */}
    <div className='flex justify-center h-5'>
        <footer className='w-full h-20 bg-rose-100 z-2 absolute bottom-0 text-rose-300 p-8'>
        ©2024 Made with ♥️ by Chutima
        </footer>
      </div>


   </div>
  )
}

export default App
